import * as Tone from 'tone'
import { generateUniqId } from '../../utilities'

const autoFilterSettings = {
  wet: 0,
  type: 'sine',
  frequency: 1,
  depth: 1,
  baseFrequency: 200,
  octaves: 2.6,
  filter: {
    type: 'lowpass',
    frequency: 100,
    rolloff: -12,
    Q: 1
  }
}

const autoFilterNode = new Tone.AutoFilter(autoFilterSettings).start()

const autoFilterInstrument = {
  id: generateUniqId(),
  name: 'Auto Filter',
  type: 'AutoFilterEffect',
  node: autoFilterNode,
  settings: autoFilterSettings
}

export { autoFilterInstrument }
