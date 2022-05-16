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
        <div className="heading1" onClick={() => handleClick('heading1')}>
          Heading 1
        </div>
        <div className="heading2" onClick={() => handleClick('heading2')}>
          Heading 2
        </div>
        <div className="heading3" onClick={() => handleClick('heading3')}>
          Heading 3
        </div>
        <div className="paragraph" onClick={() => handleClick('paragraph')}>
          Paragraph
        </div>
        <div
          className="interactiveModule"
          onClick={() => handleClick('module')}
        >
          Interactive module
        </div>
      </div>
    )
  }
}
