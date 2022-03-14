import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../control_components/Slider'

export default class FeedbackDelayEffect extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    const { wet, delayTime, maxDelay } = settings

    node.wet.value = wet
    node.delayTime.value = delayTime
    node.maxDelay = maxDelay
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings } = this.props
    const { wet, delayTime, maxDelay } = settings

    this.updateNodeParams()

    return (
      <div className="FeedbackDelayEffect">
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
          max={0.8}
          step={0.01}
          value={delayTime}
          handleChange={this.handlePropertyValueChange}
        />

        <Slider
          name="Max Delay"
          property={['maxDelay']}
          min={0}
          max={0.8}
          step={0.01}
          value={maxDelay}
          handleChange={this.handlePropertyValueChange}
        />
      </div>
    )
  }
}

FeedbackDelayEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
