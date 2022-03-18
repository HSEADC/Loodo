import classnames from 'classnames'
import React, { PureComponent } from 'react'

export default class ToggleButton extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, on, handleClick } = this.props

    const classes = classnames({
      ToggleButton: true,
      on: on
    })

    // className={classes}

    return (
      <div className={classes} onClick={handleClick}>
        <span>{text}</span>
      </div>
    )
  }
}
