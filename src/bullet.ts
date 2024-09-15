import { Bullet } from './player';

export const moveBullets = (bullets: Bullet[], screenWidth: number): void => {
  bullets.forEach((bullet, index) => {
    if (bullet.direction === 'right') {
      bullet.x += bullet.speed;
    } else {
      bullet.x -= bullet.speed;
    }

    // Remove bullets that go off-screen
    if (bullet.x < 0 || bullet.x > screenWidth) {
      bullets.splice(index, 1);
    }
  });
};

export const drawBullets = (
  ctx: CanvasRenderingContext2D,
  bullets: Bullet[],
): void => {
  bullets.forEach((bullet) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
  });
};
