import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import SamplerExampleButtons from '../module_components/SamplerExampleButtons'

export default class SamplerExampleButtonsModule extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SamplerExampleButtons
        togglePlay={this.props.togglePlay}
        handlePlayNote={this.props.handlePlayNote}
      />
    )
  }
}

SamplerExampleButtonsModule.propTypes = {
  handlePlayNote: PropTypes.func.isRequired
}
