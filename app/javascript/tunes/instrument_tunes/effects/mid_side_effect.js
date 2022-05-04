import * as Tone from 'tone'
import { generateUniqId } from '../../../utilities'

const midSideSettings = {
  wet: 0
}
const midSideNode = new Tone.MidSideEffect(midSideSettings)

const midSideInstrument = {
  id: generateUniqId(),
  name: 'Mid Side Effect',
  type: 'MidSide',
  node: midSideNode,
  settings: midSideSettings
}

export { midSideInstrument }
