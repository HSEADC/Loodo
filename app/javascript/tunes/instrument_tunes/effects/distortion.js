import * as Tone from 'tone'
import { generateUniqId } from '../../utilities'

const distortionSettings = {
  wet: 0,
  distortion: 0,
  oversample: '4x'
}
const distortionNode = new Tone.Distortion(distortionSettings)

const distortionInstrument = {
  id: generateUniqId(),
  name: 'Distortion',
  type: 'DistortionEffect',
  node: distortionNode,
  settings: distortionSettings
}

export { distortionInstrument }
