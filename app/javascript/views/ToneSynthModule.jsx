import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import ToneMelodySynth from "../module_components/ToneMelodySynth";

export default class ToneSynthModule extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { instruments, handlePropertyValueChange } = this.props;
    const instrumentElements = [];

    instruments.forEach((instrument, i) => {
      const { id, name, type, node, settings } = instrument;
      let instrumentElement;

      switch (type) {
        case "ToneSynth":
          instrumentElement = (
            <ToneMelodySynth
              id={id}
              name={name}
              node={node}
              settings={settings}
              handlePropertyValueChange={handlePropertyValueChange}
              handlePlaySequence={this.props.handlePlaySequence}
              handlePlayNote={this.props.handlePlayNote}
              key={i}
            />
          );

          break;
      }

      instrumentElements.push(instrumentElement);
    });

    return <div className="SynthRoom">{instrumentElements}</div>;
  }
}

ToneSynthModule.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired,
};
