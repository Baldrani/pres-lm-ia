import { HEADER_Y_POSITION, SlideElement } from '../types/index';

const slides: SlideElement[][] = [
  [
    {
      content: 'Usage of Chat & Workspace ',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
  ],
  [
    {
      content: 'Continue and local LLM',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/o1benchmark.png',
      position: { x: 'center', y: 300 },
      opacity: 0,
    },
  ],
  [
    {
      content: 'Testing with Codium AI ',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/codium.png',
      position: { x: 'center', y: 300 },
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
      position: { x: 'center', y: 300 },
      opacity: 0,
    },
  ],
  [
    {
      content: 'Bonus',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/curry.jpg',
      position: { x: 'center', y: 300 },
      opacity: 0,
    },
    // {
    //   content: 'New slide on same slide 🧙‍♂️',
    //   position: { x:'center', y: 500 },
    //   cleanPreviousSlideItems: true,
    // },
  ],
  [
    {
      content: 'Conclusion',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/meme.webp',
      position: { x: 'center', y: 300 },
      opacity: 0,
    },
    {
      content: 'http://localhost:3000/static/images/poll5.png',
      position: { x: 'center', y: 300 },
      cleanPreviousSlideItems: true,
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
