import PropTypes from "prop-types";
import React, { Component } from "react";

import Slider from "../control_components/Slider";
import Knob from "../control_components/Knob";
import ToggleButton from "../control_components/ToggleButton";

export default class Channel extends Component {
  constructor(props) {
    super(props);
  }

  updateNodeParams = () => {
    const { node, settings } = this.props;
    const { volume, pan, mute, solo } = settings;

    node.volume.value = volume;
    node.pan.value = pan;
    node.mute = mute;
    node.solo = solo;
  };

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props;
    handlePropertyValueChange(id, property, value);
  };

  render() {
    const { id, name, settings } = this.props;
    const { volume, pan, mute, solo } = settings;

    this.updateNodeParams();

    return (
      <div className="Channel">
        <h1>{name}</h1>

        <Slider
          name="Volume"
          property={["volume"]}
          min={-80}
          max={6}
          step={0.01}
          value={volume}
          handleChange={this.handlePropertyValueChange}
        />

        <Knob
          name="Pan"
          property={["pan"]}
          min={-1}
          max={1}
          value={pan}
          handleChange={this.handlePropertyValueChange}
        />

        <ToggleButton
          text="Mute"
          isOn={mute}
          handleClick={() => this.handlePropertyValueChange(["mute"], !mute)}
        />

        <ToggleButton
          text="Solo"
          isOn={solo}
          handleClick={() => this.handlePropertyValueChange(["solo"], !solo)}
        />
      </div>
    );
  }
}

Channel.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired,
};
