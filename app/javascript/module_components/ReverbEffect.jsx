import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../control_components/Slider'

export default class ReverbEffect extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    const { wet, decay, preDelay } = settings

    node.wet.value = wet
    node.decay = decay
    node.preDelay = preDelay
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings } = this.props
    const { wet, decay, preDelay } = settings

    this.updateNodeParams()

    return (
      <div className="ReverbEffect">
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
          name="Decay"
          property={['decay']}
          min={0}
          max={10}
          step={0.01}
          value={decay}
          handleChange={this.handlePropertyValueChange}
        />

        <Slider
          name="Pre Delay"
          property={['preDelay']}
          min={0}
          max={1}
          step={0.001}
          value={preDelay}
          handleChange={this.handlePropertyValueChange}
        />
      </div>
    )
  }
}

ReverbEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
