import * as Tone from 'tone'
import { generateUniqId } from '../../utilities'

const frequencyShifterSettings = {
  wet: 0,
  frequency: 42
}
const frequencyShifterNode = new Tone.FrequencyShifter(frequencyShifterSettings)

const autoFilterInstrument = {
  id: generateUniqId(),
  name: 'Frequency Shift',
  type: 'FrequencyShifterEffect',
  node: frequencyShifterNode,
  settings: frequencyShifterSettings
}

export { autoFilterInstrument }
