import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import ToneMelodyEffectSynth from "../module_components/ToneMelodyEffectSynth";
import Channel from "../module_components/Channel";

export default class MelodySynthEffectModule extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { instruments, handlePropertyValueChange } = this.props;
    const instrumentElements = [];

    instruments.forEach((instrument, i) => {
      const instrumentModuleElements = [];

      instrument.forEach((instrumentModule, i) => {
        const { id, name, type, node, settings } = instrumentModule;

        const components = {
          ToneMelodyEffectSynth: ToneMelodyEffectSynth,
          Channel: Channel,
        };

        const ComponentType = components[type];

        instrumentModuleElements.push(
          <ComponentType
            id={id}
            name={name}
            node={node}
            settings={settings}
            handlePropertyValueChange={handlePropertyValueChange}
            key={i}
          />
        );
      });

      instrumentElements.push(
        <div className="Row" key={i}>
          {instrumentModuleElements}
        </div>
      );
    });

    return <div className="SynthRoom">{instrumentElements}</div>;
  }
}

MelodySynthEffectModule.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired,
};
