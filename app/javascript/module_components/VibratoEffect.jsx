import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../control_components/Slider'
import ButtonSet from '../control_components/ButtonSet'

export default class VibratoEffect extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    const { wet, maxDelay, frequency, depth, type } = settings

    node.wet.value = wet
    node.maxDelay = maxDelay
    node.frequency.value = frequency
    node.depth.value = depth
    node.type = type
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings } = this.props
    const { wet, maxDelay, frequency, depth, type } = settings
    const oscillatorTypes = ['sine', 'square', 'triangle', 'sawtooth']

    this.updateNodeParams()

    return (
      <div className="VibratoEffect">
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
          name="Max Delay"
          property={['maxDelay']}
          min={0}
          max={1}
          step={0.01}
          value={maxDelay}
          handleChange={this.handlePropertyValueChange}
        />

        <Slider
          name="Frequency"
          property={['frequency']}
          min={0}
          max={3000}
          step={1}
          value={frequency}
          handleChange={this.handlePropertyValueChange}
        />

        <Slider
          name="Depth"
          property={['depth']}
          min={0}
          max={1}
          step={0.01}
          value={depth}
          handleChange={this.handlePropertyValueChange}
        />

        <ButtonSet
          name="Type"
          property={['type']}
          value={type}
          options={oscillatorTypes}
          handleChange={this.handlePropertyValueChange}
        />
      </div>
    )
  }
}

VibratoEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
