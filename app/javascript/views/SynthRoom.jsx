import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import ToneSynth from "../module_components/ToneSynth";
import ChorusEffect from "../module_components/ChorusEffect";
import Channel from "../module_components/Channel";

export default class SynthRoom extends PureComponent {
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
            <ToneSynth
              id={id}
              name={name}
              node={node}
              settings={settings}
              handlePropertyValueChange={handlePropertyValueChange}
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

SynthRoom.propTypes = {
  instruments: PropTypes.array.isRequired,
};
