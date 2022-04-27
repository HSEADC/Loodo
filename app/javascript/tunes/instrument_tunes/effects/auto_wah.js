import * as Tone from 'tone'
import { generateUniqId } from '../../utilities'

const autoWahSettings = {
  wet: 0,
  baseFrequency: 100,
  octaves: 6,
  sensitivity: 0,
  Q: 2,
  gain: 2,
  follower: 0.1
}
const autoWahNode = new Tone.AutoWah(autoWahSettings)

const autoWahInstrument = {
  id: generateUniqId(),
  name: 'Auto Wah',
  type: 'AutoWahEffect',
  node: autoWahNode,
  settings: autoWahSettings
}

export { autoWahInstrument }
