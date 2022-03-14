import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import ToneSynth from "../module_components/ToneSynth";
import Button from "../control_components/Button";

export default class Keyboard extends PureComponent {
  constructor(props) {
    super(props);
  }

  thiggerAttackRelease = () => {
    const {
      synth,
      steps,
      currentPattern,
      patterns,
      currentQuarter,
    } = this.props;

    const currentPatternSteps = patterns[currentPattern];

    currentPatternSteps.forEach((patternStep, i) => {
      if (patternStep.step == currentQuarter) {
        synth.webaudio.triggerAttackRelease(
          patternStep.note + patternStep.octave,
          "4n"
        );
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          <div className="keyboardContainer">
            {this.props.renderNoteButtons()}
          </div>
        </div>

        <div>стрелка</div>
        <div className="oscilatorContainer">Осцилятор</div>
      </div>
    );
  }
}

Keyboard.propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string.isRequired,
  // node: PropTypes.object.isRequired,
  // settings: PropTypes.object.isRequired,
  // handlePropertyValueChange: PropTypes.func.isRequired,
  instruments: PropTypes.array.isRequired,
  handleInitInstruments: PropTypes.func.isRequired,
  handlePlayNote: PropTypes.func.isRequired,
};
