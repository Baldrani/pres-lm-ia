import slides from './slides/index';

const canvas: HTMLCanvasElement =
  (document.getElementById('gameCanvas') as HTMLCanvasElement) ||
  ({} as HTMLCanvasElement);
const ctx: CanvasRenderingContext2D = canvas.getContext(
  '2d',
) as CanvasRenderingContext2D;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const SCREEN_WIDTH: number = canvas.width;
const SCREEN_HEIGHT: number = canvas.height;
const playerImages: { [key: string]: HTMLImageElement } = {
  falling: new Image(),
  standingRight: new Image(),
  standingLeft: new Image(),
  movingRight: new Image(),
  movingLeft: new Image(),
};
playerImages.falling.src = 'https://i.imgur.com/yEgjvIj.png';
playerImages.standingRight.src = 'https://i.imgur.com/zTXnpLn.png';
playerImages.standingLeft.src = 'https://i.imgur.com/5z23GS8.png';
playerImages.movingRight.src = 'https://i.imgur.com/URdylT0.png';
playerImages.movingLeft.src = 'https://i.imgur.com/HopOYyN.png';
const player: {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  dx: number;
  dy: number;
  gravity: number;
  groundLevel: number;
  fastSpeed: number;
  direction: string;
  onGround: boolean;
  isVisible: boolean;
  moving: boolean;
} = {
  x: SCREEN_WIDTH / 2,
  y: 0,
  width: 150,
  height: 150,
  speed: 10,
  dx: 0,
  dy: 0,
  gravity: 0.8,
  groundLevel: SCREEN_HEIGHT - 10,
  fastSpeed: 50,
  direction: 'right',
  onGround: false,
  isVisible: false,
  moving: false,
};
let scrollOffset: number = 0;
let isShiftPressed: boolean = false;
let currentSlideIndex: number = 0;
const visibleLines: number[] = slides.map(() => 1);
const fadeAmounts: number[][] = slides.map((slide) => slide.map(() => 0));

const updateSlideNumber = (): void => {
  const slideNumberDiv: HTMLElement | null =
    document.getElementById('slide-number');
  if (
    slideNumberDiv &&
    currentSlideIndex >= 0 &&
    currentSlideIndex < slides.length
  ) {
    slideNumberDiv.textContent = `${currentSlideIndex + 1}`;
  }
};

export function drawPlayer(): void {
  if (!player.isVisible) return;
  let image: HTMLImageElement;
  if (!player.onGround) {
    image = playerImages.falling;
  } else if (player.moving) {
    image =
      player.direction === 'right'
        ? playerImages.movingRight
        : playerImages.movingLeft;
  } else {
    image =
      player.direction === 'right'
        ? playerImages.standingRight
        : playerImages.standingLeft;
  }
  ctx.drawImage(image, player.x, player.y, player.width, player.height);
}

function drawGround(): void {
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(
    -scrollOffset,
    SCREEN_HEIGHT - 30,
    SCREEN_WIDTH * (slides.length + 1),
    30,
  );
}

const imageCache: Map<string, HTMLImageElement> = new Map();

function getImage(src: string): HTMLImageElement {
  if (!imageCache.has(src)) {
    const img: HTMLImageElement = new Image();
    img.src = src;
    imageCache.set(src, img);
  }
  return imageCache.get(src) as HTMLImageElement;
}

function drawImage(
  content: string,
  x: number,
  y: number,
  fadeAmount: number,
): void {
  const img: HTMLImageElement = getImage(content);
  img.onload = function () {
    const scale: number = Math.min(600 / img.width, 600 / img.height);
    const imgWidth: number = img.width * scale;
    const imgHeight: number = img.height * scale;
    const imgX: number = x - imgWidth / 2;
    const imgY: number = y;
    ctx.globalAlpha = fadeAmount;
    ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
    ctx.globalAlpha = 1;
  };
  img.onerror = function () {
    console.error('Failed to load image at ' + content);
  };
}

