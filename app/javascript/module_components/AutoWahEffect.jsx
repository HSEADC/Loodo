import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../control_components/Slider'

export default class AutoWahEffect extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props

    const {
      wet,
      baseFrequency,
      octaves,
      sensitivity,
      Q,
      gain,
      follower
    } = settings

    node.wet.value = wet
    node.baseFrequency = baseFrequency
    node.octaves = octaves
    node.sensitivity = sensitivity
    node.Q.value = Q
    node.gain.value = gain
    node.follower = follower
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings } = this.props

    const {
      wet,
      baseFrequency,
      octaves,
      sensitivity,
      Q,
      gain,
      follower
    } = settings

    const { attack, release } = follower

    this.updateNodeParams()

    return (
      <div className="AutoWahEffect">
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
          name="Base Frequency"
          property={['baseFrequency']}
          min={0}
          max={1000}
          step={1}
          value={baseFrequency}
          handleChange={this.handlePropertyValueChange}
        />

        <Slider
          name="Octaves"
          property={['octaves']}
          min={0}
          max={6}
          step={0.1}
          value={octaves}
          handleChange={this.handlePropertyValueChange}
        />

        <Slider
          name="Sensitivity"
          property={['sensitivity']}
          min={0}
          max={20}
          step={0.1}
          value={sensitivity}
          handleChange={this.handlePropertyValueChange}
        />

        <Slider
          name="Q"
          property={['Q']}
          min={0}
          max={10}
          step={0.01}
          value={Q}
          handleChange={this.handlePropertyValueChange}
        />

        <Slider
          name="Gain"
          property={['gain']}
          min={0}
          max={10}
          step={0.01}
          value={gain}
          handleChange={this.handlePropertyValueChange}
        />

        <Slider
          name="Follower"
          property={['follower']}
          min={0}
          max={5}
          step={0.01}
          value={follower}
          handleChange={this.handlePropertyValueChange}
        />
      </div>
    )
  }
}

AutoWahEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
