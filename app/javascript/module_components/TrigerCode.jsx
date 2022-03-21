import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import PlayButton from '../control_components/PlayButton'

export default class TrigerCode extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="trigerContainer">
          <div className="trigerHeaderContainer">
            <PlayButton
              on={this.props.togglePlay}
              handleClick={() => {
                this.props.handlePlayNote('C4', '1')
              }}
            />
            <div>Триггер</div>
            <div></div>
          </div>
          <div className="trigerBodyContainer">
            <div className="wrapper">
              <div>synth.triggerAttackRelease("C4", "2");</div>
            </div>
          </div>
        </div>

        <div className="Arrow"></div>
        <div className="oscilatorContainer">Осцилятор</div>
      </div>
    )
  }
}

TrigerCode.propTypes = {
  handlePlayNote: PropTypes.func.isRequired
}
