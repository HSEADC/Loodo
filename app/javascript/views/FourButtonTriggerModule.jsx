import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import FourButtonTrigger from '../module_components/FourButtonTrigger'

export default class FourButtonTriggerModule extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <FourButtonTrigger
        togglePlay={this.props.togglePlay}
        handlePlayNote={this.props.handlePlayNote}
      />
    )
  }
}

FourButtonTriggerModule.propTypes = {
  handlePlayNote: PropTypes.func.isRequired
}
