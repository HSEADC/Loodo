import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import Button from "../control_components/Button";

export default class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleStartWebAudio } = this.props;

    return (
      <div className="WelcomeScreen">
        <Button text="Start" handleClick={handleStartWebAudio} />
      </div>
    );
  }
}

WelcomeScreen.propTypes = {
  handleStartWebAudio: PropTypes.func.isRequired,
};
