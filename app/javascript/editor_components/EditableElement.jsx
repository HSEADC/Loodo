import classnames from 'classnames'
import React, { PureComponent } from 'react'
import ModuleSettings from './ModuleSettings'

export default class EditableElement extends PureComponent {
  constructor(props) {
    super(props)
    this.field = React.createRef()
  }

  componentDidMount() {
    const { isNew } = this.props
    this.setInnerText()

    if (isNew) {
      this.field.current.focus()
    }
  }

  componentDidUpdate() {
    this.setInnerText()
  }

  setInnerText = () => {
    const { text } = this.props
    const field = this.field.current
    field.innerText = text
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

  handleDelete = () => {
    const { id, handleDelete } = this.props
    handleDelete(id)
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
        <ModuleSettings handleDelete={this.handleDelete} />
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
