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

const toneSynthNode = new Tone.Synth(synthSettings).toDestination()

const monoSynthNode = new Tone.MonoSynth(synthSettings).toDestination()

const fmSynthNode = new Tone.FMSynth(synthSettings).toDestination()

const amSynthNode = new Tone.AMSynth(synthSettings).toDestination()

const fatOscilatorSynthNode = new Tone.FatOscillator(
  'Ab3',
  'sawtooth',
  40
).toDestination()

const channelNode = new Tone.Channel(synthSettings).toDestination()

const nodes = [
  toneSynthNode,
  monoSynthNode,
  fmSynthNode,
  amSynthNode,
  fatOscilatorSynthNode
]

const instrument = [
  {
    id: generateUniqId(),
    name: 'Melody Synth',
    type: 'ToneSynth',
    node: toneSynthNode,
    settings: synthSettings
  },
  {
    id: generateUniqId(),
    name: 'Mono Synth',
    type: 'MonoSynth',
    node: monoSynthNode,
    settings: synthSettings
  },
  {
    id: generateUniqId(),
    name: 'FM Synth',
    type: 'FMSynth',
    node: fmSynthNode,
    settings: synthSettings
  },
  {
    id: generateUniqId(),
    name: 'Am Synth',
    type: 'AMSynth',
    node: amSynthNode,
    settings: synthSettings
  },
  {
    id: generateUniqId(),
    name: 'Fat Oscillator',
    type: 'FatOscillator',
    node: fatOscilatorSynthNode,
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

export { instrument }
