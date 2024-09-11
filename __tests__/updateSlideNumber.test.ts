import { updateSlideNumber } from '../src/drawBilboard';
import slides from '../src/slides/index';
import { State } from '../src/events';

describe('updateSlideNumber', () => {
  let state: State;
  let slideNumberDiv: HTMLElement;

  beforeEach(() => {
    // Set up the initial state
    state = {
      isShiftPressed: false,
      currentSlideIndex: 0,
    };

    // Create a mock slide number div
    slideNumberDiv = document.createElement('div');
    slideNumberDiv.id = 'slide-number';
    document.body.appendChild(slideNumberDiv);
  });

  afterEach(() => {
    // Clean up the DOM
    document.body.removeChild(slideNumberDiv);
  });

  it('should update the slide number correctly', () => {
    state.currentSlideIndex = 1;
    updateSlideNumber();
    expect(slideNumberDiv.textContent).toBe('2');
  });

  it('should not update the slide number if the index is out of bounds', () => {
    state.currentSlideIndex = -1;
    updateSlideNumber();
    expect(slideNumberDiv.textContent).toBe('');

    state.currentSlideIndex = slides.length;
    updateSlideNumber();
    expect(slideNumberDiv.textContent).toBe('');
  });
});
