import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../control_components/Slider'

export default class PingPongDelayEffect extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    const { wet, delayTime, maxDelayTime } = settings

    node.wet.value = wet
    node.delayTime.value = delayTime
    node.maxDelayTime = maxDelayTime
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings } = this.props
    const { wet, delayTime, maxDelayTime } = settings

    this.updateNodeParams()

    return (
      <div className="PingPongDelayEffect">
        <h1>{name}</h1>

        <Slider
          name="Wet"
          property={['wet']}
          min={0}
          max={1}
          step={0.01}
          value={wet}
          handleChange={this.handlePropertyValueChange}
        />

        <Slider
          name="Delay Time"
          property={['delayTime']}
          min={0}
          max={1}
          step={0.01}
          value={delayTime}
          handleChange={this.handlePropertyValueChange}
        />

        <Slider
          name="Max Delay Time"
          property={['maxDelayTime']}
          min={0}
          max={1}
          step={0.01}
          value={maxDelayTime}
          handleChange={this.handlePropertyValueChange}
        />
      </div>
    )
  }
}

PingPongDelayEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
