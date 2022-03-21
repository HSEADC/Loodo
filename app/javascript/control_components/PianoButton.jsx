import React from 'react'

export default class PianoButton extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // window.addEventListener('ommouseup', this.props.handleUp)
    // window.addEventListener('keydown', this.props.keyDown)
    // window.addEventListener('keyup', this.props.keyUp)
  }

  render() {
    let { typeOfButton } = this.props
    let id = ''

    if (typeOfButton === 'Black') {
      id = 'BlackPianoKey' + this.props.buttonId
    } else if (typeOfButton === 'White') {
      id = 'WhatePianoKey' + this.props.buttonId
    }

    return (
      <div
        id={id}
        className={this.props.classes}
        onMouseDown={this.props.handleDown}
        onMouseUp={this.props.handleUp}
      ></div>
    )
  }
}
