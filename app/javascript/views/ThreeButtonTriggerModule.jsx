import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import ThreeButtonTrigger from '../module_components/ThreeButtonTrigger'

export default class TrigerModule extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ThreeButtonTrigger
        togglePlay={this.props.togglePlay}
        handlePlayNote={this.props.handlePlayNote}
      />
    )
  }
}

TrigerModule.propTypes = {
  handlePlayNote: PropTypes.func.isRequired
}
