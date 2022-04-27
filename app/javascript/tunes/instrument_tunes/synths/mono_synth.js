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

const monoSynthNode = new Tone.MonoSynth(synthSettings).toDestination()

const monoSynthInstrument = {
  id: generateUniqId(),
  name: 'Melody Synth',
  type: 'ToneSynth',
  node: toneSynthNode,
  settings: synthSettings
}

export { monoSynthInstrument }
