import { SlideElement } from '../types/index';

const slides: SlideElement[][] = [
  [
    { content: 'Header 3', position: { x: 100, y: 50 } },
    {
      content:
        'https://www.rtes.fr/system/files/inline-images/image%20de%20test.jpeg',
      position: { x: 500, y: 500 },
      opacity: 0,
    },
    {
      content: 'https://i.imgflip.com/92t6n4.jpg',
      position: { x: 500, y: 500 },
      opacity: 0,
    },
    {
      content: 'New slide on same slide 🧙‍♂️',
      position: { x: 500, y: 500 },
      cleanPreviousSlideItems: true,
    },
  ],
  [
    { content: 'Header 4', position: { x: 200, y: 50 } },
    { content: 'text 4 text 4 text 4 text 4', position: { x: 200, y: 100 } },
  ],
];
export default slides;
