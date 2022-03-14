import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import Keyboard from "../module_components/Keyboard";
import Button from "../control_components/Button";

export default class KeyboardModule extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Keyboard
        instruments={this.props.instruments}
        handleInitInstruments={this.props.handleInitInstruments}
        handleCheckState={this.props.handleCheckState}
        handlePlayNote={this.props.handlePlayNote}
        renderNoteButtons={this.props.renderNoteButtons}
      />
    );
  }
}

KeyboardModule.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired,
  handleInitInstruments: PropTypes.func.isRequired,
  handlePlayNote: PropTypes.func.isRequired,
};
