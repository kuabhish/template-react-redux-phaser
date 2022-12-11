import Phaser from 'phaser'
import { isNullOrUndefined } from 'util'

export const createPlayerAnims = (anims: Phaser.Animations.AnimationManager, key: string) => {
  if (isNullOrUndefined(key) || key === "") return;

  anims.create({
    key: 'idle-'+ key,
    frames:[
      {
        key,
        frame: 'player-idle-1.png'
      },
      {
        key,
        frame: 'player-idle-2.png'
      },
      {
        key,
        frame: 'player-idle-3.png'
      },
      {
        key,
        frame: 'player-idle-4.png'
      },
    ],
    frameRate: 6,
    repeat: -1
  })

  anims.create({
    key: 'run-'+ key,
    frames: [
      {
        key,
        frame: 'player-run-1.png'
      },
      {
        key,
        frame: 'player-run-2.png'
      },
      {
        key,
        frame: 'player-run-3.png'
      },
      {
        key,
        frame: 'player-run-4.png'
      },
      {
        key,
        frame: 'player-run-5.png'
      },
      {
        key,
        frame: 'player-run-6.png'
      },
    ],
    frameRate: 4,
    repeat: -1
  })
}
