import { Player, playerImages } from './player';
import slides from './slides/index';
import { HEADER_Y_POSITION } from './types';

const imageCache: Map<string, HTMLImageElement> = new Map();

export const getImage = (src: string): HTMLImageElement => {
  if (!imageCache.has(src)) {
    const img: HTMLImageElement = new Image();
    img.src = src;
    imageCache.set(src, img);
  }
  return imageCache.get(src) as HTMLImageElement;
};

export const drawImage = (
  ctx: CanvasRenderingContext2D,
  content: string,
  x: number,
  y: number,
  fadeAmount: number,
): void => {
  const img: HTMLImageElement = getImage(content);
  if (img.complete) {
    const scale: number = Math.min(600 / img.width, 600 / img.height);
    const imgWidth: number = img.width * scale;
    const imgHeight: number = img.height * scale;
    const imgX: number = x + imgWidth / 2;
    const imgY: number = y;
    ctx.globalAlpha = fadeAmount;
    ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
    ctx.globalAlpha = 1;
  } else {
    img.onload = function () {
      const scale: number = Math.min(600 / img.width, 600 / img.height);
      const imgWidth: number = img.width * scale;
      const imgHeight: number = img.height * scale;
      const imgX: number = x + imgWidth / 2;

      const imgY: number = y;
      ctx.globalAlpha = fadeAmount;
      ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
      ctx.globalAlpha = 1;
    };
    img.onerror = function () {
      console.error('Failed to load image at ' + content);
    };
  }
};

export const drawPlayer = (
  ctx: CanvasRenderingContext2D,
  player: Player,
): void => {
  if (!player.isVisible) return;
  let image: HTMLImageElement;
  if (!player.onGround) {
    image = playerImages.falling;
  } else if (player.moving) {
    image =
      player.direction === 'right'
        ? playerImages.movingRight
        : playerImages.movingLeft;
  } else {
    image =
      player.direction === 'right'
        ? playerImages.standingRight
        : playerImages.standingLeft;
  }
  ctx.drawImage(image, player.x, player.y, player.width, player.height);
};

export const drawGround = (
  ctx: CanvasRenderingContext2D,
  scrollOffset: number,
  screenHeight: number,
  screenWidth: number,
  slidesLength: number,
): void => {
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(
    -scrollOffset,
    screenHeight - 30,
    screenWidth * (slidesLength + 1),
    30,
  );
};

export const drawBillboards = (
  ctx: CanvasRenderingContext2D,
  scrollOffset: number,
  screenWidth: number,
  visibleLines: number[],
): void => {
  slides.forEach((slide, index) => {
    const textX: number = screenWidth * index + screenWidth / 2;
    slide.forEach((item, itemIndex) => {
      const { content, position = {} } = item;
      let {
        //@ts-expect-error x is not defined
        x = textX - scrollOffset - ctx.measureText(content).width / 2,
      } = position;
      //@ts-expect-error y is not defined
      const { y = 0 } = position;
      if (x === undefined) {
        x = textX - scrollOffset - ctx.measureText(content).width / 2;
      } else {
        x = x + textX - screenWidth / 2 - scrollOffset;
      }
      if (itemIndex === 0) {
        ctx.fillStyle = '#3ad4a7';
        ctx.font = '35px PressStart2P';
        ctx.fillText(content, x, y);
      } else {
        ctx.fillStyle = '#444';
        ctx.font = '20px Orbitron';
        if (itemIndex < visibleLines[index]) {
          if (item.cleanPreviousSlideItems) {
            ctx.clearRect(0, HEADER_Y_POSITION, screenWidth, 30000);
          }
          if (item?.opacity < 1) {
            item.opacity += 0.02;
          }
          if (
            content === null || content === void 0
              ? void 0
              : content.match(/\.(jpeg|jpg|png|webp)$/)
          ) {
            drawImage(ctx, content, x, y, item?.opacity || 1);
          } else {
            ctx.fillStyle = `rgba(0, 0, 0, ${item?.opacity || 1})`;
            ctx.fillText(content, x, y);
          }
        }
      }
    });
  });
};

export const clearCanvas = (
  ctx: CanvasRenderingContext2D,
  screenWidth: number,
  screenHeight: number,
): void => {
  ctx.clearRect(0, 0, screenWidth, screenHeight);
};
