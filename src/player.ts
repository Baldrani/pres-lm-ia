import { Bullet } from './types';

// src/player.ts
export interface Player {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  dx: number;
  dy: number;
  gravity: number;
  groundLevel: number;
  fastSpeed: number;
  direction: 'right' | 'left';
  onGround: boolean;
  isVisible: boolean;
  moving: boolean;
  jumping: boolean;
  bullets: Bullet[];
}

export const playerImages: { [key: string]: HTMLImageElement } = {
  falling: new Image(),
  standingRight: new Image(),
  standingLeft: new Image(),
  movingRight: new Image(),
  movingLeft: new Image(),
};

playerImages.falling.src =
  'http://localhost:3000/static/images/atlas_falling.png';
playerImages.standingRight.src =
  'http://localhost:3000/static/images/atlas_standing_right.png';
playerImages.standingLeft.src =
  'http://localhost:3000/static/images/atlas_standing_left.png';
playerImages.movingRight.src =
  'http://localhost:3000/static/images/atlas_moving_right.png';
playerImages.movingLeft.src =
  'http://localhost:3000/static/images/atlas_moving_left.png';

export const createPlayer = (
  screenWidth: number,
  screenHeight: number,
): Player => ({
  x: screenWidth / 2,
  y: 0,
  width: 300,
  height: 300,
  speed: 10,
  dx: 0,
  dy: 0,
  gravity: 0.8,
  groundLevel: screenHeight - 10,
  fastSpeed: 50,
  direction: 'right',
  onGround: false,
  isVisible: false,
  moving: false,
  jumping: false,
  bullets: [],
});

export const fireBullet = (player: Player): void => {
  const bulletSpeed = 10;
  const bullet: Bullet = {
    x: player.x + player.width / 2,
    y: player.y + player.height / 2,
    dx: player.direction === 'right' ? bulletSpeed : -bulletSpeed,
    dy: 0,
    width: 10,
    height: 5,
  };
  player.bullets.push(bullet);
};

export const updateBullets = (player: Player): void => {
  player.bullets.forEach((bullet, index) => {
    bullet.x += bullet.dx;
    bullet.y += bullet.dy;

    // Remove bullets that go off-screen
    if (bullet.x < 0 || bullet.x > 800) {
      player.bullets.splice(index, 1);
    }
  });
};
