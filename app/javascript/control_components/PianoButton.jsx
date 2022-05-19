import classnames from 'classnames'
import React from 'react'

export default class PianoButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isPlaying: false
    }
  }

  handleDown = () => {
    this.props.handleDown()

    this.setState({
      isPlaying: true
    })
  }

  handleUp = () => {
    this.props.handleUp()

    this.setState({
      isPlaying: false
    })
  }

  handleKeyDown = (element) => {
    const { text } = this.props

    element.preventDefault()

    switch (element.keyCode) {
      case 65:
        if (text === 'C') {
          console.log('===')
          this.setState({
            isPlaying: true
          })
        }
        break
      case 87:
        if (text === 'C#') {
          this.setState({
            isPlaying: true
          })
        }
        break
      case 83:
        if (text === 'D') {
          this.setState({
            isPlaying: true
          })
        }
        break
      case 69:
        if (text === 'D#') {
          this.setState({
            isPlaying: true
          })
        }
        break
      case 68:
        if (text === 'E') {
          this.setState({
            isPlaying: true
          })
        }
        break
      case 70:
        if (text === 'F') {
          this.setState({
            isPlaying: true
          })
        }
        break
      case 84:
        if (text === 'F#') {
          this.setState({
            isPlaying: true
          })
        }
        break
      case 71:
        if (text === 'G') {
          this.setState({
            isPlaying: true
          })
        }
        break
      case 89:
        if (text === 'G#') {
          this.setState({
            isPlaying: true
          })
        }
        break
      case 72:
        if (text === 'A') {
          this.setState({
            isPlaying: true
          })
        }
        break
      case 85:
        if (text === 'A#') {
          this.setState({
            isPlaying: true
          })
        }
        break
      case 74:
        if (text === 'B') {
          this.setState({
            isPlaying: true
          })
        }
        break
    }
  }

  handleKeyUp = (element) => {
    const { text } = this.props
    element.preventDefault()

    switch (element.keyCode) {
      case 65:
        if (text === 'C') {
          this.setState({
            isPlaying: false
          })
        }
        break
      case 87:
        if (text === 'C#') {
          this.setState({
            isPlaying: false
          })
        }
        break
      case 83:
        if (text === 'D') {
          this.setState({
            isPlaying: false
          })
        }
        break
      case 69:
        if (text === 'D#') {
          this.setState({
            isPlaying: false
          })
        }
        break
      case 68:
        if (text === 'E') {
          this.setState({
            isPlaying: false
          })
        }
        break
      case 70:
        if (text === 'F') {
          this.setState({
            isPlaying: false
          })
        }
        break
      case 84:
        if (text === 'F#') {
          this.setState({
            isPlaying: false
          })
        }
        break
      case 71:
        if (text === 'G') {
          this.setState({
            isPlaying: false
          })
        }
        break
      case 89:
        if (text === 'G#') {
          this.setState({
            isPlaying: false
          })
        }
        break
      case 72:
        if (text === 'A') {
          this.setState({
            isPlaying: false
          })
        }
        break
      case 85:
        if (text === 'A#') {
          this.setState({
            isPlaying: false
          })
        }
        break
      case 74:
        if (text === 'B') {
          this.setState({
            isPlaying: false
          })
        }
        break
    }
  }

  render() {
    let { classes } = this.props
    let typeOfButton = ''
    let id = ''

    window.addEventListener('keydown', this.handleKeyDown, false)
    window.addEventListener('keyup', this.handleKeyUp, false)

    switch (this.props.text) {
      case 'C':
      case 'D':
      case 'E':
      case 'F':
      case 'G':
      case 'A':
      case 'B':
        typeOfButton = 'White'
        break

      case 'C#':
      case 'D#':
      case 'F#':
      case 'G#':
      case 'A#':
        typeOfButton = 'Black'
        break
    }

    if (typeOfButton === 'Black') {
      id = 'BlackPianoKey' + this.props.buttonId
    } else if (typeOfButton === 'White') {
      id = 'WhitePianoKey' + this.props.buttonId
    }

    const className = classnames({
      PianoKey: true,
      on: this.state.isPlaying
    })

    return (
      <div
        id={id}
        className={className}
        onMouseDown={this.handleDown}
        onMouseUp={this.handleUp}
      >
        <div>{this.props.text}</div>
      </div>
    )
  }
}
