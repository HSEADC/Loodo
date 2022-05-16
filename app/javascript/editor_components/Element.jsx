import classnames from 'classnames'
import React, { PureComponent } from 'react'

export default class Element extends PureComponent {
  constructor(props) {
    super(props)
    this.field = React.createRef()

    this.state = {
      editing: false
    }
  }

  componentDidMount() {
    const { isNew, isEditing } = this.props

    if (isNew) {
      const field = this.field.current
      field.focus()
    }
  }

  componentDidUpdate() {
    const { isEditing } = this.props

    if (isEditing) {
      console.log('update on edit')
      const field = this.field.current
      field.focus()
    }
  }

  handleClick = () => {
    const { editing } = this.state

    console.log(editing)

    this.setState({
      editing: !editing
    })
  }

  handleInput = () => {
    const { id, handleInput } = this.props
    const text = this.field.current.textContent

    console.log(
      'Input',
      this.field.current,
      this.field.current.textContent,
      text
    )

    handleInput(id, text)
  }

  // handleChange = () => {
  // console.log('Change')
  // }

  handleFocus = () => {
    const { id, handleFocus } = this.props
    console.log('Focus', id)
    handleFocus(id)
  }

  handleBlur = () => {
    const { id, handleBlur } = this.props
    console.log('Blur', id)
    handleBlur(id)
  }

  render() {
    const { type, text } = this.props
    const { editing } = this.state

    const classes = classnames({
      Element: true,
      [`${type}`]: true,
      Editing: editing
    })

    return (
      <div className={classes}>
        <div
          className={'Input'}
          ref={this.field}
          contentEditable={true}
          suppressContentEditableWarning={true}
          onInput={this.handleInput}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        >
          {text}
        </div>
      </div>
    )
  }
}
