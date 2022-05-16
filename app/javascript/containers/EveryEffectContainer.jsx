import * as Tone from 'tone'
import React, { PureComponent } from 'react'

import * as toneMelodyEffectSynth from '../tunes/tone_melody_effect_synth'
import * as everyEffectAssembly from '../tunes/all_effects_assemble'
import { generateUniqId } from '../utilities'

import Button from '../control_components/Button'
// import { ReactComponent as PlayButton } from "../../assets/images/play_button.svg";

import WelcomeScreen from '../views/WelcomeScreen'
import MelodySynthEffectModule from '../views/MelodySynthEffectModule'

export default class EveryEffectContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      webAudioStarted: false,
      instruments: [],
      togglePlay: false
    }
  }

  componentDidMount() {
    this.initInstruments()
  }

  startWebAudio = async () => {
    await Tone.start()
    console.log('/// Instruments have been initialized ///')

    this.setState({
      webAudioStarted: true
    })
  }

  handlePropertyValueChange = (id, property, value) => {
    console.log(property, value)
    const instruments = []

    this.state.instruments.forEach((instrument, i) => {
      const newInstrument = []

      const newInstrumentModule = Object.assign({}, instrument)
      if (instrument.id === id) {
        if (property.length === 1) {
          const propertyName = property[0]
          newInstrumentModule.settings[propertyName] = value
        } else if (property.length === 2) {
          const scopeName = property[0]
          const propertyName = property[1]
          newInstrumentModule.settings[scopeName][propertyName] = value
        } else if (property.length === 3) {
          let searchedEvent

          newInstrumentModule.settings.sequence.forEach((event, i) => {
            if (event.noteName === property[0] && event.time === property[1]) {
              searchedEvent = event
              newInstrumentModule.settings.sequence.splice(i, 1)
            }
          })

          if (searchedEvent === undefined) {
            newInstrumentModule.settings.sequence.push({
              time: property[1],
              noteName: property[0],
              duration: '1n',
              velocity: 1
            })
          }
        }
      }

      instruments.push(newInstrumentModule)
    })

    this.setState({
      instruments
    })
  }

  initInstruments = () => {
    const { effect } = this.props
    const synth =
      everyEffectAssembly.instruments[0].instrument.toneSynthInstrument

    const newInstrument = []

    switch (effect) {
      case 'AutoFilter':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[1].instrument.autoFilterInstrument
        )
        break
      case 'AutoPanner':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[2].instrument.autoPannerInstrument
        )
        break
      case 'AutoWah':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[3].instrument.autoWahInstrument
        )
        break
      case 'BitCrusher':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[4].instrument.bitCrusherInstrument
        )
        break
      case 'Chebushev':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[5].instrument.chebyshevInstrument
        )
        break
      case 'Chorus':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[6].instrument.chorusInstrument
        )
        break
      case 'Distortion':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[7].instrument.distortionInstrument
        )
        break
      case 'FeedbackDelay':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[8].instrument.feedbackDelayInstrument
        )
        break
      case 'Freeverb':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[9].instrument.freeverbInstrument
        )
        break
      case 'FrequencyShifter':
        console.log(everyEffectAssembly.instruments)
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[10].instrument
            .frequencyShifterInstrument
        )
        break
      case 'JSReverb':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[11].instrument.jcReverbInstrument
        )
        break
      // case 'MidSideEffect':
      //   this.assembleSynthEffectChannel(
      //     everyEffectAssembly.instruments[12].instrument.midSideInstrument
      //   )
      //   break
      case 'Phaser':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[12].instrument.phaserInstrument
        )
        break
      case 'PingPongDelay':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[13].instrument.pingPongDelayInstrument
        )
        break
      case 'PitchShift':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[14].instrument.pitchShiftInstrument
        )
        break
      case 'Reverb':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[15].instrument.reverbInstrument
        )
        break
      case 'StereoWidener':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[16].instrument.stereoWidenerInstrument
        )
        break
      case 'Tremolo':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[17].instrument.tremoloInstrument
        )
        break
      case 'Vibrato':
        this.assembleSynthEffectChannel(
          everyEffectAssembly.instruments[18].instrument.vibratoInstrument
        )

        break
    }

    // prettier-ignore
    const seq = new Tone.Sequence(
      (time, note) => {
        synth.node.triggerAttackRelease(note, 0.8, time)
      },
      [
        'C4', 'E4', 'G4', 'C4', 'E4', 'G4', 'C4', 'E4', 'G4', 'C4', 'E4', 'G4',
        'E4', 'G4', 'B3', 'E4', 'G4', 'B3', 'E4', 'G4', 'B3', 'E4', 'G4', 'B3'
      ]
    ).start(0)
  }

  addEffect = (synthNode, choosenEffectNode, channelNode) => {
    let { instruments } = this.state

    let newEffectArray = []

    newEffectArray.push(choosenEffectNode)
    newEffectArray.push(channelNode)
    synthNode.chain(...newEffectArray)
    newEffectArray.pop()
  }

  renderWelcomeScreen = () => {
    return <WelcomeScreen handleStartWebAudio={this.startWebAudio} />
  }

  assembleSynthEffectChannel = (effect) => {
    let { toneSynthInstrument } = everyEffectAssembly.instruments[0].instrument
    let { channelInstrument } = everyEffectAssembly.instruments[19].instrument

    const assembledInstruments = []

    this.addEffect(
      toneSynthInstrument.node,
      effect.node,
      channelInstrument.node
    )

    assembledInstruments.push(toneSynthInstrument, effect, channelInstrument)

    this.setState({
      instruments: assembledInstruments
    })
  }

  playSequence = () => {
    let { togglePlay } = this.state

    if (this.state.webAudioStarted === false) {
      this.startWebAudio()
    }

    if (togglePlay == false) {
      Tone.Transport.start()
      this.setState({
        togglePlay: !togglePlay
      })
    } else {
      Tone.Transport.stop()
      this.setState({
        togglePlay: !togglePlay
      })
    }
  }

  renderRoom = () => {
    const { instruments, togglePlay } = this.state

    return (
      <MelodySynthEffectModule
        instruments={instruments}
        togglePlay={togglePlay}
        handlePropertyValueChange={this.handlePropertyValueChange}
        handlePlaySequence={this.playSequence}
      />
    )
  }

  render() {
    const { webAudioStarted } = this.state

    return <div className="SynthContainer">{this.renderRoom()}</div>
  }
}
