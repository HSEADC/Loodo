import * as Tone from 'tone'
import React, { PureComponent } from 'react'

import WelcomeScreen from '../views/WelcomeScreen'
import SynthRoom from '../views/SynthRoom'

export default class SynthContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      webAudioStarted: false,
      instruments: []
    }
  }

  startWebAudio = async () => {
    await Tone.start()
    this.initInstruments()

    this.setState({
      webAudioStarted: true
    })
  }

  generateUniqId = () => {
    return Math.floor(Math.random() * Date.now())
  }

  initInstruments = () => {
    const melodySynthSettings = {
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

    const melodySynthChorusSettings = {
      wet: 0.6,
      type: 'sine',
      frequency: 1.5,
      delayTime: 3.5,
      depth: 0.7,
      spread: 180
    }

    const melodySynthChannelSettings = {
      pan: 0,
      volume: 0,
      mute: false,
      solo: false
    }

    const melodySynthNode = new Tone.Synth(melodySynthSettings)

    const melodySynthChorusNode = new Tone.Chorus(
      melodySynthChorusSettings
    ).start()

    const melodySynthChannelNode = new Tone.Channel(
      melodySynthChannelSettings
    ).toDestination()

    melodySynthNode.chain(melodySynthChorusNode, melodySynthChannelNode)

    const instruments = [
      {
        id: this.generateUniqId(),
        name: 'Melody Synth',
        type: 'ToneSynth',
        node: melodySynthNode,
        settings: melodySynthSettings
      },
      {
        id: this.generateUniqId(),
        name: 'Chorus',
        type: 'Chorus',
        node: melodySynthChorusNode,
        settings: melodySynthChorusSettings
      },
      {
        id: this.generateUniqId(),
        name: 'Channel',
        type: 'Channel',
        node: melodySynthChannelNode,
        settings: melodySynthChannelSettings
      }
    ]

    // prettier-ignore
    const seq = new Tone.Sequence(
      (time, note) => {
        melodySynthNode.triggerAttackRelease(note, 0.8, time)
      },
      [
        'C4', 'E4', 'G4', 'C4', 'E4', 'G4', 'C4', 'E4', 'G4', 'C4', 'E4', 'G4',
        'E4', 'G4', 'B3', 'E4', 'G4', 'B3', 'E4', 'G4', 'B3', 'E4', 'G4', 'B3'
      ]
    ).start(0)

    Tone.Transport.start()

    this.setState({
      instruments
    })
  }

  handlePropertyValueChange = (id, property, value) => {
    // Звук лагает при изменении параметров
    // const { instruments } = this.state
    //
    // instruments.forEach((instrument, i) => {
    //   if (instrument.id === id) {
    //     const propertyLevel1 = property[0]
    //     instrument.settings[propertyLevel1] = value
    //   }
    //
    //   instruments.push(instrument)
    // })

    // Иммутабельный способ, звук не лагает
    const instruments = []

    this.state.instruments.forEach((instrument, i) => {
      const newInstrument = Object.assign({}, instrument)

      if (instrument.id === id) {
        if (property.length === 1) {
          const propertyName = property[0]
          newInstrument.settings[propertyName] = value
        } else if (property.length === 2) {
          const scopeName = property[0]
          const propertyName = property[1]
          newInstrument.settings[scopeName][propertyName] = value
        }
      }

      instruments.push(newInstrument)
    })

    this.setState({
      instruments
    })
  }

  renderWelcomeScreen = () => {
    return <WelcomeScreen handleStartWebAudio={this.startWebAudio} />
  }

  renderSynthRoom = () => {
    const { instruments } = this.state

    return (
      <SynthRoom
        instruments={instruments}
        handlePropertyValueChange={this.handlePropertyValueChange}
      />
    )
  }

  render() {
    const { webAudioStarted } = this.state

    return (
      <div className="SynthContainer">
        {webAudioStarted === true
          ? this.renderSynthRoom()
          : this.renderWelcomeScreen()}
      </div>
    )
  }
}
