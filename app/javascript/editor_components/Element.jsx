import classnames from 'classnames'
import React, { PureComponent } from 'react'

export default class Element extends PureComponent {
  constructor(props) {
    super(props)
    this.field = React.createRef()
  }

  componentDidMount() {
    const { isNew } = this.props

    if (isNew) {
      const field = this.field.current
      field.focus()
    }
  }

  handleInput = () => {
    const { id, handleInput } = this.props
    const text = this.field.current.value
    handleInput(id, text)
  }

  render() {
    const { type, text } = this.props

    const classes = classnames({
      Element: true,
      [`${type}`]: true
    })

    return (
      <div
        className={classes}
        ref={this.field}
        contentEditable={true}
        onInput={this.handleInput}
      >
        {text}
      </div>
    )
  }
}
