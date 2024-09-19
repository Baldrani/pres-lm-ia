import { Bullet } from './types';

export const bullets: Bullet[] = [];

export const createBullet = (
  x: number,
  y: number,
  direction: 'right' | 'left',
): Bullet => ({
  x,
  y,
  speed: 10,
  direction,
});

export const updateBullets = (): void => {
  bullets.forEach((bullet, index) => {
    if (bullet.direction === 'right') {
      bullet.x += bullet.speed;
    } else {
      bullet.x -= bullet.speed;
    }

    // Remove bullets that go off-screen
    if (bullet.x < 0 || bullet.x > window.innerWidth) {
      bullets.splice(index, 1);
    }
  });
};

export const drawBullets = (ctx: CanvasRenderingContext2D): void => {
  bullets.forEach((bullet) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(bullet.x, bullet.y, 5, 5);
  });
};
