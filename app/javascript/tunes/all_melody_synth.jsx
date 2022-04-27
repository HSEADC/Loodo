import * as Tone from 'tone'
import { generateUniqId } from '../utilities'

const synthSettings = {
  volume: 0,
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

const monoSynthSettings = {
  volume: -8,
  detune: 0,
  portamento: 0,
  envelope: {
    attack: 0.05,
    attackCurve: 'linear',
    decay: 0.3,
    decayCurve: 'exponential',
    release: 0.8,
    releaseCurve: 'exponential',
    sustain: 0.4
  },
  filter: {
    Q: 1,
    detune: 0,
    frequency: 0,
    gain: 0,
    rolloff: -12,
    type: 'lowpass'
  },
  filterEnvelope: {
    attack: 0.001,
    attackCurve: 'linear',
    decay: 0.7,
    decayCurve: 'exponential',
    release: 0.8,
    releaseCurve: 'exponential',
    sustain: 0.1,
    baseFrequency: 300,
    exponent: 2,
    octaves: 4
  },
  oscillator: {
    detune: 0,
    frequency: 440,
    partialCount: 8,
    phase: 0,
    type: 'square8'
  }
}

const channelSettings = {
  volume: -14,
  pan: 0,
  mute: false,
  solo: false
}

// prettier-ignore
const toneSynthNode = new Tone.Synth(synthSettings).toDestination()
// prettier-ignore
const monoSynthNode = new Tone.MonoSynth(synthSettings).toDestination()
// prettier-ignore
const fmSynthNode = new Tone.FMSynth(synthSettings).toDestination()
// prettier-ignore
const amSynthNode = new Tone.AMSynth(synthSettings).toDestination()
// prettier-ignore
const polySynthNode = new Tone.PolySynth(synthSettings).toDestination()
// prettier-ignore
const fatOscilatorSynthNode = new Tone.FatOscillator("Ab3", "sawtooth", 40).toDestination()

const channelNode = new Tone.Channel(synthSettings).toDestination()

const nodes = [
  toneSynthNode,
  monoSynthNode,
  fmSynthNode,
  amSynthNode
  // polySynthNode,
  // fatOscilatorSynthNode
]

const instrument = [
  {
    id: generateUniqId(),
    name: 'Melody Synth',
    type: 'ToneSynth',
    node: nodes,
    settings: synthSettings
  },
  {
    id: generateUniqId(),
    name: 'Channel',
    type: 'Channel',
    node: channelNode,
    settings: channelSettings
  }
]

const v = 1

// const part = new Tone.Part(
//   function (time, note) {
//     toneSynthNode.triggerAttackRelease(
//       note.noteName,
//       note.duration,
//       time,
//       note.velocity
//     )
//   },
//   [
//     {
//       time: '0:0:0',
//       noteName: 'C4',
//       duration: '1n',
//       velocity: v
//     },
//     {
//       time: '0:1:0',
//       noteName: 'E4',
//       duration: '1n',
//       velocity: v
//     },
//     {
//       time: '0:2:0',
//       noteName: 'G4',
//       duration: '1n',
//       velocity: v
//     },
//     {
//       time: '1:0:0',
//       noteName: 'D4',
//       duration: '1n',
//       velocity: v
//     },
//     {
//       time: '1:1:0',
//       noteName: 'G4',
//       duration: '1n',
//       velocity: v
//     },
//     {
//       time: '1:2:0',
//       noteName: 'B4',
//       duration: '1n',
//       velocity: v
//     },
//     {
//       time: '2:0:0',
//       noteName: 'B3',
//       duration: '1n',
//       velocity: v
//     },
//     {
//       time: '2:1:0',
//       noteName: 'E3',
//       duration: '1n',
//       velocity: v
//     },
//     {
//       time: '2:2:0',
//       noteName: 'G3',
//       duration: '1n',
//       velocity: v
//     },
//     {
//       time: '3:0:0',
//       noteName: 'E4',
//       duration: '1n',
//       velocity: v
//     },
//     {
//       time: '3:1:0',
//       noteName: 'G4',
//       duration: '1n',
//       velocity: v
//     },
//     {
//       time: '3:2:0',
//       noteName: 'B4',
//       duration: '1n',
//       velocity: v
//     }
//   ]
// )
//
// part.loopEnd = '4m'
// part.loop = true

export { instrument }
