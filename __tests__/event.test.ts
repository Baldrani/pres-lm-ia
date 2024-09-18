import { setupEventHandlers } from '../src/events';

describe('event', () => {
  it('should not change player state when an unhandled key is pressed', () => {
    const player = {
      x: 0,
      y: 0,
      width: 10,
      height: 10,
      dx: 0,
      direction: '',
      moving: false,
      isVisible: false,
      onGround: true,
      dy: 0,
      jumping: false,
      bullets: [],
    };
    const visibleLines = [0];
    const state = {
      currentSlideIndex: 0,
      isShiftPressed: false,
      isBackgroundVisible: true,
    };

    setupEventHandlers(player, visibleLines, state);

    const initialPlayerState = { ...player };
    const event = new KeyboardEvent('keydown', { key: 'x' });
    document.dispatchEvent(event);

    expect(player).toEqual(initialPlayerState);
  });
});
