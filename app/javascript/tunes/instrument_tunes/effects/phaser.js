import * as Tone from 'tone'
import { generateUniqId } from '../../../utilities'

const phaserSettings = {
  wet: 0,
  frequency: 0.5,
  octaves: 3,
  stages: 10,
  Q: 10,
  baseFrequency: 350
}
const phaserNode = new Tone.Phaser(phaserSettings)

const phaserInstrument = {
  id: generateUniqId(),
  name: 'Phaser',
  type: 'Phaser',
  node: phaserNode,
  settings: phaserSettings
}
export { phaserInstrument }
