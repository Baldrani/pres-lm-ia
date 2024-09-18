import { setupEventHandlers } from '../src/events';
import { createPlayer } from '../src/player';

describe('event', () => {
  it("should set player.dx to 1 and direction to 'right' when 'ArrowRight' is pressed", () => {
    const player = {
      x: 0,
      y: 0,
      width: 10,
      height: 10,
      speed: 5,
      dx: 0,
      dy: 0,
      gravity: 2,
      groundLevel: 100,
      fastSpeed: 10,
      direction: 'left',
      onGround: true,
      isVisible: false,
      moving: false,
      jumping: false,
    };
    const visibleLines = [0];
    const state = {
      currentSlideIndex: 0,
      isShiftPressed: false,
      isBackgroundVisible: true,
    };
    setupEventHandlers(player, visibleLines, state);

    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    document.dispatchEvent(event);

    expect(player.dx).toBe(1);
    expect(player.direction).toBe('right');
    expect(player.moving).toBe(true);
  });

  it("should move player right when 'ArrowRight' is pressed", () => {
    const player = createPlayer(60, 50);
    const visibleLines = [];
    const state = { currentSlideIndex: 0, isShiftPressed: false };
    setupEventHandlers(player, visibleLines, state);

    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
    document.dispatchEvent(event);

    expect(player.dx).toEqual(1);
    expect(player.direction).toEqual('right');
    expect(player.moving).toEqual(true);
  });

  // it('should not change player.dx or player.moving when an unrelated key is pressed', () => {
  //   const player = createPlayer(60, 50);
  //   const visibleLines = [];
  //   const state = { currentSlideIndex: 0, isShiftPressed: false };
  //   setupEventHandlers(player, visibleLines, state);

  //   const event = new KeyboardEvent('keydown', { key: 'x' });
  //   document.dispatchEvent(event);

  //   expect(player.dx).toBe(0);
  //   expect(player.moving).toBe(false);
  // });
});
