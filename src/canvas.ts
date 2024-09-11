export const setupCanvas = (): {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  SCREEN_WIDTH: number;
  SCREEN_HEIGHT: number;
} => {
  const canvas: HTMLCanvasElement =
    (document.getElementById('gameCanvas') as HTMLCanvasElement) ||
    ({} as HTMLCanvasElement);
  const ctx: CanvasRenderingContext2D = canvas.getContext(
    '2d',
  ) as CanvasRenderingContext2D;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const SCREEN_WIDTH: number = canvas.width;
  const SCREEN_HEIGHT: number = canvas.height;

  return { canvas, ctx, SCREEN_WIDTH, SCREEN_HEIGHT };
};
