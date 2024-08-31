import slides from "./slides/index.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const SCREEN_WIDTH = canvas.width;
const SCREEN_HEIGHT = canvas.height;

// Image assets
const playerImages = {
    falling: new Image(),
    standingRight: new Image(),
    standingLeft: new Image(),
    movingRight: new Image(),
    movingLeft: new Image(),
};

playerImages.falling.src = "https://i.imgur.com/yEgjvIj.png";
playerImages.standingRight.src = "https://i.imgur.com/zTXnpLn.png";
playerImages.standingLeft.src = "https://i.imgur.com/5z23GS8.png";
playerImages.movingRight.src = "https://i.imgur.com/URdylT0.png";
playerImages.movingLeft.src = "https://i.imgur.com/HopOYyN.png";

let player = {
    x: SCREEN_WIDTH / 2, // Start at the center of the screen horizontally
    y: 0, // Start from the top of the screen
    width: 150, // 3 times bigger
    height: 150, // 3 times bigger
    speed: 10, // Doubled the initial speed
    dx: 0,
    dy: 0, // Vertical speed for falling
    gravity: 0.8, // Gravity strength
    groundLevel: SCREEN_HEIGHT - 10, // Adjusted for the bigger player size
    fastSpeed: 50, // 5 times the normal speed (also doubled)
    direction: "right", // "right" or "left"
    onGround: false, // Check if the player is on the ground
    isVisible: false, // Player is not visible until 'P' is pressed
    moving: false, // Check if the player is moving left or right
};

let scrollOffset = 0;
let isShiftPressed = false;
let currentSlideIndex = 0; // Track current slide index
let visibleLines = slides.map(() => 1); // Track the number of visible lines for each slide
let fadeAmounts = slides.map(slide => slide.map(() => 0)); // Initialize all fade amounts to 0 for each line

// Function to update the slide number in the div
const updateSlideNumber = () => {
    const slideNumberDiv = document.getElementById("slide-number");
    if (slideNumberDiv && currentSlideIndex >= 0 && currentSlideIndex < slides.length) {
        slideNumberDiv.textContent = currentSlideIndex + 1;
    }
};

// Function to draw the player
export function drawPlayer() {
    if (!player.isVisible) return;

    let image;
    if (!player.onGround) {
        image = playerImages.falling;
    } else if (player.moving) {
        image = player.direction === "right" ? playerImages.movingRight : playerImages.movingLeft;
    } else {
        image = player.direction === "right" ? playerImages.standingRight : playerImages.standingLeft;
    }

    ctx.drawImage(image, player.x, player.y, player.width, player.height);
}

// Function to draw the ground
function drawGround() {
    ctx.fillStyle = "#FFFFFF"; // White ground color
    ctx.fillRect(-scrollOffset, SCREEN_HEIGHT - 30, SCREEN_WIDTH * (slides.length + 1), 30); // Extend the ground to fit the last slide
}

// Function to draw billboards with header and text lines or images
export function drawBillboards() {
    slides.forEach((slide, index) => {
        let textX = SCREEN_WIDTH * index + SCREEN_WIDTH / 2;
        let headerY = 50; // Y-position for headers

        // Draw header
        ctx.fillStyle = "#3ad4a7"; // Header color
        ctx.font = "30px Arial";
        ctx.fillText(slide[0], textX - scrollOffset - ctx.measureText(slide[0]).width / 2, headerY);

        // Draw only the visible text lines or images below the header with fade-in effect
        ctx.font = "20px Arial";
        slide.slice(1).forEach((line, lineIndex) => {
            if (lineIndex < visibleLines[index] - 1) {
                // Ensure the line is supposed to be visible
                if (fadeAmounts[index][lineIndex + 1] < 1) {
                    fadeAmounts[index][lineIndex + 1] += 0.02; // Increment fade-in amount
                }

                // Check if the text is a URL ending in jpg, png, or webp
                if (line.match(/\.(jpg|png|webp)$/)) {
                    let img = new Image();
                    img.src = line;
                    img.onload = function () {
                        let scale = Math.min(600 / img.width, 600 / img.height); // Scale to fit within 600px max
                        let imgWidth = img.width * scale;
                        let imgHeight = img.height * scale;
                        const imgX = textX - scrollOffset - imgWidth / 2;
                        const imgY = headerY + 40 + lineIndex * 100; // Adjust Y position for image

                        // Set alpha directly in drawImage fill style
                        //ctx.fillStyle = `rgba(255, 255, 255, ${fadeAmounts[index][lineIndex + 1]})`;
                        ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
                    };
                    img.onerror = function () {
                        console.error("Failed to load image at " + line);
                    };
                } else {
                    ctx.fillStyle = `rgba(0, 0, 0, ${fadeAmounts[index][lineIndex + 1]})`; // Set color with alpha for fade-in
                    const lineY = headerY + 40 + lineIndex * 30; // Calculate y-position for each line of text
                    ctx.fillText(line, textX - scrollOffset - ctx.measureText(line).width / 2, lineY);
                }
            }
        });
    });
}

