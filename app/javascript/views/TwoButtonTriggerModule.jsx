import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import ThreeButtonTrigger from '../module_components/ThreeButtonTrigger'

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
