import { setupEventHandlers } from '../src/events';
import { createPlayer } from '../src/player';

describe('event', () => {
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

  it('should not change player.dx or player.moving when an unrelated key is pressed', () => {
    const player = createPlayer(60, 50);
    const visibleLines = [];
    const state = { currentSlideIndex: 0, isShiftPressed: false };
    setupEventHandlers(player, visibleLines, state);

    const event = new KeyboardEvent('keydown', { key: 'x' });
    document.dispatchEvent(event);

    expect(player.dx).toBe(0);
    expect(player.moving).toBe(false);
  });
});
