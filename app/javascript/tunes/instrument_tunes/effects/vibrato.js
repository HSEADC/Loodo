import * as Tone from 'tone'
import { generateUniqId } from '../../utilities'

const vibratoSettings = {
  wet: 0,
  maxDelay: 0.005,
  frequency: 5,
  depth: 0.1,
  type: 'sine'
}
const vibratoNode = new Tone.Vibrato(vibratoSettings)

const vibratoInstrument = {
  id: generateUniqId(),
  name: 'Vibrato',
  type: 'VibratoEffect',
  node: vibratoNode,
  settings: vibratoSettings
}
export { vibratoInstrument }
