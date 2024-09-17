export type Position = {
  x: number;
  y: number;
};

export type SlideElement = {
  content: string;
  position: Position;
  opacity?: number;
  cleanPreviousSlideItems?: boolean;
  isPokemonAudio?: boolean;
  triggerFinal?: boolean;
};

export const HEADER_Y_POSITION = 200;
export const TEXT_FIRST_LINE_Y_POSITION = 400;
export const TEXT_SECOND_LINE_Y_POSITION = 450;
export const TEXT_THIRD_LINE_Y_POSITION = 500;
export const TEXT_FOURTH_LINE_Y_POSITION = 550;
export const TEXT_FIFTH_LINE_Y_POSITION = 600;
