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
  direction: string;
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

playerImages.falling.src = 'https://i.imgur.com/yEgjvIj.png';
playerImages.standingRight.src = 'https://i.imgur.com/zTXnpLn.png';
playerImages.standingLeft.src = 'https://i.imgur.com/5z23GS8.png';
playerImages.movingRight.src = 'https://i.imgur.com/URdylT0.png';
playerImages.movingLeft.src = 'https://i.imgur.com/HopOYyN.png';

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

/**
 * PART BULLET
 */
export interface Bullet {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  direction: 'left' | 'right';
}

export const createBullet = (player: Player): Bullet => ({
  x: player.x + player.width / 2,
  y: player.y + player.height / 2,
  width: 10,
  height: 5,
  speed: 15,
  direction: player.direction,
});
