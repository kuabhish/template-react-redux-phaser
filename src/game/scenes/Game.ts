import { CONSTANTS } from "../../constants";
import Boundary, { IKeysInfo } from "./utils";

export default class Game extends Phaser.Scene {


  boundaries: Array<Boundary> = []
  
  constructor() {
    super('game')
  }

  async create(data: {data: any, key: string}) {
  }

  update(time: any, delta: any) {

  }
}