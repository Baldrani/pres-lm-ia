import {
  SlideElement,
  HEADER_Y_POSITION,
  TEXT_FIFTH_LINE_Y_POSITION,
  TEXT_FIRST_LINE_Y_POSITION,
  TEXT_FOURTH_LINE_Y_POSITION,
  TEXT_SECOND_LINE_Y_POSITION,
  TEXT_THIRD_LINE_Y_POSITION,
} from '../types/index';

const emptyText = {
  content: '',
  position: { x: 'center', y: TEXT_FIRST_LINE_Y_POSITION },
} as SlideElement;


const slides: SlideElement[][] = [
  [
    {
      content: 'Exploring AI with Atlas',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
  ],
  [
    {
      content: 'Question time',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    emptyText,
    {
      content: 'http://localhost:3000/static/images/atlas_movie.png',
      position: { x: 100, y: 300 },
      opacity: 0,
    },
    {
      content: 'http://localhost:3000/static/images/poll1.png',
      position: { x: 550, y: 300 },
      opacity: 0,
    },
  ],
  [
    {
      content: 'Spoiler alert',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
  ],
  [
    {
      content: 'Super Mario',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    emptyText,
    {
      content:
        'const maxRight: number = SCREEN_WIDTH * (slides.length - 1) + SCREEN_WIDTH / 2;',
      position: { x: 'center', y: TEXT_FIRST_LINE_Y_POSITION },
    },
  ],
  [
    {
      content: 'Improving Abilities?',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    emptyText,
    {
      content: 'Great for PoC',
      position: { x: 'center', y: TEXT_FIRST_LINE_Y_POSITION },
    },
    {
      content: 'Common skills',
      position: { x: 'center', y: TEXT_SECOND_LINE_Y_POSITION },
    },
    {
      content: 'Basic problem solving',
      position: { x: 'center', y: TEXT_THIRD_LINE_Y_POSITION },
    },
    {
      content: 'Hallucinations',
      position: { x: 'center', y: TEXT_FOURTH_LINE_Y_POSITION },
    },
    {
      content: `Can't reason`,
      position: { x: 'center', y: TEXT_FIFTH_LINE_Y_POSITION },
    },
  ],
  [
    {
      content: 'GPS Radar',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    emptyText,
    {
      content: 'debug',
      position: { x: 'center', y: TEXT_FIRST_LINE_Y_POSITION },
    },
    {
      content: 'add/modify features',
      position: { x: 'center', y: TEXT_SECOND_LINE_Y_POSITION },
    },
    {
      content: 'RIP',
      position: { x: 'center', y: TEXT_THIRD_LINE_Y_POSITION },
    },
  ],
  [
    {
      content: 'Conclusions',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    emptyText,
    {
      content: 'AI assistants are the new calculators',
      position: { x: 'center', y: TEXT_FIRST_LINE_Y_POSITION },
    },
    {
      content: 'Adjust to the new reality',
      position: { x: 'center', y: TEXT_SECOND_LINE_Y_POSITION },
    },
  ],
  [
    {
      content: 'And you?',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    emptyText,
    {
      content: 'http://localhost:3000/static/images/poll2.png',
      position: { x: 'center', y: 300 },
      opacity: 0,
    },
  ],
  [
    {
      content: 'I want you for AI Army',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    emptyText,
    {
      content: 'http://localhost:3000/static/images/chatgpt_percentage.png',
      position: { x: 300, y: 300 },
      opacity: 0,
    },
    {
      content: 'http://localhost:3000/static/images/poll3.png',
      position: { x: 800, y: 450 },
      opacity: 0,
    },
  ],
  [
    {
      content: 'BUT?',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    emptyText,
    {
      content: 'http://localhost:3000/static/images/poll4.png',
      position: { x: 'center', y: 300 },
      opacity: 0,
    },
  ],
];

export default slides;
