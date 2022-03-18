import * as Tone from 'tone'
import React, { PureComponent } from 'react'

import * as tone_melody_chooseeffect_synth from '../tunes/tone_melody_chooseeffect_synth'
import { generateUniqId } from '../utilities'

import Button from '../control_components/Button'
// import { ReactComponent as PlayButton } from "../../assets/images/play_button.svg";

import WelcomeScreen from '../views/WelcomeScreen'
import MelodySynthChooseEffectModule from '../views/MelodySynthChooseEffectModule'

export default class MelodySynthEffectContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      webAudioStarted: false,
      instruments: [],
      effectArray: tone_melody_chooseeffect_synth.effectArray,
      newEffect: []
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
    const instruments = [tone_melody_chooseeffect_synth.instrument]

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

  generateEffect = (effectType) => {
    let {
      distortionSettings,
      tremoloSettings,
      pitchShiftSettings
    } = tone_melody_chooseeffect_synth

    let effect

    switch (effectType) {
      case 'Distortion':
        const newDistortionNode = new Tone.Distortion(distortionSettings)
        const newDistortionEffect = {
          id: generateUniqId(),
          name: 'Distortion',
          type: 'DistortionEffect',
          settings: distortionSettings,
          node: newDistortionNode
        }

        effect = newDistortionEffect
        console.log('Added ${effectType}')

        break

      case 'Tremolo':
        const newTremoloNode = new Tone.Tremolo(tremoloSettings)
        const newTremoloEffect = {
          id: generateUniqId(),
          name: 'Tremolo',
          type: 'TremoloEffect',
          settings: tremoloSettings,
          node: newTremoloNode
        }

        effect = newTremoloEffect
        console.log('Added ${effectType}')

        break

      case 'Pitch Shift':
        const newPitchShiftNode = new Tone.PitchShift(pitchShiftSettings)
        const newPitchShiftEffect = {
          id: generateUniqId(),
          name: 'PitchShift',
          type: 'PitchShiftEffect',
          settings: pitchShiftSettings,
          node: newPitchShiftNode
        }

        effect = newPitchShiftEffect
        console.log('Added ${effectType}')

        break
    }

    return effect
  }

  addEffect = (choosenEffect) => {
    let { synthNode, channelNode } = tone_melody_chooseeffect_synth

    let { effectArray, instruments } = this.state

    let newEffectArray = [...effectArray]
    let newInstrumentsArray = [...instruments[0]]

    let newEffect = this.generateEffect(choosenEffect)

    newEffectArray.push(newEffect.node)
    newEffectArray.push(channelNode)
    synthNode.chain(...newEffectArray)
    newEffectArray.pop()

    newInstrumentsArray.push(newEffect)
    console.log(instruments)
    console.log(newInstrumentsArray)

    // console.log(newInstrumentsArray)

    this.setState({
      effectArray: newEffectArray,
      instruments: [newInstrumentsArray]
    })
  }

  playSequence = (isPressed) => {
    const { postMessageToWindow } = this.props

    if (isPressed) {
      Tone.Transport.start()
      // postMessageToWindow('Пойдем гулять?', { somedata: 'yoyoyo' })
    } else {
      Tone.Transport.stop()
      // postMessageToWindow('Пойдем!', { somedata: 'yoyoyo' })
    }
  }

  renderRoom = () => {
    const { instruments } = this.state
    let possibleEffects = ['Distortion', 'Tremolo', 'Pitch Shift']

    return (
      <MelodySynthChooseEffectModule
        instruments={instruments}
        handlePropertyValueChange={this.handlePropertyValueChange}
        handleCheckState={this.checkState}
        handlePlaySequence={this.playSequence}
        addEffect={this.addEffect}
        possibleEffects={possibleEffects}
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
