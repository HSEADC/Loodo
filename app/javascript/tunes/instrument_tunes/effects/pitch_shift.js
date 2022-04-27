import * as Tone from 'tone'
import { generateUniqId } from '../../utilities'

const pitchShiftSettings = {
  wet: 0,
  pitch: 0,
  windowSize: 0.1,
  delayTime: 0,
  feedback: 0
}
const pitchShiftNode = new Tone.PitchShift(pitchShiftSettings)

const pitchShiftInstrument = {
  id: generateUniqId(),
  name: 'Pitch Shift',
  type: 'PitchShiftEffect',
  node: pitchShiftNode,
  settings: pitchShiftSettings
}
export { pitchShiftInstrument }
