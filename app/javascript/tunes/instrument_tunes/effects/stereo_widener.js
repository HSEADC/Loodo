import * as Tone from 'tone'
import { generateUniqId } from '../../../utilities'

const stereoWidenerSettings = {
  wet: 0,
  width: 0.5
}
const stereoWidenerNode = new Tone.StereoWidener(stereoWidenerSettings)

const stereoWidenerInstrument = {
  id: generateUniqId(),
  name: 'Stereo Widener',
  type: 'StereoWidener',
  node: stereoWidenerNode,
  settings: stereoWidenerSettings
}

export { stereoWidenerInstrument }
