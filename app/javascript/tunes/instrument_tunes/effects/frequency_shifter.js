import * as Tone from 'tone'
import { generateUniqId } from '../../../utilities'

const frequencyShifterSettings = {
  wet: 0,
  frequency: 42
}
const frequencyShifterNode = new Tone.FrequencyShifter(frequencyShifterSettings)

const frequencyShifterInstrument = {
  id: generateUniqId(),
  name: 'Frequency Shift',
  type: 'FrequencyShifter',
  node: frequencyShifterNode,
  settings: frequencyShifterSettings
}

export { frequencyShifterInstrument }
