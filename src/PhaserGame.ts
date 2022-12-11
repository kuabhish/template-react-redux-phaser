import Phaser from 'phaser'
import Bootstrap from './game/scenes/Bootstrap';
import Game from './game/scenes/Game';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  parent: 'phaser-container',
  backgroundColor: '#e08778',
  // pixelArt: true,
  // roundPixels: true,
  // scale: {
  //   // mode: Phaser.Scale.ScaleModes.RESIZE,
  //   width: 800,
  //   height: 576,
  // },
  width: window.innerWidth,
  height: window.innerHeight,
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    // autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
  },
  // autoFocus: true,
  scene: [Bootstrap, Game],
}

const phaserGame = new Phaser.Game(config)

;(window as any).game = phaserGame

export default phaserGame
