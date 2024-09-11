import { Player } from './player';
import slides from './slides/index';

export interface State {
  isShiftPressed: boolean;
  currentSlideIndex: number;
}

export const setupEventHandlers = (
  player: Player,
  visibleLines: number[],
  state: State,
): void => {
  const keyDownHandler = (e: KeyboardEvent): void => {
    if (e.key === 'ArrowRight' || e.key === 'd') {
      player.dx = 1;
      player.direction = 'right';
      player.moving = true;
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
      player.dx = -1;
      player.direction = 'left';
      player.moving = true;
    } else if (e.key === 'Shift') {
      state.isShiftPressed = true;
    } else if (e.key === 'p' || e.key === 'P') {
      player.isVisible = true;
    } else if (
      e.key === ' ' &&
      visibleLines[state.currentSlideIndex] <
        slides[state.currentSlideIndex].length
    ) {
      visibleLines[state.currentSlideIndex]++;
    }
  };

  const keyUpHandler = (e: KeyboardEvent): void => {
    if (
      e.key === 'ArrowRight' ||
      e.key === 'd' ||
      e.key === 'ArrowLeft' ||
      e.key === 'a'
    ) {
      player.dx = 0;
      player.moving = false;
    } else if (e.key === 'Shift') {
      state.isShiftPressed = false;
    }
  };

  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);
};
