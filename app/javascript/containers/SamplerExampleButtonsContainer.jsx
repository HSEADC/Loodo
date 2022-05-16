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
      instruments: [],
      togglePlay: false
    }
  }

  initInstruments = () => {
    this.setState({
      instruments: instrument
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

  playNote = (sample) => {
    let { togglePlay } = this.state
    let sampler = this.state.instruments[0].node

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

    // this.setState({
    //   togglePlay: true
    // })
    //
    // setTimeout(this.changeToggle, 1000)
  }

  renderRoom = () => {
    const { instruments, togglePlay } = this.state

    return (
      <SamplerExampleButtonsModule
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
