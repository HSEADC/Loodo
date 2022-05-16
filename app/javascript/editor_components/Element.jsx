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
    const { isNew } = this.props

    if (isNew) {
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
    const text = this.field.current.value
    handleInput(id, text)
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
          onInput={this.handleInput}
        >
          {text}
        </div>
      </div>
    )
  }
}
