import * as Tone from 'tone'

function createToneSynth() {
  return new Tone.Synth({
    volume: 0,
    detune: 0,
    portamento: 0.05,
    envelope: {
      attack: 0.05,
      attackCurve: 'exponential', // linear, exponential, sine, cosine, bounce, ripple, step
      decay: 0.2,
      decayCurve: 'exponential', // linear, exponential, sine, cosine, bounce, ripple, step
      sustain: 0.2,
      release: 1.5,
      releaseCurve: 'exponential' // linear, exponential, sine, cosine, bounce, ripple, step
    },
    oscillator: {
      type: 'amtriangle',
      modulationType: 'sine',
      partialCount: 0,
      partials: [],
      phase: 0,
      harmonicity: 0.5
    }
  })
}

export { createToneSynth }
