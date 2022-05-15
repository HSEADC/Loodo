import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import GreenButton from '../control_components/GreenButton'
import CodeModule from './CodeModule'

export default class SamplerExampleButtons extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="ButtonContainer">
          <div className="TopButtonContainer">
            <GreenButton
              text={'Kick'}
              handleClick={() => {
                this.props.handlePlayNote('Kick')
              }}
            />
            <GreenButton
              text={'Hi-Hat'}
              handleClick={() => {
                this.props.handlePlayNote('Hi-Hat')
              }}
            />
          </div>
          <div className="LowButtonContainer">
            <GreenButton
              text={'Snare'}
              handleClick={() => {
                this.props.handlePlayNote('Snare')
              }}
            />
            <GreenButton
              text={'Clap'}
              handleClick={() => {
                this.props.handlePlayNote('Clap')
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

SamplerExampleButtons.propTypes = {
  handlePlayNote: PropTypes.func.isRequired
}
