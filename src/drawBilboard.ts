import slides from './slides/index';
import { setupCanvas } from './canvas';
import { createPlayer } from './player';
import { drawPlayer, drawGround, drawBillboards, clearCanvas } from './drawing';
import { setupEventHandlers, State } from './events';

const { ctx, SCREEN_WIDTH, SCREEN_HEIGHT } = setupCanvas();
const player = createPlayer(SCREEN_WIDTH, SCREEN_HEIGHT);

let scrollOffset: number = 0;
const state: State = {
  isShiftPressed: false,
  currentSlideIndex: 0,
};
const visibleLines: number[] = slides.map(() => 1);

export const updateSlideNumber = (): void => {
  const slideNumberDiv: HTMLElement | null =
    document.getElementById('slide-number');
  if (
    slideNumberDiv &&
    state.currentSlideIndex >= 0 &&
    state.currentSlideIndex < slides.length
  ) {
    slideNumberDiv.textContent = `${state.currentSlideIndex + 1}`;
  }
};

const isPlayerMovingOutOfBounds = (): boolean => {
  return player.x < SCREEN_WIDTH / 3 && player.dx < 0 && scrollOffset <= 0;
};

const isScrollOffsetNegative = (): boolean => {
  return scrollOffset < 0;
};

const updatePlayerPosition = (): void => {
  if (!player.isVisible) return;
  const effectiveSpeed: number = state.isShiftPressed
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
  state.currentSlideIndex = Math.floor(scrollOffset / SCREEN_WIDTH);
  updateSlideNumber();
};

export const gameLoop = (): void => {
  clearCanvas(ctx, SCREEN_WIDTH, SCREEN_HEIGHT);
  drawGround(ctx, scrollOffset, SCREEN_HEIGHT, SCREEN_WIDTH, slides.length);
  drawBillboards(ctx, scrollOffset, SCREEN_WIDTH, visibleLines);
  drawPlayer(ctx, player);
  updatePlayerPosition();
  requestAnimationFrame(gameLoop);
};

setupEventHandlers(player, visibleLines, state);
