import { setupEventHandlers } from '../src/events';
import { createPlayer } from '../src/player';

describe('event', () => {
  // Player moves right when 'ArrowRight' is pressed
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
});
