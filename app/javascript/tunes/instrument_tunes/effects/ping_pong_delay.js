import * as Tone from 'tone'
import { generateUniqId } from '../../../utilities'

const pingPongDelaySettings = {
  wet: 0,
  delayTime: 0.25,
  maxDelayTime: 1
}
const pingPongDelayNode = new Tone.PingPongDelay(pingPongDelaySettings)

const pingPongDelayInstrument = {
  id: generateUniqId(),
  name: 'Ping Pong Delay',
  type: 'PingPongDelay',
  node: pingPongDelayNode,
  settings: pingPongDelaySettings
}

export { pingPongDelayInstrument }
