import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import ToneSynth from '../module_components/ToneSynth'
import Button from '../control_components/Button'

export default class Keyboard extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainContainer">
        <div>
          <div class="moduleHeaderText">Клавиатура</div>
          <div className="keyboardContainer">
            <div className="whiteContainer">
              {this.props.renderNoteButtons('White')}
            </div>
            <div className="blackContainer">
              {this.props.renderNoteButtons('Black')}
            </div>
          </div>
        </div>

        <div className="Arrow"></div>
        <div className="oscilatorContainer">Осцилятор</div>
      </div>
    )
  }
}
