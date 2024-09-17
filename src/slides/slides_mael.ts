import { HEADER_Y_POSITION, SlideElement } from '../types/index';

const slides: SlideElement[][] = [
  [
    {
      content: 'Usage of Chat & Workspace ',
      position: { x: 100, y: HEADER_Y_POSITION },
    },
  ],
  [
    {
      content: 'Cody and local LLM',
      position: { x: 200, y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/o1benchmark.png',
      position: { x: 0, y: 300 },
      opacity: 0,
    },
  ],
  [
    {
      content: 'Testing with Codium AI ',
      position: { x: 500, y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/codium.png',
      position: { x: 500, y: 300 },
      opacity: 0,
      isPokemonAudio: true,
    },
  ],
  [
    {
      content: 'PR Assistant',
      position: { x: 200, y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/coderabbit-flow.png',
      position: { x: 0, y: 200 },
      opacity: 0,
    },
  ],
  [
    {
      content: 'Bonus',
      position: { x: 200, y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/curry.jpg',
      position: { x: 0, y: 300 },
      opacity: 0,
    },
    // {
    //   content: 'New slide on same slide 🧙‍♂️',
    //   position: { x: 500, y: 500 },
    //   cleanPreviousSlideItems: true,
    // },
  ],
  [
    {
      content: 'Conclusion',
      position: { x: 200, y: HEADER_Y_POSITION },
    },
    {
      content: '',
      triggerFinal: true,
      position: { x: 100, y: HEADER_Y_POSITION },
    },
  ],
];
export default slides;
