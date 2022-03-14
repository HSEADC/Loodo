import PropTypes from "prop-types";
import React, { Component } from "react";

import Slider from "../control_components/Slider";
import Knob from "../control_components/Knob";
import ToggleButton from "../control_components/ToggleButton";

export default class MelodySynthEffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sequenceIsPlaying: true,
    };
  }

  // Можно спользовать обновление тут, так как
  // componentDidUpdate() {
  // this.updateNodeParams()
  // }

  updateNodeParams = () => {
    const { node, settings } = this.props;
    const { volume, detune, portamento, envelope, oscillator } = settings;
    const { type, phase, harmonicity } = oscillator;

    const {
      attack,
      attackCurve,
      decay,
      decayCurve,
      sustain,
      release,
      releaseCurve,
    } = envelope;

    node.volume.value = volume;
    node.detune.value = detune;
    node.portamento = portamento;

    node.oscillator.type = type;
    node.oscillator.phase = phase;

    if (node.oscillator.harmonicity) {
      node.oscillator.harmonicity.value = harmonicity;
    }

    node.envelope.attack = attack;
    node.envelope.attackCurve = attackCurve;
    node.envelope.decay = decay;
    node.envelope.decayCurve = decayCurve;
    node.envelope.sustain = sustain;
    node.envelope.release = release;
    node.envelope.releaseCurve = releaseCurve;
  };

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props;
    handlePropertyValueChange(id, property, value);
  };

  render() {
    const { id, name, settings } = this.props;
    const { volume, detune, portamento, envelope, oscillator } = settings;

    const {
      type,
      // modulationType,
      // partialCount,
      // partials,
      phase,
      harmonicity,
    } = oscillator;

    // Type
    // The type of the oscillator. Can be any of the basic types: sine, square, triangle, sawtooth. Or prefix the basic types with "fm", "am", or "fat" to use the FMOscillator, AMOscillator or FatOscillator types. The oscillator could also be set to "pwm" or "pulse". All of the parameters of the oscillator's class are accessible when the oscillator is set to that type, but throws an error when it's not.
    // type OmniOscillatorType = "fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle" | "fatcustom" | FatTypeWithPartials | "fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle" | "fmcustom" | FMTypeWithPartials | "amsine" | "amsquare" | "amsawtooth" | "amtriangle" | "amcustom" | AMTypeWithPartials | TypeWithPartials | OscillatorType | "pulse" | "pwm"

    // Modulation Type
    // The type of the modulator oscillator. Only if the oscillator is set to "am" or "fm" types. See AMOscillator or FMOscillator

    const { attack, decay, sustain, release } = envelope;

    this.updateNodeParams();

    return (
      <div className="SynthMelodyModule">
        <div className="moduleHeaderButton">
          <div className="headerButton">
            <ToggleButton
              className="trigerButton"
              text="Start"
              handleClick={this.props.handlePlaySequence}
            />
          </div>
          <span>Мелодия</span>
        </div>
        <div>стрелка</div>

        <div className="synthModule">
          <div className="moduleHeaderText">Синтезатор</div>
        </div>
      </div>
    );
  }
}

MelodySynthEffect.propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string.isRequired,
  // node: PropTypes.object.isRequired,
  // settings: PropTypes.object.isRequired,
  // handlePropertyValueChange: PropTypes.func.isRequired,
};
