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
    type: 'fatsawtooth',
    modulationType: 'sine',
    // partialCount: 0,
    // partials: [],
    phase: 0,
    harmonicity: 0.5
  }
}

const autoFilterSettings = {
  wet: 0,
  type: 'sine',
  frequency: 1,
  depth: 1,
  baseFrequency: 200,
  octaves: 2.6,
  filter: {
    type: 'lowpass',
    frequency: 100,
    rolloff: -12,
    Q: 1
  }
}

const autoPannerSettings = {
  wet: 0,
  type: 'sine',
  frequency: 1,
  depth: 1
}

const autoWahSettings = {
  wet: 0,
  baseFrequency: 100,
  octaves: 6,
  sensitivity: 0,
  Q: 2,
  gain: 2,
  follower: 0.1
}

// const bitCrusherSettings = {
//   wet: 0,
//   bits: 4
// }

const chebyshevSettings = {
  wet: 0,
  order: 50,
  oversample: 'none'
}

const distortionSettings = {
  wet: 0,
  distortion: 0,
  oversample: '4x'
}

const feedbackDelaySettings = {
  wet: 0,
  delayTime: 0.8,
  maxDelay: 0.8
}

const frequencyShifterSettings = {
  wet: 0,
  frequency: 42
}

const jcReverbSettings = {
  wet: 0,
  roomSize: 0.5
}

// const midSideSettings = {
//   wet: 0
// }

const phaserSettings = {
  wet: 0,
  frequency: 0.5,
  octaves: 3,
  stages: 10,
  Q: 10,
  baseFrequency: 350
}

const pitchShiftSettings = {
  wet: 0,
  pitch: 0,
  windowSize: 0.1,
  delayTime: 0,
  feedback: 0
}

const reverbSettings = {
  wet: 0,
  decay: 1.5,
  preDelay: 0.01
}

const stereoWidenerSettings = {
  wet: 0,
  width: 0.5
}

const channelSettings = {
  volume: -6,
  pan: 0,
  mute: false,
  solo: false
}

const synthNode = new Tone.Synth(synthSettings)
// const autoFilterNode = new Tone.AutoFilter(autoFilterSettings).start()
// const autoPannerNode = new Tone.AutoPanner(autoPannerSettings).start()
// const autoWahNode = new Tone.AutoWah(autoWahSettings)
// // const bitCrusherNode = new Tone.BitCrusher(bitCrusherSettings)
// const chebyshevNode = new Tone.Chebyshev(chebyshevSettings)
// const distortionNode = new Tone.Distortion(distortionSettings)
// const feedbackDelayNode = new Tone.FeedbackDelay(feedbackDelaySettings)
// const frequencyShifterNode = new Tone.FrequencyShifter(frequencyShifterSettings)
// const jcReverbNode = new Tone.JCReverb(jcReverbSettings)
// // const midSideNode = new Tone.MidSideEffect(midSideSettings)
// const phaserNode = new Tone.Phaser(phaserSettings)
// const pitchShiftNode = new Tone.PitchShift(pitchShiftSettings)
// const reverbNode = new Tone.Reverb(reverbSettings)
// const stereoWidenerNode = new Tone.StereoWidener(stereoWidenerSettings)
const channelNode = new Tone.Channel(channelSettings).toDestination()

synthNode.chain(
  // autoFilterNode,
  // autoPannerNode,
  // autoWahNode,
  // // bitCrusherNode,
  // chebyshevNode,
  // distortionNode,
  // feedbackDelayNode,
  // frequencyShifterNode,
  // jcReverbNode,
  // // midSideNode,
  // phaserNode,
  // pitchShiftNode,
  // reverbNode,
  // stereoWidenerNode,
  channelNode
)

const instrument = [
  {
    id: generateUniqId(),
    name: 'Space Synth',
    type: 'ToneSynth',
    node: synthNode,
    settings: synthSettings
  },
  // {
  //   id: generateUniqId(),
  //   name: 'Auto Filter',
  //   type: 'AutoFilterEffect',
  //   node: autoFilterNode,
  //   settings: autoFilterSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Auto Panner',
  //   type: 'AutoPannerEffect',
  //   node: autoPannerNode,
  //   settings: autoPannerSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Auto Wah',
  //   type: 'AutoWahEffect',
  //   node: autoWahNode,
  //   settings: autoWahSettings
  // },
  // // {
  // //   id: generateUniqId(),
  // //   name: 'Bit Crusher',
  // //   type: 'BitCrusherEffect',
  // //   node: bitCrusherNode,
  // //   settings: bitCrusherSettings
  // // },
  // {
  //   id: generateUniqId(),
  //   name: 'Chebyshev',
  //   type: 'ChebyshevEffect',
  //   node: chebyshevNode,
  //   settings: chebyshevSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Distortion',
  //   type: 'DistortionEffect',
  //   node: distortionNode,
  //   settings: distortionSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Feedback Delay',
  //   type: 'FeedbackDelayEffect',
  //   node: feedbackDelayNode,
  //   settings: feedbackDelaySettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Frequency Shift',
  //   type: 'FrequencyShifterEffect',
  //   node: frequencyShifterNode,
  //   settings: frequencyShifterSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'JC Reverb',
  //   type: 'JCReverbEffect',
  //   node: jcReverbNode,
  //   settings: jcReverbSettings
  // },
  // // {
  // //   id: generateUniqId(),
  // //   name: 'Mid Side Effect',
  // //   type: 'MidSideEffect',
  // //   node: midSideNode,
  // //   settings: midSideSettings
  // // },
  // {
  //   id: generateUniqId(),
  //   name: 'Phaser',
  //   type: 'PhaserEffect',
  //   node: phaserNode,
  //   settings: phaserSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Pitch Shift',
  //   type: 'PitchShiftEffect',
  //   node: pitchShiftNode,
  //   settings: pitchShiftSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Reverb',
  //   type: 'ReverbEffect',
  //   node: reverbNode,
  //   settings: reverbSettings
  // },
  // {
  //   id: generateUniqId(),
  //   name: 'Stereo Widener',
  //   type: 'StereoWidenerEffect',
  //   node: stereoWidenerNode,
  //   settings: stereoWidenerSettings
  // },
  {
    id: generateUniqId(),
    name: 'Channel',
    type: 'Channel',
    node: channelNode,
    settings: channelSettings
  }
]

const sequention = new Tone.Sequence(
  (time, note) => {
    synthNode.triggerAttackRelease(note, '1m', time)
  },
  ['C3', 'D3', 'E2', 'E3'],
  '1m'
)

export { instrument, sequention }
