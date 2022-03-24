import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import GreenButton from '../control_components/GreenButton'
import CodeModule from './CodeModule'

export default class ThreeButtonTrigger extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="ButtonContainer">
          <GreenButton
            text={'1 Секунда'}
            handleClick={() => {
              this.props.handlePlayNote('C4', '1')
            }}
          />
          <GreenButton
            text={'2 Секунды'}
            handleClick={() => {
              this.props.handlePlayNote('C4', '2')
            }}
          />
          <GreenButton
            text={'3'}
            handleClick={() => {
              this.props.handlePlayNote('C4', '1')
            }}
          />
        </div>
      </div>
    )
  }
}

ThreeButtonTrigger.propTypes = {
  handlePlayNote: PropTypes.func.isRequired
}
