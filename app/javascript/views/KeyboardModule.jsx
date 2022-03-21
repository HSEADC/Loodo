import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import Keyboard from '../module_components/Keyboard'
import Button from '../control_components/Button'

export default class KeyboardModule extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return <Keyboard renderNoteButtons={this.props.renderNoteButtons} />
  }
}

KeyboardModule.propTypes = {}
