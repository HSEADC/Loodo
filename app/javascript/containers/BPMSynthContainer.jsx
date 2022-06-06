import * as Tone from 'tone'
import React, { PureComponent } from 'react'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import { styles } from '../module_components/CodeModule-styles'
SyntaxHighlighter.registerLanguage('javascript', js)

import { generateUniqId } from '../utilities'

import WelcomeScreen from '../views/WelcomeScreen'
import BPMSynthModule from '../views/BPMSynthModule'

export default class BPMSynthContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      webAudioStarted: false,
      instruments: [],
      togglePlay: false,
      bpm: 120
    }
  }

  componentDidMount() {
    this.initInstruments()
    console.log('/// Instruments have been initialized ///')
  }

  startWebAudio = async () => {
    await Tone.start()

    this.setState({
      webAudioStarted: true
    })
  }

  handleBPMChange = (value) => {
    Tone.Transport.bpm.value = this.state.bpm

    this.setState({
      bpm: value
    })
  }

  handlePropertyValueChange = (id, property, value) => {
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

    Tone.Transport.bpm.value = this.state.bpm

    const melodySynthNode = new Tone.Synth(melodySynthSettings).toDestination()

    const instruments = [
      {
        id: generateUniqId(),
        name: 'Melody Synth',
        type: 'ToneSynth',
        node: melodySynthNode,
        settings: melodySynthSettings
      }
    ]

    // prettier-ignore
    const seq = new Tone.Sequence(
      (time, note) => {
        instruments[0].node.triggerAttackRelease(note, 0.8, time)
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

  playSequence = () => {
    let { togglePlay, webAudioStarted } = this.state

    if (webAudioStarted === false) {
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
      <BPMSynthModule
        instruments={instruments}
        handlePropertyValueChange={this.handlePropertyValueChange}
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        handlePlaySequence={this.playSequence}
        togglePlay={this.state.togglePlay}
        disabled={this.props.disabled}
        handleBPMChange={this.handleBPMChange}
        bpm={this.state.bpm}
      />
    )
  }

  render() {
    const { bpm, togglePlay } = this.state

    let isPlaying = ''

    if (togglePlay) {
      isPlaying = `// Запустили сиквенцию
      Tone.Transport.start()`
    } else {
      isPlaying = `// Остановили сиквенцию
      Tone.Transport.stop()`
    }

    const codeTest = `    // Создали синтезатор
    const melodySynthNode = new Tone.Synth(melodySynthSettings).toDestination()

    // Создали секвенцию
    const seq = new Tone.Sequence(
      (time, note) => {
        instruments[0].node.triggerAttackRelease(note, 0.8, time)
      },
      ['C4', 'E4', 'G4', 'C4', 'E4', 'G4', 'C4', 'E4', 'G4', 'C4', 'E4', 'G4',
        'E4', 'G4', 'B3', 'E4', 'G4', 'B3', 'E4', 'G4', 'B3', 'E4', 'G4', 'B3']
      ).start(0)

    ${isPlaying}

    // Значение BPM
    Tone.Transport.bpm.value = ${bpm}`
    return (
      <div className="SynthContainer">
        {this.renderRoom()}
        <div className="CodeModule">
          <h1>Пример кода</h1>

          <SyntaxHighlighter language="javascript" style={styles}>
            {codeTest}
          </SyntaxHighlighter>
        </div>
      </div>
    )
  }
}
