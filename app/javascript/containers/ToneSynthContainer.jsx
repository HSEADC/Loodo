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
    const instruments = []

    this.state.instruments.forEach((instrument, i) => {
      const newInstrument = Object.assign({}, instrument)

      // console.log(newInstrument[0])
      // console.log(newInstrument[0].settings)
      // console.log(value)

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

    console.log(this.state.instruments)

    this.setState({
      instruments
    })
  }

  initInstruments = () => {
    const instruments = [allMelodySynth.instrument]
    const { synth } = this.props

    let assembledInstruments = []
    let choosenNode

    switch (synth) {
      case 'ToneSynth':
        assembledInstruments.push(instruments[0][0], instruments[0][5])
        choosenNode = instruments[0][0].node
        break

      case 'MonoSynth':
        assembledInstruments.push(instruments[0][1], instruments[0][5])
        choosenNode = instruments[0][1].node
        break

      case 'FMSynth':
        assembledInstruments.push(instruments[0][2], instruments[0][5])
        choosenNode = instruments[0][2].node
        break

      case 'AMSynth':
        assembledInstruments.push(instruments[0][3], instruments[0][5])
        choosenNode = instruments[0][3].node
        break

      case 'PolySynth':
        assembledInstruments.push(instruments[0][0], instruments[0][5])
        choosenNode = instruments[0][0].node
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
      instruments: assembledInstruments
    })
  }

  // renderWelcomeScreen = () => {
  //   return <WelcomeScreen handleStartWebAudio={this.startWebAudio} />
  // }

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
    console.log('asdasdasd')
    const { webAudioStarted } = this.state

    return <div className="SynthContainer">{this.renderRoom()}</div>
  }
}
