import {
  SlideElement,
  HEADER_Y_POSITION,
  TEXT_FIFTH_LINE_Y_POSITION,
  TEXT_FIRST_LINE_Y_POSITION,
  TEXT_FOURTH_LINE_Y_POSITION,
  TEXT_SECOND_LINE_Y_POSITION,
  TEXT_THIRD_LINE_Y_POSITION,
} from '../types/index';

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
    {
      content: 'http://localhost:3000/static/images/atlas_movie.png',
      position: { x: 0, y: 300 },
      opacity: 0,
    },
    {
      content: 'http://localhost:3000/static/images/poll1.png',
      position: { x: 500, y: 300 },
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
      content: 'AI assistants are the new calculators',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'Adjust to the new reality',
      position: { x: 'center', y: TEXT_FIRST_LINE_Y_POSITION },
    },
  ],
  [
    {
      content: 'And you?',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/poll2.png',
      position: { x: 'center', y: 300 },
      opacity: 0,
    },
  ],
  [
    {
      content: 'Chatbots & Conversational AI',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'ChatGPT',
      position: { x: 'center', y: TEXT_FIRST_LINE_Y_POSITION },
    },
    {
      content: 'Tabnine',
      position: { x: 'center', y: TEXT_SECOND_LINE_Y_POSITION },
    },
  ],
  [
    {
      content: 'Code Autocompletion',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'Copilot',
      position: { x: 'center', y: TEXT_FIRST_LINE_Y_POSITION },
    },
  ],
  [
    {
      content: 'Code Quality and Refactoring',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'Copilot',
      position: { x: 'center', y: TEXT_FIRST_LINE_Y_POSITION },
    },
    {
      content: 'Sonarcube',
      position: { x: 'center', y: TEXT_SECOND_LINE_Y_POSITION },
    },
  ],
  [
    {
      content: 'Testing and Debugging',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'Codium AI',
      position: { x: 'center', y: TEXT_FIRST_LINE_Y_POSITION },
    },
  ],
  [
    {
      content: 'I want you for AI Army',
      position: { x: 'center', y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/chatgpt_percentage.png',
      position: { x: 0, y: 300 },
      opacity: 0,
    },
    {
      content: 'http://localhost:3000/static/images/poll3.png',
      position: { x: 500, y: 500 },
      opacity: 0,
    },
  ],
  [
    {
      content: 'BUT?',
      position: { x: 100, y: HEADER_Y_POSITION },
    },
    {
      content: 'http://localhost:3000/static/images/poll4.png',
      position: { x: 500, y: 500 },
      opacity: 0,
    },
  ],
];

export default slides;
