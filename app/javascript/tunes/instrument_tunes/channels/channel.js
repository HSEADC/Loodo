import * as Tone from 'tone'
import { generateUniqId } from '../../../utilities'

const channelSettings = {
  volume: -6,
  pan: 0,
  mute: false,
  solo: false
}

const channelNode = new Tone.Channel(channelSettings).toDestination()

const channelInstrument = {
  id: generateUniqId(),
  name: 'Channel',
  type: 'Channel',
  node: channelNode,
  settings: channelSettings
}
export { channelInstrument }
