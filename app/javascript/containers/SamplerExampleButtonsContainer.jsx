import * as Tone from 'tone'
import React, { PureComponent } from 'react'

import { generateUniqId } from '../utilities'
import { instrument } from '..//tunes/instrument_tunes/samplers/simple_drums'

import WelcomeScreen from '../views/WelcomeScreen'
import SamplerExampleButtonsModule from '../views/SamplerExampleButtonsModule'

export default class SamplerExampleButtonsContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      webAudioStarted: false,
      instruments: instrument,
      togglePlay: false
    }
  }

  startWebAudio = async () => {
    await Tone.start()

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

  playNote = (sample) => {
    let { togglePlay, webAudioStarted } = this.state
    let sampler = this.state.instruments[0].node

    if (webAudioStarted === false) {
      this.startWebAudio()
    }

    switch (sample) {
      case 'Kick':
        sampler.triggerAttackRelease('A1', 0.5)
        break
      case 'Hi-Hat':
        sampler.triggerAttackRelease('C1', 0.5)

        break
      case 'Snare':
        sampler.triggerAttackRelease('B1', 0.5)

        break
      case 'Clap':
        sampler.triggerAttackRelease('D1', 0.5)

        break
    }
  }

  renderRoom = () => {
    const { togglePlay } = this.state

    return (
      <SamplerExampleButtonsModule
        togglePlay={togglePlay}
        handlePlayNote={this.playNote}
      />
    )
  }

  render() {
    return <div className="SynthContainer">{this.renderRoom()}</div>
  }
}
