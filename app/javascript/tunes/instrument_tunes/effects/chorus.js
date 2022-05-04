import * as Tone from 'tone'
import { generateUniqId } from '../../../utilities'

const chorusSettings = {
  wet: 0,
  type: 'sine',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  spread: 180
}
const chorusNode = new Tone.Chorus(chorusSettings)

const chorusInstrument = {
  id: generateUniqId(),
  name: 'Chorus',
  type: 'Chorus',
  node: chorusNode,
  settings: chorusSettings
}

export { chorusInstrument }
