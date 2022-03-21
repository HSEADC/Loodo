import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import TrigerCode from '../module_components/TrigerCode'

export default class TrigerCodeModule extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TrigerCode
        togglePlay={this.props.togglePlay}
        handlePlayNote={this.props.handlePlayNote}
      />
    )
  }
}

TrigerCodeModule.propTypes = {
  handlePlayNote: PropTypes.func.isRequired
}
