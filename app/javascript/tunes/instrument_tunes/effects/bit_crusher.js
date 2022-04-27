import * as Tone from 'tone'
import { generateUniqId } from '../../utilities'

const bitCrusherSettings = {
  wet: 0,
  bits: 4
}
const bitCrusherNode = new Tone.BitCrusher(bitCrusherSettings)

const bitCrusherInstrument = {
  id: generateUniqId(),
  name: 'Bit Crusher',
  type: 'BitCrusherEffect',
  node: bitCrusherNode,
  settings: bitCrusherSettings
}

export { bitCrusherInstrument }
