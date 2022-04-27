import * as Tone from 'tone'
import { generateUniqId } from '../../utilities'

const autoPannerSettings = {
  wet: 0,
  type: 'sine',
  frequency: 1,
  depth: 1
}
const autoPannerNode = new Tone.AutoPanner(autoPannerSettings).start()

const autoPannerInstrument = {
  id: generateUniqId(),
  name: 'Auto Panner',
  type: 'AutoPannerEffect',
  node: autoPannerNode,
  settings: autoPannerSettings
}
export { autoPannerInstrument }
