import { Bullet } from './types';

export const createBullet = (
  x: number,
  y: number,
  direction: 'right' | 'left',
): Bullet => ({
  x,
  y,
  speed: 15,
  direction,
});

export const updateBullet = (bullet: Bullet): void => {
  bullet.x += bullet.direction === 'right' ? bullet.speed : -bullet.speed;
};
