import * as Tone from "tone";
import React, { PureComponent } from "react";
import Button from "../control_components/Button";
import PianoButton from "../control_components/PianoButton";
// import { ReactComponent as PlayButton } from "../../assets/images/play_button.svg";

import WelcomeScreen from "../views/WelcomeScreen";
import KeyboardModule from "../views/KeyboardModule";

export default class KeyboardContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      webAudioStarted: false,
      instruments: [],
      keyboards: [],
    };
  }

  generateUniqId = () => {
    return Math.floor(Math.random() * Date.now());
  };

  checkState = () => {
    console.log(this.state);
  };

  playNote = (synth, note, dur) => {
    console.log(synth);
    console.log(note);
    console.log(dur);
    synth.triggerAttackRelease(note, dur);
  };

  mergeNote = (id) => {
    const { notes, octave } = this.state.keyboards[0];
    let note = "";
    if (id <= 11) {
      note = notes[id].note + `${octave}`;
    } else if (id >= 12) {
      note = notes[id].note + `${octave + 1}`;
    }
    return note;
  };

  startPlayingNote = (id) => {
    const { notes } = this.state.keyboards[0];
    this.state.instruments[0].node.triggerAttack(this.mergeNote(id));
    notes[id].isPlaying = true;
    notes[id].classList.push("on");

    // console.log(id);
    // console.log(notes[id].classList[0], notes[id].classList[1]);
    // console.log(notes[id].classList);
    // console.log(notes[id].classList.length);

    this.setState({
      notes,
    });
  };

  stopPlayingNote = (id) => {
    const { notes } = this.state.keyboards[0];

    this.state.instruments[0].node.triggerRelease();
    notes[id].isPlaying = false;
    notes[id].classList.pop();

    // console.log(id);
    // console.log(notes[id].classList[0]);

    this.setState({
      notes,
    });
  };

  handlePropertyValueChange = (id, property, value) => {
    // Звук лагает при изменении параметров
    // const { instruments } = this.state
    //
    // instruments.forEach((instrument, i) => {
    //   if (instrument.id === id) {
    //     const propertyLevel1 = property[0]
    //     instrument.settings[propertyLevel1] = value
    //   }
    //
    //   instruments.push(instrument)
    // })

    // Иммутабельный способ, звук не лагает
    const instruments = [];

    this.state.instruments.forEach((instrument, i) => {
      const newInstrument = Object.assign({}, instrument);

      if (instrument.id === id) {
        if (property.length === 1) {
          const propertyName = property[0];
          newInstrument.settings[propertyName] = value;
        } else if (property.length === 2) {
          const scopeName = property[0];
          const propertyName = property[1];
          newInstrument.settings[scopeName][propertyName] = value;
        }
      }

      instruments.push(newInstrument);
    });

    this.setState({
      instruments,
    });
  };

  // handleFactoryDown = (id) => {
  //   const { notes } = this.state.keyboards[0];
  //   return (event) => {
  //     if (event.key == notes[id].key) {
  //       this.handleKeyDown(id);
  //     }
  //   };
  // };
  //
  // handleFactoryUp = (id) => {
  //   const { notes } = this.state.keyboards[0];
  //   return (event) => {
  //     if (event.key == notes[id].key) {
  //       this.handleKeyUp(id);
  //     }
  //   };
  // };
  //
  // handleKeyDown = (id) => {
  //   let { notes, octave } = this.state.keyboards[0];
  //
  //   if (!notes[id].isPlaying) {
  //     notes[id].isPlaying = true;
  //     notes[id].classList.push("on");
  //
  //     synth.triggerAttack(this.mergeNote(id));
  //   }
  //
  //   this.setState({
  //     notes,
  //   });
  // };
  //
  // handleKeyUp = (id) => {
  //   const { notes, octave } = this.state.keyboards[0];
  //
  //   synth.triggerRelease(this.mergeNote(id));
  //
  //   notes[id].isPlaying = false;
  //   notes[id].classList.pop();
  //
  //   this.setState({
  //     notes,
  //   });
  // };

  renderNoteButtons = () => {
    const notes = this.state.keyboards[0].notes;

    console.log(this.state);

    let noteButtons = [];
    notes.forEach((note, i) => {
      noteButtons.push(
        <PianoButton
          text={note.note}
          handleDown={() => this.startPlayingNote(i)}
          handleUp={() => this.stopPlayingNote(i)}
          // keyDown={this.handleFactoryDown(i)}
          // keyUp={this.handleFactoryUp(i)}
          classes={note.classList}
          key={i}
          buttonId={i}
        />
      );
    });

    return noteButtons;
  };

  renderRoom = () => {
    const { instruments } = this.state;

    return (
      <KeyboardModule
        instruments={instruments}
        handlePropertyValueChange={this.handlePropertyValueChange}
        handleCheckState={this.checkState}
        handleInitInstruments={this.initInstruments}
        handlePlayNote={this.playNote}
        renderNoteButtons={this.renderNoteButtons}
      />
    );
  };

  renderWelcomeScreen = () => {
    return <WelcomeScreen handleStartWebAudio={this.initWebAudio} />;
  };

  initWebAudio = async () => {
    await Tone.start();

    this.initInstruments();
    this.initKeyboard();

    this.checkState();

    this.setState({
      webAudioStarted: true,
    });
  };

  initInstruments = () => {
    const melodySynthSettings = {
      volume: 0.8,
      detune: 0,
      portamento: 0.05,
      envelope: {
        attack: 0.05,
        attackCurve: "exponential",
        decay: 0.2,
        decayCurve: "exponential",
        sustain: 0.2,
        release: 1.5,
        releaseCurve: "exponential",
      },
      oscillator: {
        type: "amtriangle",
        modulationType: "sine",
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5,
      },
    };

    const melodySynthNode1 = new Tone.Synth(
      melodySynthSettings
    ).toDestination();
    const melodySynthNode2 = new Tone.Synth(
      melodySynthSettings
    ).toDestination();

    // melodySynthNode.triggerAttackRelease("C4", "8n");

    let a = 1;

    const instruments = [
      {
        id: this.generateUniqId(),
        name: "Melody Synth",
        type: "ToneSynth",
        node: melodySynthNode1,
        settings: melodySynthSettings,
      },
      {
        id: this.generateUniqId(),
        name: "Melody Synth",
        type: "ToneSynth",
        node: melodySynthNode2,
        settings: melodySynthSettings,
      },
    ];

    // console.log(instruments);

    // prettier-ignore
    // const seq = new Tone.Sequence(
    //   (time, note) => {
    //     melodySynthNode.triggerAttackRelease(note, 0.8, time)
    //   },
    //   [
    //     'C4', 'E4', 'G4', 'C4', 'E4', 'G4', 'C4', 'E4', 'G4', 'C4', 'E4', 'G4',
    //     'E4', 'G4', 'B3', 'E4', 'G4', 'B3', 'E4', 'G4', 'B3', 'E4', 'G4', 'B3'
    //   ]
    // ).start(0)
    //
    // Tone.Transport.start();

    this.setState({
      instruments
    });
  };

  initKeyboard = () => {
    let { keyboards } = this.state;

    let notes = [
      {
        note: "C",
        key: "a",
        isPlaying: false,
        classList: ["PianoWhiteKey"],
      },
      {
        note: "C#",
        key: "w",
        isPlaying: false,
        classList: ["PianoBlackKey"],
      },
      {
        note: "D",
        key: "s",
        isPlaying: false,
        classList: ["PianoWhiteKey"],
      },
      {
        note: "D#",
        key: "e",
        isPlaying: false,
        classList: ["PianoBlackKey"],
      },
      {
        note: "E",
        key: "d",
        isPlaying: false,
        classList: ["PianoWhiteKey"],
      },
      {
        note: "F",
        key: "f",
        isPlaying: false,
        classList: ["PianoWhiteKey"],
      },
      {
        note: "F#",
        key: "t",
        isPlaying: false,
        classList: ["PianoBlackKey"],
      },
      {
        note: "G",
        key: "g",
        isPlaying: false,
        classList: ["PianoWhiteKey"],
      },
      {
        note: "G#",
        key: "y",
        isPlaying: false,
        classList: ["PianoBlackKey"],
      },
      {
        note: "A",
        key: "h",
        isPlaying: false,
        classList: ["PianoWhiteKey"],
      },
      {
        note: "A#",
        key: "u",
        isPlaying: false,
        classList: ["PianoBlackKey"],
      },
      {
        note: "B",
        key: "j",
        isPlaying: false,
        classList: ["PianoWhiteKey"],
      },
    ];

    let keyboard = {
      id: this.generateUniqId(),
      octave: 4,
      isPlaying: false,
      notes,
    };

    keyboards.push(keyboard);

    this.setState({
      keyboards,
    });

    console.log(keyboards);
  };

  render() {
    const { webAudioStarted } = this.state;

    return (
      <div className="SynthContainer">
        {webAudioStarted === true
          ? this.renderRoom()
          : this.renderWelcomeScreen()}
      </div>
    );
  }
}
