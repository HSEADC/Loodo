import * as Tone from 'tone'
import React, { PureComponent } from 'react'

import * as toneMelodyEffectSynth from '../tunes/tone_melody_chooseeffect_synth'

import Button from '../control_components/Button'
// import { ReactComponent as PlayButton } from "../../assets/images/play_button.svg";

import WelcomeScreen from '../views/WelcomeScreen'
import MelodySynthChooseEffectModule from '../views/MelodySynthChooseEffectModule'

export default class MelodySynthEffectContainer extends PureComponent {
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
    console.log('/// Instruments have been initialized ///')

    this.setState({
      webAudioStarted: true
    })
  }

  generateUniqId = () => {
    return Math.floor(Math.random() * Date.now())
  }

  handlePropertyValueChange = (id, property, value) => {
    console.log(property, value)
    const instruments = []

    this.state.instruments.forEach((instrument, i) => {
      const newInstrument = []

      instrument.forEach((instrumentModule, i) => {
        const newInstrumentModule = Object.assign({}, instrumentModule)

        if (instrumentModule.id === id) {
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
              if (
                event.noteName === property[0] &&
                event.time === property[1]
              ) {
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

        newInstrument.push(newInstrumentModule)
      })

      instruments.push(newInstrument)
    })

    this.setState({
      instruments
    })
  }

  initInstruments = () => {
    const instruments = [toneMelodyEffectSynth.instrument]

    // prettier-ignore
    const seq = new Tone.Sequence(
      (time, note) => {
        instruments[0][0].node.triggerAttackRelease(note, 0.8, time)
      },
      [
        'C4', 'E4', 'G4', 'C4', 'E4', 'G4', 'C4', 'E4', 'G4', 'C4', 'E4', 'G4',
        'E4', 'G4', 'B3', 'E4', 'G4', 'B3', 'E4', 'G4', 'B3', 'E4', 'G4', 'B3'
      ]
    ).start(0)

    this.setState({
      instruments
    })
  }

  checkState = () => {
    console.log(this.state)
  }

  renderWelcomeScreen = () => {
    return <WelcomeScreen handleStartWebAudio={this.startWebAudio} />
  }

  addEffect = () => {}

  playSequence = (isPressed) => {
    if (isPressed) {
      Tone.Transport.start()
    } else {
      Tone.Transport.stop()
    }
  }

  renderRoom = () => {
    const { instruments } = this.state

    return (
      <MelodySynthChooseEffectModule
        instruments={instruments}
        handlePropertyValueChange={this.handlePropertyValueChange}
        handleCheckState={this.checkState}
        handlePlaySequence={this.playSequence}
        addEffect={this.addEffect}
        // handleInitInstruments={this.initInstruments}
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