function isPlayerMovingOutOfBounds() {
    return player.x < SCREEN_WIDTH / 3 && player.dx < 0 && scrollOffset <= 0;
}

function isScrollOffsetNegative() {
    return scrollOffset < 0;
}

// Function to update player position
function updatePlayerPosition() {
    if (!player.isVisible) return;

    let effectiveSpeed = isShiftPressed ? player.fastSpeed : player.speed;
    player.x += player.dx * effectiveSpeed;

    // Apply gravity
    player.dy += player.gravity;
    player.y += player.dy;

    // Check if the player is on the ground
    if (player.y + player.height >= player.groundLevel) {
        player.y = player.groundLevel - player.height;
        player.dy = 0;
        player.onGround = true;
    } else {
        player.onGround = false;
    }

    // Scrolling logic and movement constraints

    // Prevent moving left beyond the left 1/3rd of the first slide
    if (isPlayerMovingOutOfBounds()) {
        player.x = SCREEN_WIDTH / 3;
    }

    // Updated maxRight calculation
    const maxRight = SCREEN_WIDTH * (slides.length - 1) + SCREEN_WIDTH;

    // Prevent moving right beyond the right edge of the last slide
    if (player.x > (SCREEN_WIDTH * 2) / 3 && player.dx > 0 && scrollOffset >= maxRight - SCREEN_WIDTH) {
        player.x = (SCREEN_WIDTH * 2) / 3;
    }

    // Scrolling logic: Move canvas forward if player reaches the last 1/4th of the screen
    if (player.x > SCREEN_WIDTH * 0.75 && player.dx > 0) {
        scrollOffset += player.dx * effectiveSpeed;
        player.x = SCREEN_WIDTH * 0.75;
    }

    // Scrolling logic: Move canvas backward if player reaches the left 1/4th of the screen
    if (player.x < SCREEN_WIDTH * 0.25 && player.dx < 0 && scrollOffset > 0) {
        scrollOffset += player.dx * effectiveSpeed;
        player.x = SCREEN_WIDTH * 0.25;
    }

    // Ensure the screen does not scroll backward too far
    if (isScrollOffsetNegative()) {
        scrollOffset = 0;
    }

    // Ensure the screen does not scroll forward too far
    if (scrollOffset > maxRight - SCREEN_WIDTH) {
        scrollOffset = maxRight - SCREEN_WIDTH;
    }

    // Update current slide index based on scroll position
    currentSlideIndex = Math.floor(scrollOffset / SCREEN_WIDTH);

    // Update the slide number in the div
    updateSlideNumber();
}

// Function to clear canvas
function clearCanvas() {
    ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
}

// Game loop function
export function gameLoop() {
    clearCanvas();
    drawGround();
    drawBillboards();
    drawPlayer();
    updatePlayerPosition();

    requestAnimationFrame(gameLoop);
}

// Event handler for keydown events
function keyDownHandler(e) {
    console.log(e.key);
    console.log(currentSlideIndex);
    if (e.key === "ArrowRight" || e.key === "d") {
        player.dx = 1;
        player.direction = "right";
        player.moving = true;
    } else if (e.key === "ArrowLeft" || e.key === "a") {
        player.dx = -1;
        player.direction = "left";
        player.moving = true;
    } else if (e.key === "Shift") {
        isShiftPressed = true;
    } else if (e.key === "p" || e.key === "P") {
        player.isVisible = true; // Make the player visible
    } else if (e.key === " " && visibleLines[currentSlideIndex] < slides[currentSlideIndex].length) {
        console.log(currentSlideIndex);
        // Show the next line of text if space is pressed
        visibleLines[currentSlideIndex]++;
    }
}

// Event handler for keyup events
function keyUpHandler(e) {
    if (e.key === "ArrowRight" || e.key === "d" || e.key === "ArrowLeft" || e.key === "a") {
        player.dx = 0;
        player.moving = false;
    } else if (e.key === "Shift") {
        isShiftPressed = false;
    }
}

// Add event listeners for keydown and keyup events
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
