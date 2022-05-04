import * as Tone from 'tone'
import { generateUniqId } from '../../../utilities'

const tremoloSettings = {
  wet: 0,
  frequency: 10,
  type: 'sine',
  depth: 0.5,
  spread: 180
}
const tremoloNode = new Tone.Tremolo(tremoloSettings)

const tremoloInstrument = {
  id: generateUniqId(),
  name: 'Tremolo',
  type: 'Tremolo',
  node: tremoloNode,
  settings: tremoloSettings
}
export { tremoloInstrument }
