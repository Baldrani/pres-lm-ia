import { HEADER_Y_POSTION } from '../drawing';
import { SlideElement } from '../types/index';

const slides: SlideElement[][] = [
  [{ content: 'Exploring AI with Atlas', position: { x: 100, y: 50 } }],
  [
    { content: 'Header 2', position: { x: 200, y: HEADER_Y_POSTION } },
    {
      content: 'text 2 text 2 text 2 text 2 text 2 text 2',
      position: { x: 200, y: 500 },
    },
    {
      content: 'text 2 text 2 text 2 text 2 text 2 text 2',
      position: { x: 400, y: 600 },
      cleanPreviousSlideItems: true,
    },
  ],
];

export default slides;
