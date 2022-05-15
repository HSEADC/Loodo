import * as Tone from 'tone'
import React, { PureComponent } from 'react'

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
      keyboards: [],
      keys: [],
      pianoKeys: {
        keyPressed: false,
        notes: [],
        octave: '4',
        a: {
          isPlaying: false,
          note: 'A'
        },
        aUp: {
          isPlaying: false,
          note: 'A#'
        },
        b: {
          isPlaying: false,
          note: 'B'
        },
        c: {
          isPlaying: false,
          note: 'C'
        },
        cUp: {
          isPlaying: false,
          note: 'C#'
        },
        d: {
          isPlaying: false,
          note: 'D'
        },
        dUp: {
          isPlaying: false,
          note: 'D#'
        },
        e: {
          isPlaying: false,
          note: 'E'
        },
        f: {
          isPlaying: false,
          note: 'F'
        },
        fUp: {
          isPlaying: false,
          note: 'F#'
        },
        g: {
          isPlaying: false,
          note: 'G'
        },
        gUp: {
          isPlaying: false,
          note: 'G#'
        }
      }
    }
  }

  componentDidMount() {
    console.log(this.state)
  }

  // Импорт кода клавиатуры из проекта 2018 года
  noteMerge = (note) => {
    const { octave } = this.state.pianoKeys

    return note + octave
  }

  addNotesToTheArrayStateUpDate = (notesArray, note) => {
    const {
      keyPressed,
      notes,
      octave,
      a,
      aUp,
      b,
      c,
      cUp,
      d,
      dUp,
      e,
      f,
      fUp,
      g,
      gUp
    } = this.state.pianoKeys

    console.log('State updating')
    console.log(notesArray)

    if (note === c) {
      this.setState({
        pianoKeys: {
          keyPressed,
          notes: notesArray,
          octave,
          a,
          aUp,
          b,
          c: {
            isPlaying: true,
            note: 'C'
          },
          cUp,
          d,
          dUp,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === cUp) {
      this.setState({
        pianoKeys: {
          keyPressed,
          notes: notesArray,
          octave,
          a,
          aUp,
          b,
          c,
          cUp: {
            isPlaying: true,
            note: 'C#'
          },
          d,
          dUp,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === d) {
      this.setState({
        pianoKeys: {
          keyPressed,
          notes: notesArray,
          octave,
          a,
          aUp,
          b,
          c,
          cUp,
          d: {
            isPlaying: true,
            note: 'D'
          },
          dUp,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === dUp) {
      this.setState({
        pianoKeys: {
          keyPressed,
          notes: notesArray,
          octave,
          dUp: {
            isPlaying: true,
            note: 'D#'
          },
          a,
          aUp,
          b,
          c,
          cUp,
          d,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === e) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          e: {
            isPlaying: true,
            note: 'E'
          },
          a,
          aUp,
          b,
          c,
          cUp,
          d,
          dUp,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === f) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          f: {
            isPlaying: true,
            note: 'F'
          },
          a,
          aUp,
          b,
          c,
          cUp,
          d,
          dUp,
          e,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === fUp) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          fUp: {
            isPlaying: true,
            note: 'F#'
          },
          a,
          aUp,
          b,
          c,
          cUp,
          d,
          dUp,
          e,
          f,
          g,
          gUp
        }
      })
    } else if (note === g) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          g: {
            isPlaying: true,
            note: 'G'
          },
          a,
          aUp,
          b,
          c,
          cUp,
          d,
          dUp,
          e,
          f,
          fUp,
          gUp
        }
      })
    } else if (note === gUp) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          gUp: {
            isPlaying: true,
            note: 'G#'
          },
          a,
          aUp,
          b,
          c,
          cUp,
          d,
          dUp,
          e,
          f,
          fUp,
          g
        }
      })
    } else if (note === a) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          a: {
            isPlaying: true,
            note: 'A'
          },
          aUp,
          b,
          c,
          cUp,
          d,
          dUp,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === aUp) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          aUp: {
            isPlaying: true,
            note: 'A#'
          },
          a,
          b,
          c,
          cUp,
          d,
          dUp,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === b) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          b: {
            isPlaying: true,
            note: 'B'
          },
          a,
          aUp,
          c,
          cUp,
          d,
          dUp,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    }
  }

  removeNotesFromTheArrayStateUpDate = (notesArray, note) => {
    const {
      keyPressed,
      notes,
      octave,
      a,
      aUp,
      b,
      c,
      cUp,
      d,
      dUp,
      e,
      f,
      fUp,
      g,
      gUp
    } = this.state.pianoKeys

    console.log('State updating')
    console.log(notesArray)

    if (note === c) {
      this.setState({
        pianoKeys: {
          keyPressed,
          notes: notesArray,
          octave,
          a,
          aUp,
          b,
          c: {
            isPlaying: false,
            note: 'C'
          },
          cUp,
          d,
          dUp,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === cUp) {
      this.setState({
        pianoKeys: {
          keyPressed,
          notes: notesArray,
          octave,
          a,
          aUp,
          b,
          c,
          cUp: {
            isPlaying: false,
            note: 'C#'
          },
          d,
          dUp,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === d) {
      this.setState({
        pianoKeys: {
          keyPressed,
          notes: notesArray,
          octave,
          a,
          aUp,
          b,
          c,
          cUp,
          d: {
            isPlaying: false,
            note: 'D'
          },
          dUp,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === dUp) {
      this.setState({
        pianoKeys: {
          keyPressed,
          notes: notesArray,
          octave,
          dUp: {
            isPlaying: false,
            note: 'D#'
          },
          a,
          aUp,
          b,
          c,
          cUp,
          d,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === e) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          e: {
            isPlaying: false,
            note: 'E'
          },
          a,
          aUp,
          b,
          c,
          cUp,
          d,
          dUp,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === f) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          f: {
            isPlaying: false,
            note: 'F'
          },
          a,
          aUp,
          b,
          c,
          cUp,
          d,
          dUp,
          e,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === fUp) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          fUp: {
            isPlaying: false,
            note: 'F#'
          },
          a,
          aUp,
          b,
          c,
          cUp,
          d,
          dUp,
          e,
          f,
          g,
          gUp
        }
      })
    } else if (note === g) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          g: {
            isPlaying: false,
            note: 'G'
          },
          a,
          aUp,
          b,
          c,
          cUp,
          d,
          dUp,
          e,
          f,
          fUp,
          gUp
        }
      })
    } else if (note === gUp) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          gUp: {
            isPlaying: false,
            note: 'G#'
          },
          a,
          aUp,
          b,
          c,
          cUp,
          d,
          dUp,
          e,
          f,
          fUp,
          g
        }
      })
    } else if (note === a) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          a: {
            isPlaying: false,
            note: 'A'
          },
          aUp,
          b,
          c,
          cUp,
          d,
          dUp,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === aUp) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          aUp: {
            isPlaying: false,
            note: 'A#'
          },
          a,
          b,
          c,
          cUp,
          d,
          dUp,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    } else if (note === b) {
      this.setState({
        pianoKeys: {
          notes: notesArray,
          octave,
          keyPressed,
          b: {
            isPlaying: false,
            note: 'B'
          },
          a,
          aUp,
          c,
          cUp,
          d,
          dUp,
          e,
          f,
          fUp,
          g,
          gUp
        }
      })
    }
  }

  handleNotesKeyDown = (element) => {
    const synth = this.state.instruments[0].node
    const {
      notes,
      octave,
      keyPressed,
      a,
      aUp,
      b,
      c,
      cUp,
      d,
      dUp,
      e,
      f,
      fUp,
      g,
      gUp
    } = this.state.pianoKeys

    let localNotes = notes
    element.preventDefault()

    let abd = ['C2', 'D2', 'A2']

    // console.log('Key pressed')

    switch (element.keyCode) {
      case 65:
        if (c.isPlaying === false) {
          localNotes.push(this.noteMerge(c.note))
          this.addNotesToTheArrayStateUpDate(localNotes, c)
          synth.triggerAttack(this.noteMerge(c.note))
          console.log('______C pushed')
          console.log(localNotes)
          console.log(synth)
        } else if (c.isPlaying === true) {
        }

        break
      case 87:
        if (cUp.isPlaying === false) {
          localNotes.push(this.noteMerge(cUp.note))
          this.addNotesToTheArrayStateUpDate(localNotes, cUp)
          synth.triggerAttack(this.noteMerge(cUp.note))
        } else if (cUp.isPlaying === true) {
        }

        break
      case 83:
        if (d.isPlaying === false) {
          console.log(d.isPlaying)
          localNotes.push(this.noteMerge(d.note))
          this.addNotesToTheArrayStateUpDate(localNotes, d)
          synth.triggerAttack(this.noteMerge(d.note))
        } else if (d.isPlaying === true) {
        }

        break
      case 69:
        if (dUp.isPlaying === false) {
          localNotes.push(this.noteMerge(dUp.note))
          this.addNotesToTheArrayStateUpDate(localNotes, dUp)
          synth.triggerAttack(this.noteMerge(dUp.note))
        } else if (dUp.isPlaying === true) {
        }

        break
      case 68:
        if (e.isPlaying === false) {
          localNotes.push(this.noteMerge(e.note))
          this.addNotesToTheArrayStateUpDate(localNotes, e)
          synth.triggerAttack(this.noteMerge(e.note))
        } else if (e.isPlaying === true) {
        }

        break
      case 70:
        if (f.isPlaying === false) {
          localNotes.push(this.noteMerge(f.note))
          this.addNotesToTheArrayStateUpDate(localNotes, f)
          synth.triggerAttack(this.noteMerge(f.note))
        } else if (f.isPlaying === true) {
        }

        break
      case 84:
        if (fUp.isPlaying === false) {
          localNotes.push(this.noteMerge(fUp.note))
          this.addNotesToTheArrayStateUpDate(localNotes, fUp)
          synth.triggerAttack(this.noteMerge(fUp.note))
        } else if (fUp.isPlaying === true) {
        }

        break
      case 71:
        if (g.isPlaying === false) {
          localNotes.push(this.noteMerge(g.note))
          this.addNotesToTheArrayStateUpDate(localNotes, g)
          synth.triggerAttack(this.noteMerge(g.note))
        } else if (g.isPlaying === true) {
        }

        break
      case 89:
        if (gUp.isPlaying === false) {
          localNotes.push(this.noteMerge(gUp.note))
          this.addNotesToTheArrayStateUpDate(localNotes, gUp)
          synth.triggerAttack(this.noteMerge(gUp.note))
        } else if (gUp.isPlaying === true) {
        }

        break
      case 72:
        if (a.isPlaying === false) {
          localNotes.push(this.noteMerge(a.note))
          this.addNotesToTheArrayStateUpDate(localNotes, a)
          synth.triggerAttack(this.noteMerge(a.note))
        } else if (a.isPlaying === true) {
        }

        break
      case 85:
        if (aUp.isPlaying === false) {
          localNotes.push(this.noteMerge(aUp.note))
          this.addNotesToTheArrayStateUpDate(localNotes, aUp)
          synth.triggerAttack(this.noteMerge(aUp.note))
        } else if (aUp.isPlaying === true) {
        }

        break
      case 74:
        console.log('asdajsdklalksdalkjsd')
        if (b.isPlaying === false) {
          localNotes.push(this.noteMerge(b.note))
          this.addNotesToTheArrayStateUpDate(localNotes, b)
          synth.triggerAttack(this.noteMerge(b.note))
        } else if (b.isPlaying === true) {
        }

        break
    }
  }

  handleNotesKeyUp = (element) => {
    const synth = this.state.instruments[0].node
    const {
      notes,
      octave,
      keyPressed,
      a,
      aUp,
      b,
      c,
      cUp,
      d,
      dUp,
      e,
      f,
      fUp,
      g,
      gUp
    } = this.state.pianoKeys

    let localNotes = notes
    let now = Tone.now

    console.log('Key released')

    element.preventDefault()

    let abd = ['C2', 'D2', 'A2']

    switch (element.keyCode) {
      case 65:
        localNotes.splice(localNotes.indexOf(this.noteMerge(c.note)), 1)
        this.removeNotesFromTheArrayStateUpDate(localNotes, c)
        synth.triggerRelease(this.noteMerge(c.note))

        break
      case 87:
        localNotes.splice(localNotes.indexOf(this.noteMerge(cUp.note)), 1)
        this.removeNotesFromTheArrayStateUpDate(localNotes, cUp)
        synth.triggerRelease(this.noteMerge(cUp.note))

        break
      case 83:
        localNotes.splice(localNotes.indexOf(this.noteMerge(d.note)), 1)
        this.removeNotesFromTheArrayStateUpDate(localNotes, d)
        synth.triggerRelease(this.noteMerge(d.note))
        console.log('______D droped')
        console.log(synth)

        break
      case 69:
        localNotes.splice(localNotes.indexOf(this.noteMerge(dUp.note)), 1)
        this.removeNotesFromTheArrayStateUpDate(localNotes, dUp)
        synth.triggerRelease(this.noteMerge(dUp.note))

        break
      case 68:
        localNotes.splice(localNotes.indexOf(this.noteMerge(e.note)), 1)
        this.removeNotesFromTheArrayStateUpDate(localNotes, e)
        synth.triggerRelease(this.noteMerge(e.note))

        break
      case 70:
        localNotes.splice(localNotes.indexOf(this.noteMerge(f.note)), 1)
        this.removeNotesFromTheArrayStateUpDate(localNotes, f)
        synth.triggerRelease(this.noteMerge(f.note))

        break
      case 84:
        localNotes.splice(localNotes.indexOf(this.noteMerge(fUp.note)), 1)
        this.removeNotesFromTheArrayStateUpDate(localNotes, fUp)
        synth.triggerRelease(this.noteMerge(fUp.note))

        break
      case 71:
        localNotes.splice(localNotes.indexOf(this.noteMerge(g.note)), 1)
        this.removeNotesFromTheArrayStateUpDate(localNotes, g)
        synth.triggerRelease(this.noteMerge(g.note))

        break
      case 89:
        localNotes.splice(localNotes.indexOf(this.noteMerge(gUp.note)), 1)
        this.removeNotesFromTheArrayStateUpDate(localNotes, gUp)
        synth.triggerRelease(this.noteMerge(gUp.note))

        break
      case 72:
        localNotes.splice(localNotes.indexOf(this.noteMerge(a.note)), 1)
        this.removeNotesFromTheArrayStateUpDate(localNotes, a)
        synth.triggerRelease(this.noteMerge(a.note))

        break
      case 85:
        localNotes.splice(localNotes.indexOf(this.noteMerge(aUp.note)), 1)
        this.removeNotesFromTheArrayStateUpDate(localNotes, aUp)
        synth.triggerRelease(this.noteMerge(aUp.note))

        break
      case 74:
        localNotes.splice(localNotes.indexOf(this.noteMerge(b.note)), 1)
        this.removeNotesFromTheArrayStateUpDate(localNotes, b)
        synth.triggerRelease(this.noteMerge(b.note))

        break
    }
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

  startClickPlayingNote = (id, key) => {
    const { blackKeys } = this.state.keyboards[0]
    const { whiteKeys } = this.state.keyboards[0]

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

  stopClickPlayingNote = (id, key) => {
    const { blackKeys } = this.state.keyboards[0]
    const { whiteKeys } = this.state.keyboards[0]

    console.log('adlkjalksdlajsdjla')

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
            handleDown={() => this.startClickPlayingNote(i, 'Black')}
            handleUp={() => this.stopClickPlayingNote(i, 'Black')}
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
            handleDown={() => this.startClickPlayingNote(i, 'White')}
            handleUp={() => this.stopClickPlayingNote(i, 'White')}
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

    return <KeyboardModule renderNoteButtons={this.renderNoteButtons} />
  }

  renderWelcomeScreen = () => {
    return <WelcomeScreen handleStartWebAudio={this.initWebAudio} />
  }

  initWebAudio = async () => {
    await Tone.start()

    this.initInstruments()
    console.log('/// Instruments have been initialized ///')

    this.initKeyboard()
    console.log('/// Keyboard have been created ///')

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

  initKeyboard = () => {
    let { keyboards } = this.state

    let blackKeys = [
      {
        note: 'C#',
        key: 'w',
        isPlaying: this.state.pianoKeys.cUp.isPLaying,
        classList: ['PianoBlackKey']
      },
      {
        note: 'D#',
        key: 'e',
        isPlaying: this.state.pianoKeys.dUp.isPLaying,
        classList: ['PianoBlackKey']
      },
      {
        note: 'F#',
        key: 't',
        isPlaying: this.state.pianoKeys.fUp.isPLaying,
        classList: ['PianoBlackKey']
      },
      {
        note: 'G#',
        key: 'y',
        isPlaying: this.state.pianoKeys.gUp.isPLaying,
        classList: ['PianoBlackKey']
      },
      {
        note: 'A#',
        key: 'u',
        isPlaying: this.state.pianoKeys.aUp.isPLaying,
        classList: ['PianoBlackKey']
      }
    ]

    let whiteKeys = [
      {
        note: 'C',
        key: 'a',
        isPlaying: this.state.pianoKeys.c.isPLaying,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'D',
        key: 's',
        isPlaying: this.state.pianoKeys.d.isPLaying,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'E',
        key: 'd',
        isPlaying: this.state.pianoKeys.e.isPLaying,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'F',
        key: 'f',
        isPlaying: this.state.pianoKeys.f.isPLaying,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'G',
        key: 'g',
        isPlaying: this.state.pianoKeys.g.isPLaying,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'A',
        key: 'h',
        isPlaying: this.state.pianoKeys.a.isPLaying,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'B',
        key: 'j',
        isPlaying: this.state.pianoKeys.b.isPLaying,
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
      octave: this.state.pianoKeys.octave,
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

    window.addEventListener('keydown', this.handleNotesKeyDown, false)
    window.addEventListener('keyup', this.handleNotesKeyUp, false)

    return (
      <div className="SynthContainer">
        {webAudioStarted === true
          ? this.renderRoom()
          : this.renderWelcomeScreen()}
      </div>
    )
  }
}
