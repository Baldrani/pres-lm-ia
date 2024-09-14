import { HEADER_Y_POSITION, TEXT_FIRST_LINE_Y_POSITION, TEXT_SECOND_LINE_Y_POSITION } from '../drawing';
import { SlideElement } from '../types/index';

const slides: SlideElement[][] = [
  [{ content: 'Exploring AI with Atlas', position: { x: 100, y: HEADER_Y_POSITION } }],
  [
    { content: '[poll] Have you watched Atlas?', position: { x: 100, y: HEADER_Y_POSITION } },
  ],
  [ { content: 'Spoiler alert', position: { x: 100, y: HEADER_Y_POSITION } }, ],
  [ { content: 'Improving Abilities', position: { x: 100, y: HEADER_Y_POSITION } }, ],
  [ { content: 'Improving Abilities in the real world', position: { x: 100, y: HEADER_Y_POSITION } }, ],
  [ { content: 'Improving Abilities in the digital world', position: { x: 100, y: HEADER_Y_POSITION } }, ],
  [ { content: 'AI assistants', position: { x: 100, y: HEADER_Y_POSITION } }],
  [ { content: '[poll] AI assistants question?????', position: { x: 100, y: HEADER_Y_POSITION } }, ],
  [
     { content: 'Chatbots & Conversational AI', position: { x: 100, y: HEADER_Y_POSITION } }, 
     { content: 'ChatGPT', position: { x: 100, y: TEXT_FIRST_LINE_Y_POSITION } }, 
     { content: 'tabnine', position: { x: 100, y: TEXT_SECOND_LINE_Y_POSITION } }, 
  ],[
     { content: 'Code Autocompletion', position: { x: 100, y: HEADER_Y_POSITION } }, 
     { content: 'Copilot', position: { x: 100, y: TEXT_FIRST_LINE_Y_POSITION } }, 
  ],[
     { content: 'Code Quality and Refactoring', position: { x: 100, y: HEADER_Y_POSITION } }, 
     { content: 'Copilot', position: { x: 100, y: TEXT_FIRST_LINE_Y_POSITION } }, 
     { content: 'Sonarcube', position: { x: 100, y: TEXT_SECOND_LINE_Y_POSITION } }, 
  ],[
     { content: 'Testing and Debugging', position: { x: 100, y: HEADER_Y_POSITION } }, 
     { content: 'Codium AI', position: { x: 100, y: TEXT_FIRST_LINE_Y_POSITION } }, 
  ],[
     { content: 'Security', position: { x: 100, y: HEADER_Y_POSITION } }, 
     { content: 'Snyk AI', position: { x: 100, y: TEXT_FIRST_LINE_Y_POSITION } }, 
  ],
  [ { content: '[poll] How often do you use AI tools?', position: { x: 100, y: HEADER_Y_POSITION } }, ],
  [ { content: '[poll] Have you felt any improvement using those tools?', position: { x: 100, y: HEADER_Y_POSITION } }, ],
];

export default slides;
