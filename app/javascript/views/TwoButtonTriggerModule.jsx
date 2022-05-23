import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import TwoButtonTrigger from '../module_components/TwoButtonTrigger'

export default class TwoButtonTriggerModule extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TwoButtonTrigger
        togglePlay={this.props.togglePlay}
        handlePlayNote={this.props.handlePlayNote}
      />
    )
  }
}

TwoButtonTriggerModule.propTypes = {
  handlePlayNote: PropTypes.func.isRequired
}
