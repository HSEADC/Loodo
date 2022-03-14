import * as Tone from "tone";
import React, { PureComponent } from "react";
import Button from "../control_components/Button";
// import { ReactComponent as PlayButton } from "../../assets/images/play_button.svg";

import WelcomeScreen from "../views/WelcomeScreen";
import ToneSynthModule from "../views/ToneSynthModule";

export default class TrigerContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      webAudioStarted: false,
      instruments: [],
    };
  }

  startWebAudio = async () => {
    await Tone.start();
    this.initInstruments();
    console.log("/// Instruments have been initialized ///");

    this.setState({
      webAudioStarted: true,
    });
  };

  generateUniqId = () => {
    return Math.floor(Math.random() * Date.now());
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

    // const melodySynthNode2 = new Tone.Synth(
    //   melodySynthSettings
    // ).toDestination();

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
      // {
      //   id: this.generateUniqId(),
      //   name: "Melody Synth",
      //   type: "ToneSynth",
      //   node: melodySynthNode2,
      //   settings: melodySynthSettings,
      // },
    ];

    // console.log(instruments);

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
    //
    // Tone.Transport.start();

    this.setState({
      instruments,
    });
  };

  checkState = () => {
    console.log(this.state);
  };

  renderWelcomeScreen = () => {
    return <WelcomeScreen handleStartWebAudio={this.startWebAudio} />;
  };

  playNote = (synth, note, dur) => {
    console.log(synth);
    console.log(note);
    console.log(dur);
    synth.triggerAttackRelease(note, dur);
  };

  playSequence = (isPressed) => {
    if (isPressed) {
      Tone.Transport.start();
    } else {
      Tone.Transport.stop();
    }
  };

  renderRoom = () => {
    const { instruments } = this.state;

    return (
      <ToneSynthModule
        instruments={instruments}
        handlePropertyValueChange={this.handlePropertyValueChange}
        handleCheckState={this.checkState}
        handlePlaySequence={this.playSequence}
        // handleInitInstruments={this.initInstruments}
        handlePlayNote={this.playNote}
      />
    );
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
