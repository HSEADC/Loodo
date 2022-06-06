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
              text={'4n = четверть'}
              handleClick={() => {
                this.props.handlePlayNote('C4', '4n')
              }}
            />
            <GreenButton
              text={'8t = Восьмая'}
              handleClick={() => {
                this.props.handlePlayNote('C4', '8t')
              }}
            />
          </div>
          <div className="LowButtonContainer">
            <GreenButton
              text={'2m = Две целых'}
              handleClick={() => {
                this.props.handlePlayNote('C4', '2m')
              }}
            />
            <GreenButton
              text={'8n. = Пунктирная восьмая нота'}
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
