import * as Tone from 'tone'
// import * as melodySynth from '../tunes/melody_synth'
// import * as bassSynth from '../tunes/bass_synth'
// import * as spaceSynth from '../tunes/space_synth'
// import * as allEffectsSynth from '../tunes/all_effects_synth'
import * as drumSampler from '../tunes/drum_sampler'
import * as sequencedSynth from '../tunes/sequenced_synth'

import React, { PureComponent } from 'react'

import WelcomeScreen from '../views/WelcomeScreen'
import SequencerModule from '../views/SequencerModule'

export default class SequencerContainer extends PureComponent {
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

    this.setState({
      webAudioStarted: true
    })
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

  playNote = (note, dur) => {
    let { togglePlay } = this.state
    let synth = this.state.instruments[0].node

    synth.triggerAttackRelease(note, dur)

    setTimeout(this.changeToggle, 1000)
  }

  initInstruments = () => {
    Tone.Transport.bpm.value = 120

    // melodySynth.part.start()
    // bassSynth.sequention.start(0)
    // spaceSynth.sequention.start(0)

    // const sequention = allEffectsSynth.sequentions[0]().start(0)
    // allEffectsSynth.sequentions[0].start(0)

    // const sequention = drumSampler.part.start()

    const instruments = [
      // toneMelodyEffectSynth.instrument,
      // melodySynth.instrument,
      // bassSynth.instrument
      // spaceSynth.instrument
      // allEffectsSynth.instrument
      // drumSampler.instrument,
      sequencedSynth.instrument
    ]

    this.setState({ instruments })
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

  renderWelcomeScreen = () => {
    return <WelcomeScreen handleStartWebAudio={this.startWebAudio} />
  }

  renderSynthRoom = () => {
    const { instruments } = this.state

    return (
      <SequencerModule
        instruments={instruments}
        handlePropertyValueChange={this.handlePropertyValueChange}
        handlePlaySequence={this.playSequence}
        togglePlay={this.state.togglePlay}
      />
    )
  }

  render() {
    const { webAudioStarted } = this.state

    return (
      <div className="SequencerContainer">
        {webAudioStarted === true
          ? this.renderSynthRoom()
          : this.renderWelcomeScreen()}
      </div>
    )
  }
}
