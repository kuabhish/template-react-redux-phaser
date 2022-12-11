import Phaser from 'phaser'

export default class Bootstrap extends Phaser.Scene {
  constructor() {
    super('bootstrap')
  }

  preload() {
   // load assets
  }


  create() {
    this.launchGame()
  }


  async launchGame() {
    setTimeout(() => {
      this.scene.launch('game')
    }, 100)
  }

  pauseBackground() {
    this.scene.stop('background')
  }

  pauseGame() {
    this.scene.stop('game')
  }
}
