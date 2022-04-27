import * as Tone from 'tone'
import { generateUniqId } from '../../utilities'

const reverbSettings = {
  wet: 0,
  decay: 1.5,
  preDelay: 0.01
}
const reverbNode = new Tone.Reverb(reverbSettings)

const reverbInstrument = {
  id: generateUniqId(),
  name: 'Reverb',
  type: 'ReverbEffect',
  node: reverbNode,
  settings: reverbSettings
}

export { reverbInstrument }
