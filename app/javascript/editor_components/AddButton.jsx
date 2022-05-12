import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class AddButton extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, handleClick } = this.props

    return (
      <div className="AddButton">
        <div onClick={() => handleClick('heading1')}>Heading 1</div>
        <div onClick={() => handleClick('heading2')}>Heading 2</div>
        <div onClick={() => handleClick('heading3')}>Heading 3</div>
        <div onClick={() => handleClick('paragraph')}>Paragraph</div>
        <div onClick={() => handleClick('module')}>Interactive module</div>
      </div>
    )
  }
}
