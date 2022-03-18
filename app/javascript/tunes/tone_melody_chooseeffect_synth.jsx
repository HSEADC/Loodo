import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const synthSettings = {
  volume: 0.8,
  detune: 0,
  portamento: 0.05,
  envelope: {
    attack: 0.05,
    attackCurve: 'exponential',
    decay: 0.2,
    decayCurve: 'exponential',
    sustain: 0.2,
    release: 1.5,
    releaseCurve: 'exponential'
  },
  oscillator: {
    type: 'amtriangle',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

const chorusSettings = {
  wet: 0.5,
  type: 'sine',
  frequency: 1.5,
  delayTime: 3.5,
  depth: 0.7,
  spread: 180
}

const freeverbSettings = {
  wet: 0.55,
  roomSize: 0.23,
  dampening: 40
}

// const pingPongDelaySettings = {
//   wet: 0,
//   delayTime: 0.25,
//   maxDelayTime: 1,
// };
//
const tremoloSettings = {
  wet: 1,
  frequency: 100,
  type: 'sine',
  depth: 0.5,
  spread: 180
}

const vibratoSettings = {
  wet: 1,
  maxDelay: 0.005,
  frequency: 5,
  depth: 0.1,
  type: 'sine'
}

const pitchShiftSettings = {
  wet: 1,
  pitch: -12,
  windowSize: 12,
  feedback: 0,
  delayTime: 0
}

const distortionSettings = {
  wet: 1,
  distortion: 10,
  oversample: 'none'
}

const channelSettings = {
  volume: -14,
  pan: 0,
  mute: false,
  solo: false
}

// function instrument() {
const synthNode = new Tone.Synth(synthSettings)
const chorusNode = new Tone.Chorus(chorusSettings).start()
// const freeverbNode = new Tone.Freeverb(freeverbSettings)
// const pingPongDelayNode = new Tone.PingPongDelay(pingPongDelaySettings);
// const vibratoNode = new Tone.Vibrato(vibratoSettings)
const tremoloNode = new Tone.Tremolo(tremoloSettings)
const pitchShiftNode = new Tone.PitchShift(pitchShiftSettings)
const distortionNode1 = new Tone.Distortion(distortionSettings)
const distortionNode2 = new Tone.Distortion(distortionSettings)
const channelNode = new Tone.Channel(channelSettings).toDestination()
// console.log(pitchShiftNode)

synthNode.chain(chorusNode, channelNode)

let effectArray = [chorusNode]

function addEffect(effectArray, newEffect) {
  let newEffectArray = [...effectArray]
  newEffectArray.push(newEffect)
  newEffectArray.push(channelNode)

  synthNode.chain(...newEffectArray)

  console.log('Effects added')
}

// setTimeout(() => addEffect(effectArray, distortionNode), 10000)

// setTimeout(addEffect, 10000, vibratoNode)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Melody Synth',
    type: 'ToneMelodyEffectSynth',
    node: synthNode,
    settings: synthSettings
  },
  {
    id: generateUniqId(),
    name: 'Chorus',
    type: 'ChorusEffect',
    node: chorusNode,
    settings: chorusSettings
  },
  {
    id: generateUniqId(),
    name: 'Channel',
    type: 'Channel',
    node: channelNode,
    settings: channelSettings
  },
  {
    id: generateUniqId(),
    name: 'Distortion',
    type: 'DistortionEffect',
    node: distortionNode1,
    settings: distortionSettings
  }
  // {
  //   id: generateUniqId(),
  //   name: 'Freeverb',
  //   type: 'FreeverbEffect',
  //   node: freeverbNode,
  //   settings: freeverbSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Vibrato',
  //   type: 'VibratoEffect',
  //   node: vibratoNode,
  //   settings: vibratoSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'PitchShift',
  //   type: 'PitchShiftEffect',
  //   node: pitchShiftNode,
  //   settings: pitchShiftSettings
  // }
]

const v = 1

const part = new Tone.Part(
  function (time, note) {
    synthNode.triggerAttackRelease(
      note.noteName,
      note.duration,
      time,
      note.velocity
    )
  },
  [
    {
      time: '0:0:0',
      noteName: 'C4',
      duration: '1n',
      velocity: v
    },
    {
      time: '0:1:0',
      noteName: 'E4',
      duration: '1n',
      velocity: v
    },
    {
      time: '0:2:0',
      noteName: 'G4',
      duration: '1n',
      velocity: v
    },
    {
      time: '1:0:0',
      noteName: 'D4',
      duration: '1n',
      velocity: v
    },
    {
      time: '1:1:0',
      noteName: 'G4',
      duration: '1n',
      velocity: v
    },
    {
      time: '1:2:0',
      noteName: 'B4',
      duration: '1n',
      velocity: v
    },
    {
      time: '2:0:0',
      noteName: 'B3',
      duration: '1n',
      velocity: v
    },
    {
      time: '2:1:0',
      noteName: 'E3',
      duration: '1n',
      velocity: v
    },
    {
      time: '2:2:0',
      noteName: 'G3',
      duration: '1n',
      velocity: v
    },
    {
      time: '3:0:0',
      noteName: 'E4',
      duration: '1n',
      velocity: v
    },
    {
      time: '3:1:0',
      noteName: 'G4',
      duration: '1n',
      velocity: v
    },
    {
      time: '3:2:0',
      noteName: 'B4',
      duration: '1n',
      velocity: v
    }
  ]
)

part.loopEnd = '4m'
part.loop = true

export {
  instrument,
  part,
  effectArray,
  synthNode,
  tremoloSettings,
  pitchShiftSettings,
  distortionSettings,
  channelNode
}
