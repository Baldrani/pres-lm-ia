import { HEADER_Y_POSITION, SlideElement } from '../types/index';

const slides: SlideElement[][] = [
  [
    {
      content: 'Usage of Copilote with Workspace & Brushes',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
  ],
  [
    {
      content: 'Testing with Codium AI ',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/codium.png',
      position: { x: 300, y: 300 },
      opacity: 0,
      isPokemonAudio: true,
    },
  ],
  [
    {
      content: 'PR Assistant',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/coderabbit-flow.png',
      position: { x: -200, y: 300 },
      dontScale: true,
      opacity: 0,
    },
  ],
  [
    {
      content: 'Continue and local LLM',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/o1benchmark.png',
      position: { x: 300, y: 300 },
      opacity: 0,
    },
  ],
  [
    {
      content: 'Bonus',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/before-curry.jpg',
      position: { x: 300, y: 300 },
      opacity: 0,
    },
    {
      content: 'http://localhost:3000/static/images/curry.jpg',
      position: { x: 800, y: 300 },
      opacity: 0,
    },
  ],
  [
    {
      content: 'Conclusion',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/meme.webp',
      position: { x: 100, y: 300 },
      opacity: 0,
    },
    {
      content: 'http://localhost:3000/static/images/poll5.png',
      position: { x: 800, y: 300 },
    },
  ],
  [
    {
      content: 'Thank you',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: '',
      triggerFinal: true,
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
  ],
];
export default slides;
