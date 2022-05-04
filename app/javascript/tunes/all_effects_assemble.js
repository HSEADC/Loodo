import * as toneSynthInstrument from './instrument_tunes/synths/tone_synth'

import * as autoFilterInstrument from './instrument_tunes/effects/auto_filter'
import * as autoPannerInstrument from './instrument_tunes/effects/auto_panner'
import * as autoWahInstrument from './instrument_tunes/effects/auto_wah'
import * as bitCrusherInstrument from './instrument_tunes/effects/bit_crusher'
import * as chebushevInstrument from './instrument_tunes/effects/chebushev'
import * as chorusInstrument from './instrument_tunes/effects/chorus'
import * as distortionInstrument from './instrument_tunes/effects/distortion'
import * as feedbackDelayInstrument from './instrument_tunes/effects/feedback_delay'
import * as freeverbInstrument from './instrument_tunes/effects/freeverb'
import * as jcReverbInstrument from './instrument_tunes/effects/JS_reverb'
// import * as midSideInstrument from './instrument_tunes/effects/mid_side_effect'
import * as phaserInstrument from './instrument_tunes/effects/phaser'
import * as pingPongDelayInstrument from './instrument_tunes/effects/ping_pong_delay'
import * as pitchShiftInstrument from './instrument_tunes/effects/pitch_shift'
import * as reverbInstrument from './instrument_tunes/effects/reverb'
import * as stereoWidenerInstrument from './instrument_tunes/effects/stereo_widener'
import * as tremoloInstrument from './instrument_tunes/effects/tremolo'
import * as vibratoInstrument from './instrument_tunes/effects/vibrato'

import * as channelInstrument from './instrument_tunes/channels/channel'

// const instruments = [
//   toneSynthInstrument,
//
//   autoFilterInstrument,
//   autoPannerInstrument,
//   autoWahInstrument,
//   bitCrusherInstrument,
//   chebushevInstrument,
//   chorusInstrument,
//   distortionInstrument,
//   feedbackDelayInstrument,
//   freeverbInstrument,
//   jcReverbInstrument,
//   // midSideInstrument,
//   phaserInstrument,
//   pingPongDelayInstrument,
//   pitchShiftInstrument,
//   stereoWidenerInstrument,
//   tremoloInstrument,
//   vibratoInstrument,
//
//   channelInstrument
// ]

const instruments = [
  { name: 'ToneSynth', instrument: toneSynthInstrument },

  { name: 'AutoFilter', instrument: autoFilterInstrument },
  { name: 'AutoPanner', instrument: autoPannerInstrument },
  { name: 'AutoWah', instrument: autoWahInstrument },
  { name: 'BitCrusher', instrument: bitCrusherInstrument },
  { name: 'Chebushev', instrument: chebushevInstrument },
  { name: 'Chorus', instrument: chorusInstrument },
  { name: 'Distortion', instrument: distortionInstrument },
  { name: 'FeedbackDelay', instrument: feedbackDelayInstrument },
  { name: 'Freeverb', instrument: freeverbInstrument },
  { name: 'JCReverb', instrument: jcReverbInstrument },
  { name: 'Phaser', instrument: phaserInstrument },
  { name: 'PingPongDelay', instrument: pingPongDelayInstrument },
  { name: 'PitchShift', instrument: pitchShiftInstrument },
  { name: 'StereoWidener', instrument: stereoWidenerInstrument },
  { name: 'Tremolo', instrument: tremoloInstrument },
  { name: 'Vibrato', instrument: vibratoInstrument },

  { name: 'Channel', instrument: channelInstrument }
]

export { instruments }
