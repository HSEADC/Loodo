import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../control_components/Slider'

export default class FrequencyShifterEffect extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    const { wet, frequency } = settings

    node.wet.value = wet
    node.frequency = frequency
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings } = this.props
    const { wet, frequency } = settings

    this.updateNodeParams()

    return (
      <div className="FrequencyShifterEffect">
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
          name="Frequency"
          property={['frequency']}
          min={0}
          max={100}
          step={1}
          value={frequency}
          handleChange={this.handlePropertyValueChange}
        />
      </div>
    )
  }
}

FrequencyShifterEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
