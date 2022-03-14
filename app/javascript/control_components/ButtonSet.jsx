import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import ToggleButton from './ToggleButton'

export default class ButtonSet extends PureComponent {
  constructor(props) {
    super(props)
  }

  handleChange = (value) => {
    const { property, handleChange } = this.props
    handleChange(property, value)
  }

  render() {
    const { name, options, value } = this.props
    const buttonElements = []

    options.forEach((option, i) => {
      buttonElements.push(
        <ToggleButton
          text={option}
          isOn={option === value}
          handleClick={() => this.handleChange(option)}
          key={i}
        />
      )
    })

    return (
      <div className="ButtonSet">
        <h3>{name}</h3>
        <div>{buttonElements}</div>
      </div>
    )
  }
}

ButtonSet.propTypes = {
  name: PropTypes.string.isRequired,
  property: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
}
