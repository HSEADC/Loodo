import * as Tone from 'tone'
import { generateUniqId } from '../../utilities'

const freeverbSettings = {
  wet: 0.9,
  roomSize: 0.08,
  dampening: 40
}
const freeverbNode = new Tone.Freeverb(freeverbSettings)

const freeverbInstrument = {
  id: generateUniqId(),
  name: 'Freeverb',
  type: 'FreeverbEffect',
  node: freeverbNode,
  settings: freeverbSettings
}
export { freeverbInstrument }
