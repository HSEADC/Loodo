import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import ToneSynth from "../module_components/ToneSynth";
import Button from "../control_components/Button";

export default class Triger extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="trigerContainer">
          <div className="trigerHeaderContainer">
            <Button
              className="trigerButton"
              text="asd"
              handleClick={() => {
                this.props.handleInitInstruments();
                // console.log(this.props.instruments);
                this.props.handleCheckState();
                this.props.handlePlayNote(
                  this.props.instruments[0].node,
                  "C4",
                  "8n"
                );
              }}
            />
            <div>Триггер</div>
            <div></div>
          </div>
          <div className="trigerBodyContainer">
            <div>
              <div>Нота:</div>
              <div>нота</div>
            </div>
            <div>
              <div>Длитиельность:</div>
              <div>длительность</div>
            </div>
          </div>
        </div>

        <div>стрелка</div>
        <div className="oscilatorContainer">Осцилятор</div>
      </div>
    );
  }
}

Triger.propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string.isRequired,
  // node: PropTypes.object.isRequired,
  // settings: PropTypes.object.isRequired,
  // handlePropertyValueChange: PropTypes.func.isRequired,
  instruments: PropTypes.array.isRequired,
  handleInitInstruments: PropTypes.func.isRequired,
  handlePlayNote: PropTypes.func.isRequired,
};
