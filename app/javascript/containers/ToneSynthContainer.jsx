import * as Tone from 'tone'
import React, { PureComponent } from 'react'

import { generateUniqId } from '../utilities'
import * as allMelodySynth from '../tunes/all_melody_synth'

import WelcomeScreen from '../views/WelcomeScreen'
import ToneSynthModule from '../views/ToneSynthModule'

export default class TrigerContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      webAudioStarted: false,
      instruments: [],
      togglePlay: false
    }
  }

  startWebAudio = async () => {
    await Tone.start()
    this.initInstruments()
    console.log('/// Instruments have been initialized ///')

    this.setState({
      webAudioStarted: true
    })
  }

  handlePropertyValueChange = (id, property, value) => {
    const instruments = []

    this.state.instruments.forEach((instrument, i) => {
      const newInstrument = Object.assign({}, instrument)

      // console.log(newInstrument[0])
      // console.log(newInstrument[0].settings)
      // console.log(value)

      if (instrument[0].id === id) {
        if (property.length === 1) {
          const propertyName = property[0]
          newInstrument[0].settings[propertyName] = value
        } else if (property.length === 2) {
          const scopeName = property[0]
          const propertyName = property[1]
          newInstrument[0].settings[scopeName][propertyName] = value
        }
      }

      instruments.push(newInstrument)
    })

    console.log(this.state.instruments)

    this.setState({
      instruments
    })
  }

  initInstruments = () => {
    const instruments = [allMelodySynth.instrument]
    const { synth } = this.props

    let choosenNode

    switch (synth) {
      case 'ToneSynth':
        choosenNode = instruments[0][0].node[0]
        break

      case 'MonoSynth':
        choosenNode = instruments[0][0].node[1]
        break

      case 'FMSynth':
        choosenNode = instruments[0][0].node[2]
        break

      case 'AMSynth':
        choosenNode = instruments[0][0].node[3]
        break

      case 'PolySynth':
        choosenNode = instruments[0][0].node[4]
        break

      case 'FatOscillator':
        choosenNode = instruments[0][0].node[5]
        break
    }

    // prettier-ignore
    const seq = new Tone.Sequence(
      (time, note) => {
        choosenNode.triggerAttackRelease(note, 0.8, time)
      },
      [
        'C4', 'E4', 'G4', 'C4', 'E4', 'G4', 'C4', 'E4', 'G4', 'C4', 'E4', 'G4',
        'E4', 'G4', 'B3', 'E4', 'G4', 'B3', 'E4', 'G4', 'B3', 'E4', 'G4', 'B3'
      ]
    ).start(0)

    this.setState({
      instruments
    })

    return choosenNode
  }

  renderWelcomeScreen = () => {
    return <WelcomeScreen handleStartWebAudio={this.startWebAudio} />
  }

  playSequence = () => {
    let { togglePlay } = this.state

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
    const { instruments } = this.state

    return (
      <ToneSynthModule
        instruments={instruments}
        handlePropertyValueChange={this.handlePropertyValueChange}
        handlePlaySequence={this.playSequence}
        togglePlay={this.state.togglePlay}
        disabled={this.props.disabled}
        synth={this.props.synth}
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