export function drawBillboards(): void {
  slides.forEach((slide, index) => {
    const textX: number = SCREEN_WIDTH * index + SCREEN_WIDTH / 2;
    slide.forEach((item, itemIndex) => {
      const { content, position = {} } = item;
      let {
        //@ts-expect-error x is not defined
        x = textX - scrollOffset - ctx.measureText(content).width / 2,
      } = position;
      //@ts-expect-error y is not defined
      const { y = 0 } = position;
      if (x === undefined) {
        x = textX - scrollOffset - ctx.measureText(content).width / 2;
      } else {
        x = x + textX - SCREEN_WIDTH / 2 - scrollOffset;
      }
      if (itemIndex === 0) {
        ctx.fillStyle = '#3ad4a7';
        ctx.font = '30px Arial';
        ctx.fillText(content, x, y);
      } else {
        ctx.font = '20px Arial';
        if (itemIndex < visibleLines[index]) {
          if (fadeAmounts[index][itemIndex] < 1) {
            fadeAmounts[index][itemIndex] += 0.02;
          }
          if (
            content === null || content === void 0
              ? void 0
              : content.match(/\.(jpg|png|webp)$/)
          ) {
            drawImage(content, x, y, fadeAmounts[index][itemIndex]);
          } else {
            ctx.fillStyle = `rgba(0, 0, 0, ${fadeAmounts[index][itemIndex]})`;
            ctx.fillText(content, x, y);
          }
        }
      }
    });
  });
}

function isPlayerMovingOutOfBounds(): boolean {
  return player.x < SCREEN_WIDTH / 3 && player.dx < 0 && scrollOffset <= 0;
}

function isScrollOffsetNegative(): boolean {
  return scrollOffset < 0;
}

function updatePlayerPosition(): void {
  if (!player.isVisible) return;
  const effectiveSpeed: number = isShiftPressed
    ? player.fastSpeed
    : player.speed;
  player.x += player.dx * effectiveSpeed;
  player.dy += player.gravity;
  player.y += player.dy;
  if (player.y + player.height >= player.groundLevel) {
    player.y = player.groundLevel - player.height;
    player.dy = 0;
    player.onGround = true;
  } else {
    player.onGround = false;
  }
  if (isPlayerMovingOutOfBounds()) {
    player.x = SCREEN_WIDTH / 3;
  }
  const maxRight: number = SCREEN_WIDTH * (slides.length - 1) + SCREEN_WIDTH;
  if (
    player.x > (SCREEN_WIDTH * 2) / 3 &&
    player.dx > 0 &&
    scrollOffset >= maxRight - SCREEN_WIDTH
  ) {
    player.x = (SCREEN_WIDTH * 2) / 3;
  }
  if (player.x > SCREEN_WIDTH * 0.75 && player.dx > 0) {
    scrollOffset += player.dx * effectiveSpeed;
    player.x = SCREEN_WIDTH * 0.75;
  }
  if (player.x < SCREEN_WIDTH * 0.25 && player.dx < 0 && scrollOffset > 0) {
    scrollOffset += player.dx * effectiveSpeed;
    player.x = SCREEN_WIDTH * 0.25;
  }
  if (isScrollOffsetNegative()) {
    scrollOffset = 0;
  }
  if (scrollOffset > maxRight - SCREEN_WIDTH) {
    scrollOffset = maxRight - SCREEN_WIDTH;
  }
  currentSlideIndex = Math.floor(scrollOffset / SCREEN_WIDTH);
  updateSlideNumber();
}

function clearCanvas(): void {
  ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
}

export function gameLoop(): void {
  clearCanvas();
  drawGround();
  drawBillboards();
  drawPlayer();
  updatePlayerPosition();
  requestAnimationFrame(gameLoop);
}

function keyDownHandler(e: KeyboardEvent): void {
  if (e.key === 'ArrowRight' || e.key === 'd') {
    player.dx = 1;
    player.direction = 'right';
    player.moving = true;
  } else if (e.key === 'ArrowLeft' || e.key === 'a') {
    player.dx = -1;
    player.direction = 'left';
    player.moving = true;
  } else if (e.key === 'Shift') {
    isShiftPressed = true;
  } else if (e.key === 'p' || e.key === 'P') {
    player.isVisible = true;
  } else if (
    e.key === ' ' &&
    visibleLines[currentSlideIndex] < slides[currentSlideIndex].length
  ) {
    visibleLines[currentSlideIndex]++;
  }
}

function keyUpHandler(e: KeyboardEvent): void {
  if (
    e.key === 'ArrowRight' ||
    e.key === 'd' ||
    e.key === 'ArrowLeft' ||
    e.key === 'a'
  ) {
    player.dx = 0;
    player.moving = false;
  } else if (e.key === 'Shift') {
    isShiftPressed = false;
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
