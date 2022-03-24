import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class GreenButton extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, handleClick } = this.props

    return (
      <div className="GreenButton" onClick={handleClick}>
        {text}
      </div>
    )
  }
}

GreenButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
