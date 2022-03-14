import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import Triger from "../module_components/Triger";
import Button from "../control_components/Button";

export default class TrigerModule extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Triger
        instruments={this.props.instruments}
        handleInitInstruments={this.props.handleInitInstruments}
        handleCheckState={this.props.handleCheckState}
        handlePlayNote={this.props.handlePlayNote}
      />
    );
  }
}

TrigerModule.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired,
  handleInitInstruments: PropTypes.func.isRequired,
  handlePlayNote: PropTypes.func.isRequired,
};
