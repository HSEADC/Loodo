import * as Tone from 'tone'
import React, { PureComponent } from 'react'

import { generateUniqId } from '../utilities'

import Button from '../control_components/Button'
import PianoButton from '../control_components/PianoButton'

import WelcomeScreen from '../views/WelcomeScreen'
import KeyboardModule from '../views/KeyboardModule'

export default class KeyboardContainer extends PureComponent {
  constructor(props) {
    super(props)

    let blackKeys = [
      {
        note: 'C#',
        key: 'w',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'D#',
        key: 'e',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'F#',
        key: 't',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'G#',
        key: 'y',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'A#',
        key: 'u',
        isPlaying: false,
        classList: ['PianoBlackKey']
      }
    ]

    let whiteKeys = [
      {
        note: 'C',
        key: 'a',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'D',
        key: 's',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'E',
        key: 'd',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'F',
        key: 'f',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'G',
        key: 'g',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'A',
        key: 'h',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'B',
        key: 'j',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      }
    ]

    this.state = {
      webAudioStarted: false,
      instruments: [],
      keyboards: [
        {
          id: generateUniqId(),
          octave: 4,
          isPlaying: false,
          blackKeys: blackKeys,
          whiteKeys: whiteKeys
        }
      ]
    }
  }

  componentDidMount() {
    this.initInstruments()
    console.log('/// Instruments have been initialized ///')
  }

  playNote = (synth, note, dur) => {
    synth.triggerAttackRelease(note, dur)
  }

  mergeNote = (id, key) => {
    const { blackKeys, whiteKeys, octave } = this.state.keyboards[0]
    let note = ''

    if (key === 'Black') {
      if (id <= 11) {
        note = blackKeys[id].note + `${octave}`
      } else if (id >= 12) {
        note = blackKeys[id].note + `${octave + 1}`
      }
    } else if (key === 'White') {
      if (id <= 11) {
        note = whiteKeys[id].note + `${octave}`
      } else if (id >= 12) {
        note = whiteKeys[id].note + `${octave + 1}`
      }
    } else {
      console.log('Error in merge note')
    }

    return note
  }

  startPlayingNote = (id, key) => {
    const { webAudioStarted } = this.state
    const { blackKeys } = this.state.keyboards[0]
    const { whiteKeys } = this.state.keyboards[0]

    if (webAudioStarted == false) {
      this.initWebAudio()
    }

    if (key === 'Black') {
      this.state.instruments[0].node.triggerAttack(this.mergeNote(id, key))
      blackKeys[id].isPlaying = true
      blackKeys[id].classList.push('on')
    } else if (key === 'White') {
      this.state.instruments[0].node.triggerAttack(this.mergeNote(id, key))
      whiteKeys[id].isPlaying = true
      whiteKeys[id].classList.push('on')
    } else {
      console.log('Error in start playing note')
    }

    console.log(this.state.keyboards[0].whiteKeys.classList)

    this.setState({
      blackKeys,
      whiteKeys
    })
  }

  stopPlayingNote = (id, key) => {
    const { blackKeys } = this.state.keyboards[0]
    const { whiteKeys } = this.state.keyboards[0]

    if (key === 'Black') {
      this.state.instruments[0].node.triggerRelease()
      blackKeys[id].isPlaying = false
      blackKeys[id].classList.pop()
    } else if (key === 'White') {
      this.state.instruments[0].node.triggerRelease()
      whiteKeys[id].isPlaying = false
      whiteKeys[id].classList.pop()
    } else {
      console.log('Error in stop playing note')
    }

    console.log(this.state.keyboards[0].whiteKeys[id].classList)

    this.setState({
      blackKeys,
      whiteKeys
    })
  }

  renderNoteButtons = (keys) => {
    const { blackKeys } = this.state.keyboards[0]
    const { whiteKeys } = this.state.keyboards[0]

    let noteButtons = []

    if (keys === 'Black') {
      blackKeys.forEach((note, i) => {
        noteButtons.push(
          <PianoButton
            text={note.note}
            handleDown={() => this.startPlayingNote(i, 'Black')}
            handleUp={() => this.stopPlayingNote(i, 'Black')}
            classes={note.classList}
            typeOfButton={keys}
            key={i}
            buttonId={i}
          />
        )
      })
    } else if (keys === 'White') {
      whiteKeys.forEach((note, i) => {
        noteButtons.push(
          <PianoButton
            text={note.note}
            handleDown={() => this.startPlayingNote(i, 'White')}
            handleUp={() => this.stopPlayingNote(i, 'White')}
            classes={note.classList}
            typeOfButton={keys}
            key={i}
            buttonId={i}
          />
        )
      })
    } else {
      console.log('Error')
    }

    return noteButtons
  }

  renderRoom = () => {
    const { instruments } = this.state
    let i = 0

    return <KeyboardModule renderNoteButtons={this.renderNoteButtons} />
  }

  initWebAudio = async () => {
    await Tone.start()

    this.setState({
      webAudioStarted: true
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

    const melodySynthNode = new Tone.Synth(melodySynthSettings).toDestination()

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

  initKeyboard = () => {
    let { keyboards } = this.state

    let blackKeys = [
      {
        note: 'C#',
        key: 'w',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'D#',
        key: 'e',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'F#',
        key: 't',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'G#',
        key: 'y',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'A#',
        key: 'u',
        isPlaying: false,
        classList: ['PianoBlackKey']
      }
    ]

    let whiteKeys = [
      {
        note: 'C',
        key: 'a',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'D',
        key: 's',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'E',
        key: 'd',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'F',
        key: 'f',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'G',
        key: 'g',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'A',
        key: 'h',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'B',
        key: 'j',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      }
    ]

    let notes = [
      {
        note: 'C',
        key: 'a',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'C#',
        key: 'w',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'D',
        key: 's',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'D#',
        key: 'e',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'E',
        key: 'd',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'F',
        key: 'f',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'F#',
        key: 't',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'G',
        key: 'g',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'G#',
        key: 'y',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'A',
        key: 'h',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'A#',
        key: 'u',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'B',
        key: 'j',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      }
    ]

    let keyboard = {
      id: generateUniqId(),
      octave: 4,
      isPlaying: false,
      blackKeys: blackKeys,
      whiteKeys: whiteKeys
    }

    keyboards.push(keyboard)

    this.setState({
      keyboards
    })
  }

  render() {
    const { webAudioStarted } = this.state

    return <div className="SynthContainer">{this.renderRoom()}</div>
  }
}
