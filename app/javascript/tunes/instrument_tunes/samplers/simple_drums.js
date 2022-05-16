import * as Tone from 'tone'
import { generateUniqId } from '../../../utilities'

let kick = new Tone.Buffer('/samples/00007-Linn-9000-Kick-2.mp3', () => {
  let buff = kick.get()
})

let snare = new Tone.Buffer('/samples/00017-Linn-9000-Snare.mp3', () => {
  let buff = snare.get()
})

let hat = new Tone.Buffer('/samples/00004-Linn-9000-Hhclose2.mp3', () => {
  let buff = hat.get()
})

let ride = new Tone.Buffer('/samples/00031-Tama-RockStar-Ride.mp3', () => {
  let buff = ride.get()
})

const samplerSettings = {
  volume: 1,
  attack: 0,
  release: 0,
  curve: 'linear',
  urls: {
    A1: kick,
    B1: snare,
    C1: hat,
    D1: ride
  },
  baseUrl: 'http://localhost:3000'
}

const channelSettings = {
  volume: -14,
  pan: 0,
  mute: false,
  solo: false
}

const samplerNode = new Tone.Sampler(samplerSettings)
const channelNode = new Tone.Channel(channelSettings).toDestination()
samplerNode.chain(channelNode)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Drum Sampler',
    type: 'Sampler',
    node: samplerNode,
    settings: samplerSettings
  }
]

export { instrument }
