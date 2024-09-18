import { State } from './events';
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
  x: number | 'center',
  y: number,
  fadeAmount: number,
): void => {
  const img: HTMLImageElement = getImage(content);
  if (img.complete) {
    const scale: number = Math.min(600 / img.width, 600 / img.height);
    const imgWidth: number = img.width * scale;
    const imgHeight: number = img.height * scale;
    let imgX: number;
    if (x === 'center') {
      imgX = (ctx.canvas.width - imgWidth) / 2;
    } else {
      imgX = x + imgWidth / 2;
    }
    const imgY: number = y;
    ctx.globalAlpha = fadeAmount;
    ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
    ctx.globalAlpha = 1;
  } else {
    img.onload = function (): void {
      const scale: number = Math.min(600 / img.width, 600 / img.height);
      const imgWidth: number = img.width * scale;
      const imgHeight: number = img.height * scale;
      let imgX: number;
      if (x === 'center') {
        imgX = (ctx.canvas.width - imgWidth) / 2;
      } else {
        imgX = x + imgWidth / 2;
      }

      const imgY: number = y;
      ctx.globalAlpha = fadeAmount;
      ctx.drawImage(img, imgX, imgY, imgWidth, imgHeight);
      ctx.globalAlpha = 1;
    };
    img.onerror = function (): void {
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

const triggerAudio = (): void => {
  const audio = document.getElementById('pokemon') as HTMLAudioElement;
  audio.volume = 0.3;

  if (audio.paused) {
    audio.play();
    setTimeout(function () {
      audio.pause();
    }, 9500);
  }
};

let isPokemonAudioPlaying = false;
let finalGifYPosition = 500;
export const drawBillboards = (
  ctx: CanvasRenderingContext2D,
  scrollOffset: number,
  screenWidth: number,
  visibleLines: number[],
  state: State,
): void => {
  slides.forEach((slide, index) => {
    const textX: number = screenWidth * index + screenWidth / 2;
    slide.forEach((item, itemIndex) => {
      const { content, position = {} } = item;

      //@ts-expect-error NOT A DESCRIPTION
      let { x } = position;
      //@ts-expect-error NOT A DESCRIPTION
      const { y = 0 } = position;

      // TODO X is changed
      if (x === 'center' || x == null) {
        x = textX - scrollOffset - ctx.measureText(content).width / 2;
      } else {
        x = x + textX - screenWidth / 2 - scrollOffset;
      }

      if (itemIndex === 0) {
        ctx.fillStyle = '#3ad4a7';
        ctx.font = state.isBackgroundVisible
          ? '35px PressStart2P'
          : '35px Arial';
        ctx.fillText(content, x, y);
      } else {
        if (itemIndex < visibleLines[index]) {
          if (item.isPokemonAudio && !isPokemonAudioPlaying) {
            isPokemonAudioPlaying = true;
            triggerAudio();
          }
          if (item.triggerFinal) {
            if (finalGifYPosition > 50) {
              finalGifYPosition = finalGifYPosition - 2;
            }
            document.getElementById('final-gif').style.transform =
              `translate(-50%, -${finalGifYPosition}%)`;
          }
          if (item.cleanPreviousSlideItems) {
            ctx.clearRect(0, HEADER_Y_POSITION, screenWidth, 30000);
          }
          if (item?.opacity < 1) {
            item.opacity += 0.02;
          }
          if (
            content === null || content === void 0
              ? void 0
              : content.match(/\.(jpeg|jpg|png|webp|gif)$/)
          ) {
            drawImage(ctx, content, x, y, item?.opacity || 1);
          } else {
            ctx.fillStyle = '#fff';
            ctx.font = '25px Exo2';
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
