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
  width: 150,
  height: 150,
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
});

export const createBullet = (player: Player): Bullet => ({
  x: player.x + player.width / 2,
  y: player.y + player.height / 2,
  dx: player.direction === 'right' ? 10 : -10,
  dy: 0,
  width: 10,
  height: 5,
});
