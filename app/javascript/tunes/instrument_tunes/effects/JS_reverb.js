import * as Tone from 'tone'
import { generateUniqId } from '../../../utilities'

const jcReverbSettings = {
  wet: 0,
  roomSize: 0.5
}
const jcReverbNode = new Tone.JCReverb(jcReverbSettings)

const jcReverbInstrument = {
  id: generateUniqId(),
  name: 'JC Reverb',
  type: 'JCReverb',
  node: jcReverbNode,
  settings: jcReverbSettings
}

export { jcReverbInstrument }
