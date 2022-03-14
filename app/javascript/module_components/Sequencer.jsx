import PropTypes from "prop-types";
import React, { Component } from "react";

import SequencerRow from "../control_components/SequencerRow";

export default class Sequencer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { node } = this.props;
    node.start();
  }

  updateNodeParams = () => {
    const { node, settings } = this.props;
    const { sequence } = settings;

    node.clear();

    sequence.forEach((event, i) => {
      node.add(event);
    });
  };

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props;

    property.push(value);
    property.push("velocity");

    handlePropertyValueChange(id, property, value);
  };

  renderGrid = () => {
    const { sequence, scale } = this.props.settings;

    const eights = [
      "0:0:0",
      "0:0:2",
      "0:1:0",
      "0:1:2",
      "0:2:0",
      "0:2:2",
      "0:3:0",
      "0:3:2",
      "1:0:0",
      "1:0:2",
      "1:1:0",
      "1:1:2",
      "1:2:0",
      "1:2:2",
      "1:3:0",
      "1:3:2",
    ];

    const rows = [];

    scale.forEach((note, i) => {
      rows.push(
        <SequencerRow
          name={note}
          property={[note]}
          value={sequence}
          options={eights}
          handleChange={this.handlePropertyValueChange}
          key={i}
        />
      );
    });

    return rows;
  };

  render() {
    const { name, settings } = this.props;

    this.updateNodeParams();

    return <div className="Sequencer">{this.renderGrid()}</div>;
  }
}

Sequencer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired,
};
