import * as Tone from 'tone'
import React, { PureComponent } from 'react'

import { generateUniqId } from '../utilities'

import WelcomeScreen from '../views/WelcomeScreen'
import TrigerCodeModule from '../views/TrigerCodeModule'

export default class TrigerCodeContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      webAudioStarted: false,
      instruments: [],
      togglePlay: false
    }
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

    const melodySynthNode = new Tone.Synth(melodySynthSettings).toDestination()

    // melodySynthNode.triggerAttackRelease("C4", "8n");

    let a = 1

    const instruments = [
      {
        id: generateUniqId(),
        name: 'Melody Synth',
        type: 'ToneSynth',
        node: melodySynthNode,
        settings: melodySynthSettings
      }
    ]

    this.setState({
      instruments
    })
  }

  startWebAudio = async () => {
    await Tone.start()
    this.initInstruments()
    console.log('/// Instruments have been initialized ///')

    this.setState({
      webAudioStarted: true
    })
  }

  renderWelcomeScreen = () => {
    return <WelcomeScreen handleStartWebAudio={this.startWebAudio} />
  }

  changeToggle = () => {
    this.setState({
      togglePlay: false
    })
  }

  playNote = (note, dur) => {
    let { togglePlay } = this.state
    let synth = this.state.instruments[0].node

    synth.triggerAttackRelease(note, dur)

    this.setState({
      togglePlay: true
    })

    setTimeout(this.changeToggle, 1000)
  }

  renderRoom = () => {
    const { instruments, togglePlay } = this.state

    return (
      <TrigerCodeModule
        togglePlay={togglePlay}
        handlePlayNote={this.playNote}
      />
    )
  }

  render() {
    const { webAudioStarted } = this.state

    return (
      <div className="SynthContainer">
        {webAudioStarted === true
          ? this.renderRoom()
          : this.renderWelcomeScreen()}
      </div>
    )
  }
}
