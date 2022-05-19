import classnames from 'classnames'
import React, { PureComponent } from 'react'

export default class Element extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { type, text } = this.props

    const classes = classnames({
      Element: true,
      [`${type}`]: true
    })

    return <div className={classes}>{text}</div>
  }
}
