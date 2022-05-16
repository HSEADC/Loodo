import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../../control_components/Slider'

export default class FreeverbEffect extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    const { wet, roomSize, dampening } = settings

    node.wet.value = wet
    node.roomSize.value = roomSize
    node.dampening = dampening
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings } = this.props
    const { wet, roomSize, dampening } = settings

    this.updateNodeParams()

    return (
      <div className="FreeverbEffect">
        <h1 className="moduleHeaderText">{name}</h1>
        <div className="sliderLargeContainer">
          <Slider
            name="Wet"
            property={['wet']}
            min={0}
            max={1}
            step={0.01}
            value={wet}
            handleChange={this.handlePropertyValueChange}
          />
        </div>
        <div className="sliderLargeContainer">
          <Slider
            name="Room Size"
            property={['roomSize']}
            min={0}
            max={1}
            step={0.01}
            value={roomSize}
            handleChange={this.handlePropertyValueChange}
          />
        </div>
        <div className="sliderLargeContainer">
          <Slider
            name="Dampening"
            property={['dampening']}
            min={0}
            max={1000}
            step={1}
            value={dampening}
            handleChange={this.handlePropertyValueChange}
          />
        </div>
      </div>
    )
  }
}

FreeverbEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
