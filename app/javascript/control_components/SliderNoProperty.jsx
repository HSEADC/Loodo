import React, { PureComponent } from 'react'

export default class SliderNoProperty extends PureComponent {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  handleChange = () => {
    const { handleChange } = this.props
    const value = this.input.current.valueAsNumber
    handleChange(value)
  }

  render() {
    const { name, min, max, step, value } = this.props

    return (
      <div className="Slider">
        <h3>{name}</h3>
        <div className="sliderInput">
          <span>0</span>
          <input
            ref={this.input}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onInput={this.handleChange}
          />
          <span>100</span>
        </div>
      </div>
    )
  }
}
