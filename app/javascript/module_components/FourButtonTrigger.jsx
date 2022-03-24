import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import GreenButton from '../control_components/GreenButton'
import CodeModule from './CodeModule'

export default class FourButtonTrigger extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="ButtonContainer">
          <div className="TopButtonContainer">
            <GreenButton
              text={'4n = quarter note'}
              handleClick={() => {
                this.props.handlePlayNote('C4', '4n')
              }}
            />
            <GreenButton
              text={'8t = eighth note triplet'}
              handleClick={() => {
                this.props.handlePlayNote('C4', '8t')
              }}
            />
          </div>
          <div className="LowButtonContainer">
            <GreenButton
              text={'2m = two measures'}
              handleClick={() => {
                this.props.handlePlayNote('C4', '2m')
              }}
            />
            <GreenButton
              text={'8n. = dotted-eighth note'}
              handleClick={() => {
                this.props.handlePlayNote('C4', '8n.')
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

FourButtonTrigger.propTypes = {
  handlePlayNote: PropTypes.func.isRequired
}
