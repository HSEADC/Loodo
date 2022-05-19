import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import GreenButton from '../control_components/GreenButton'
import CodeModule from './CodeModule'

export default class TwoButtonTrigger extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="ButtonContainer">
          <GreenButton
            text={'1 секунда'}
            handleClick={() => {
              this.props.handlePlayNote('C4', '1')
            }}
          />
          <GreenButton
            text={'1 hz'}
            handleClick={() => {
              this.props.handlePlayNote('C4', '1hz')
            }}
          />
        </div>
      </div>
    )
  }
}

TwoButtonTrigger.propTypes = {
  handlePlayNote: PropTypes.func.isRequired
}
