import classnames from 'classnames'
import React, { PureComponent } from 'react'

export default class EditableElement extends PureComponent {
  constructor(props) {
    super(props)
    this.field = React.createRef()
  }

  componentDidMount() {
    const { text, isNew } = this.props
    const field = this.field.current
    field.innerText = text

    if (isNew) {
      field.focus()
    }
  }

  handleFocus = () => {
    const { id, handleFocus } = this.props
    handleFocus(id)
  }

  handleBlur = () => {
    const { id, handleBlur } = this.props
    const field = this.field.current
    handleBlur(id, field.textContent)
  }

  render() {
    const { type, text, isEditing } = this.props

    const classes = classnames({
      EditableElement: true,
      [`${type}`]: true,
      editing: isEditing
    })

    return (
      <div className={classes}>
        <div
          className={'Input'}
          ref={this.field}
          contentEditable={true}
          suppressContentEditableWarning={true}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    )
  }
}
