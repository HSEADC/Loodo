import * as Tone from 'tone'
import React, { PureComponent } from 'react'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import { styles } from '../module_components/CodeModule-styles'
SyntaxHighlighter.registerLanguage('javascript', js)

import { generateUniqId } from '../utilities'

import WelcomeScreen from '../views/WelcomeScreen'
import TwoButtonTriggerModule from '../views/TwoButtonTriggerModule'
import CodeModule from '../module_components/CodeModule'

export default class TwoButtonTriggerContainer extends PureComponent {
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
    console.log('/// Instruments have been initialized ///')
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

    this.setState({
      webAudioStarted: true
    })
  }

  changeToggle = () => {
    this.setState({
      togglePlay: false
    })
  }

  playNote = (note, dur) => {
    let { togglePlay, webAudioStarted } = this.state
    let synth = this.state.instruments[0].node

    if (webAudioStarted === false) {
      this.startWebAudio()
    }

    synth.triggerAttackRelease(note, dur)

    this.setState({
      togglePlay: true
    })

    setTimeout(this.changeToggle, 1000)
  }

  renderRoom = () => {
    const { togglePlay } = this.state

    return (
      <TwoButtonTriggerModule
        togglePlay={togglePlay}
        handlePlayNote={this.playNote}
      />
    )
  }

  render() {
    const { webAudioStarted } = this.state

    const codeTest = `    // Создали синтезатор
    const synth = new Tone.Synth().toDestination()

    // Функция для тригера первой кнопки
    synth.triggerAttackRelease("1")

    // Функция для тригера второй кнопки
    synth.triggerAttackRelease("1hz")`

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
