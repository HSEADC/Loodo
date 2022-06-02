import * as Tone from 'tone'
import React, { PureComponent } from 'react'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import { styles } from '../module_components/CodeModule-styles'
SyntaxHighlighter.registerLanguage('javascript', js)

import { generateUniqId } from '../utilities'
import * as allMelodySynth from '../tunes/all_melody_synth'

import Button from '../control_components/Button'
import PianoButton from '../control_components/PianoButton'

import WelcomeScreen from '../views/WelcomeScreen'
import KeyboardModule from '../views/KeyboardModule'

export default class KeyboardContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      webAudioStarted: false,
      instruments: [],
      keys: [],
      pianoKeys: {
        octave: '4',
        notes: [
          {
            isPlaying: false,
            note: 'C'
          },
          {
            isPlaying: false,
            note: 'C#'
          },
          {
            isPlaying: false,
            note: 'D'
          },
          {
            isPlaying: false,
            note: 'D#'
          },
          {
            isPlaying: false,
            note: 'E'
          },
          {
            isPlaying: false,
            note: 'F'
          },
          {
            isPlaying: false,
            note: 'F#'
          },
          {
            isPlaying: false,
            note: 'G'
          },
          {
            isPlaying: false,
            note: 'G#'
          },
          {
            isPlaying: false,
            note: 'A'
          },
          {
            isPlaying: false,
            note: 'A#'
          },
          {
            isPlaying: false,
            note: 'B'
          }
        ]
      }
    }
  }

  componentDidMount() {
    this.initInstruments()
  }

  noteMerge = (note) => {
    const { octave } = this.state.pianoKeys

    return note + octave
  }

  playNoteStateUpDate = (note) => {
    const { notes, octave } = this.state.pianoKeys

    if (note === 'C') {
      notes[0].isPlaying = true
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'C#') {
      notes[1].isPlaying = true
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'D') {
      notes[2].isPlaying = true
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'D#') {
      notes[3].isPlaying = true
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'E') {
      notes[4].isPlaying = true
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'F') {
      notes[5].isPlaying = true
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'F#') {
      notes[6].isPlaying = true
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'G') {
      notes[7].isPlaying = true
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'G#') {
      notes[8].isPlaying = true
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'A') {
      notes[9].isPlaying = true
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'A#') {
      notes[10].isPlaying = true
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'B') {
      notes[11].isPlaying = true
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    }
  }

  stopPlayNoteStateUpDate = (note) => {
    const { notes, octave } = this.state.pianoKeys

    if (note === 'C') {
      notes[0].isPlaying = false
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'C#') {
      notes[1].isPlaying = false
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'D') {
      notes[2].isPlaying = false
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'D#') {
      notes[3].isPlaying = false
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'E') {
      notes[4].isPlaying = false
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'F') {
      notes[5].isPlaying = false
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'F#') {
      notes[6].isPlaying = false
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'G') {
      notes[7].isPlaying = false
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'G#') {
      notes[8].isPlaying = false
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'A') {
      notes[9].isPlaying = false
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'A#') {
      notes[10].isPlaying = false
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    } else if (note === 'B') {
      notes[11].isPlaying = false
      this.setState({
        pianoKeys: {
          octave,
          notes
        }
      })
    }
  }

  handleNotesKeyDown = (element) => {
    const synth = this.state.instruments[0].node
    const { notes } = this.state.pianoKeys
    const { webAudioStarted } = this.state

    if (webAudioStarted === false) {
      this.initWebAudio()
    }

    element.preventDefault()

    switch (element.keyCode) {
      case 65:
        if (notes[0].isPlaying === false) {
          this.playNoteStateUpDate(notes[0].note)
          synth.triggerAttack(this.noteMerge(notes[0].note))
        }

        break
      case 87:
        if (notes[1].isPlaying === false) {
          this.playNoteStateUpDate(notes[1].note)
          synth.triggerAttack(this.noteMerge(notes[1].note))
        }

        break
      case 83:
        if (notes[2].isPlaying === false) {
          this.playNoteStateUpDate(notes[2].note)
          synth.triggerAttack(this.noteMerge(notes[2].note))
        }

        break
      case 69:
        if (notes[3].isPlaying === false) {
          this.playNoteStateUpDate(notes[3].note)
          synth.triggerAttack(this.noteMerge(notes[3].note))
        }

        break
      case 68:
        if (notes[4].isPlaying === false) {
          this.playNoteStateUpDate(notes[4].note)
          synth.triggerAttack(this.noteMerge(notes[4].note))
        }

        break
      case 70:
        if (notes[5].isPlaying === false) {
          this.playNoteStateUpDate(notes[5].note)
          synth.triggerAttack(this.noteMerge(notes[5].note))
        }

        break
      case 84:
        if (notes[6].isPlaying === false) {
          this.playNoteStateUpDate(notes[6].note)
          synth.triggerAttack(this.noteMerge(notes[6].note))
        }

        break
      case 71:
        if (notes[7].isPlaying === false) {
          this.playNoteStateUpDate(notes[7].note)
          synth.triggerAttack(this.noteMerge(notes[7].note))
        }

        break
      case 89:
        if (notes[8].isPlaying === false) {
          this.playNoteStateUpDate(notes[8].note)
          synth.triggerAttack(this.noteMerge(notes[8].note))
        }

        break
      case 72:
        if (notes[9].isPlaying === false) {
          this.playNoteStateUpDate(notes[9].note)
          synth.triggerAttack(this.noteMerge(notes[9].note))
        }

        break
      case 85:
        if (notes[10].isPlaying === false) {
          this.playNoteStateUpDate(notes[10].note)
          synth.triggerAttack(this.noteMerge(notes[10].note))
        }

        break
      case 74:
        if (notes[11].isPlaying === false) {
          this.playNoteStateUpDate(notes[11].note)
          synth.triggerAttack(this.noteMerge(notes[11].note))
        }

        break
    }
  }

  handleNotesKeyUp = (element) => {
    const synth = this.state.instruments[0].node
    const { notes } = this.state.pianoKeys

    element.preventDefault()

    switch (element.keyCode) {
      case 65:
        this.stopPlayNoteStateUpDate(notes[0].note)
        synth.triggerRelease(this.noteMerge(notes[0].note))

        break
      case 87:
        this.stopPlayNoteStateUpDate(notes[1].note)
        synth.triggerRelease(this.noteMerge(notes[1].note))

        break
      case 83:
        this.stopPlayNoteStateUpDate(notes[2].note)
        synth.triggerRelease(this.noteMerge(notes[2].note))

        break
      case 69:
        this.stopPlayNoteStateUpDate(notes[3].note)
        synth.triggerRelease(this.noteMerge(notes[3].note))

        break
      case 68:
        this.stopPlayNoteStateUpDate(notes[4].note)
        synth.triggerRelease(this.noteMerge(notes[4].note))

        break
      case 70:
        this.stopPlayNoteStateUpDate(notes[5].note)
        synth.triggerRelease(this.noteMerge(notes[5].note))

        break
      case 84:
        this.stopPlayNoteStateUpDate(notes[6].note)
        synth.triggerRelease(this.noteMerge(notes[6].note))

        break
      case 71:
        this.stopPlayNoteStateUpDate(notes[7].note)
        synth.triggerRelease(this.noteMerge(notes[7].note))

        break
      case 89:
        this.stopPlayNoteStateUpDate(notes[8].note)
        synth.triggerRelease(this.noteMerge(notes[8].note))

        break
      case 72:
        this.stopPlayNoteStateUpDate(notes[9].note)
        synth.triggerRelease(this.noteMerge(notes[9].note))

        break
      case 85:
        this.stopPlayNoteStateUpDate(notes[10].note)
        synth.triggerRelease(this.noteMerge(notes[10].note))

        break
      case 74:
        this.stopPlayNoteStateUpDate(notes[11].note)
        synth.triggerRelease(this.noteMerge(notes[11].note))

        break
    }
  }

  startClickPlayingNote = (key) => {
    const { webAudioStarted } = this.state

    if (webAudioStarted === false) {
      this.initWebAudio()
    }

    this.state.instruments[0].node.triggerAttack(this.noteMerge(key))

    switch (key) {
      case 'C':
        this.playNoteStateUpDate('C')
        break
      case 'C#':
        this.playNoteStateUpDate('C#')
        break
      case 'D':
        this.playNoteStateUpDate('D')
        break
      case 'D#':
        this.playNoteStateUpDate('D#')
        break
      case 'E':
        this.playNoteStateUpDate('E')
        break
      case 'F':
        this.playNoteStateUpDate('F')
        break
      case 'F#':
        this.playNoteStateUpDate('F#')
        break
      case 'G':
        this.playNoteStateUpDate('G')
        break
      case 'G#':
        this.playNoteStateUpDate('G#')
        break
      case 'A':
        this.playNoteStateUpDate('A')
        break
      case 'A#':
        this.playNoteStateUpDate('A#')
        break
      case 'B':
        this.playNoteStateUpDate('B')
        break
    }
  }

  stopClickPlayingNote = (key) => {
    const { notes } = this.state.pianoKeys

    this.state.instruments[0].node.triggerRelease(this.noteMerge(key))

    switch (key) {
      case 'C':
        this.stopPlayNoteStateUpDate('C')
        break
      case 'C#':
        this.stopPlayNoteStateUpDate('C#')
        break
      case 'D':
        this.stopPlayNoteStateUpDate('D')
        break
      case 'D#':
        this.stopPlayNoteStateUpDate('D#')
        break
      case 'E':
        this.stopPlayNoteStateUpDate('E')
        break
      case 'F':
        this.stopPlayNoteStateUpDate('F')
        break
      case 'F#':
        this.stopPlayNoteStateUpDate('F#')
        break
      case 'G':
        this.stopPlayNoteStateUpDate('G')
        break
      case 'G#':
        this.stopPlayNoteStateUpDate('G#')
        break
      case 'A':
        this.stopPlayNoteStateUpDate('A')
        break
      case 'A#':
        this.stopPlayNoteStateUpDate('A#')
        break
      case 'B':
        this.stopPlayNoteStateUpDate('B')
        break
    }
  }

  renderNoteButtons = () => {
    const { notes } = this.state.pianoKeys
    let noteButtons = []

    notes.forEach((note, i) => {
      noteButtons.push(
        <PianoButton
          text={note.note}
          handleDown={() => this.startClickPlayingNote(note.note)}
          handleUp={() => this.stopClickPlayingNote(note.note)}
          isPlaying={this.state.pianoKeys.notes[i].isPlaying}
          key={i}
          buttonId={i}
        />
      )
    })

    console.log(noteButtons)

    return noteButtons
  }

  renderRoom = () => {
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

    const polySynthNode = new Tone.PolySynth(Tone.Synth).toDestination()

    const instruments = [
      {
        id: generateUniqId(),
        name: 'Poly Synth',
        type: 'PolySynth',
        node: polySynthNode,
        settings: melodySynthSettings
      }
    ]

    this.setState({
      instruments
    })
  }

  render() {
    const { webAudioStarted } = this.state

    const codeTest = `    // Создали ноду синта
    const synth = new Tone.Synth().toDestination()

    // Функция для тригера первой кнопки
    synth.triggerAttackRelease("1")

    // Функция для тригера второй кнопки
    synth.triggerAttackRelease("1hz")`

    window.addEventListener('keydown', this.handleNotesKeyDown, false)
    window.addEventListener('keyup', this.handleNotesKeyUp, false)

    return (
      <div className="SynthContainer">
        {this.renderRoom()}{' '}
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
