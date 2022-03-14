//
//
//
//
//
//
// Not working
//
//
//
//
//
//

import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../control_components/Slider'

export default class BitCrusherEffect extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    const { wet, bits } = settings

    node.wet.value = wet
    node.bits = bits
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings } = this.props
    const { wet, bits } = settings

    this.updateNodeParams()

    return (
      <div className="BitCrusherEffect">
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
          name="Bits"
          property={['bits']}
          min={0}
          max={16}
          step={4}
          value={bits}
          handleChange={this.handlePropertyValueChange}
        />
      </div>
    )
  }
}

BitCrusherEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
