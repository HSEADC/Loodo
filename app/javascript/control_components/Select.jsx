import classnames from 'classnames'
import React, { PureComponent } from 'react'
import ToggleButton from './ToggleButton2'

export default class Select extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      optionsList: [],
      isOpened: false
    }
  }

  selectOptions = () => {
    const { options } = this.props
    const { optionsList, isOpened } = this.state

    let selectOptions = []

    options.forEach((option, i) => {
      selectOptions.push(
        <ToggleButton
          handleClick={() => {
            this.props.addEffect(option)
          }}
          text={option}
          key={i}
        />
      )
    })

    if (isOpened == false) {
      this.setState({
        optionsList: selectOptions,
        isOpened: !isOpened
      })
    } else {
      this.setState({
        optionsList: [],
        isOpened: !isOpened
      })
    }
  }

  render() {
    const { text } = this.props
    const { optionsList, isOpened } = this.state

    const classes = classnames({
      select: true,
      on: isOpened
    })

    return (
      <div className={classes}>
        <div onClick={() => this.selectOptions()} className="selectCurrent">
          {text}
        </div>
        <div className="openedList">{optionsList}</div>
      </div>
    )
  }
}
