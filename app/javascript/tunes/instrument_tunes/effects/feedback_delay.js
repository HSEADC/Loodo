import * as Tone from 'tone'
import { generateUniqId } from '../../../utilities'

const feedbackDelaySettings = {
  wet: 0,
  delayTime: 0.8,
  maxDelay: 0.8
}
const feedbackDelayNode = new Tone.FeedbackDelay(feedbackDelaySettings)

const feedbackDelayInstrument = {
  id: generateUniqId(),
  name: 'Feedback Delay',
  type: 'FeedbackDelay',
  node: feedbackDelayNode,
  settings: feedbackDelaySettings
}

export { feedbackDelayInstrument }
