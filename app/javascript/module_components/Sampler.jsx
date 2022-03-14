import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../control_components/Slider'
import ButtonSet from '../control_components/ButtonSet'

export default class Sampler extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    const { volume, attack, release, curve } = settings

    node.volume.value = volume
    node.attack = attack
    node.release = release
    node.curve = curve
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings } = this.props
    const { volume, attack, release, curve } = settings

    const envelopeCurves = ['linear', 'exponential']

    this.updateNodeParams()

    return (
      <div className="Sampler">
        <h1>{name}</h1>

        <Slider
          name="Volume"
          property={['volume']}
          min={-20}
          max={10}
          step={0.01}
          value={volume}
          handleChange={this.handlePropertyValueChange}
        />

        <h2>Envelope</h2>

        <ButtonSet
          name="Curve"
          property={['curve']}
          value={curve}
          options={envelopeCurves}
          handleChange={this.handlePropertyValueChange}
        />

        <Slider
          name="Attack"
          property={['attack']}
          min={0}
          max={1}
          step={0.01}
          value={attack}
          handleChange={this.handlePropertyValueChange}
        />

        <Slider
          name="Release"
          property={['release']}
          min={0}
          max={1}
          step={0.01}
          value={release}
          handleChange={this.handlePropertyValueChange}
        />
      </div>
    )
  }
}

Sampler.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
