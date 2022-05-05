import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../../control_components/Slider'
import ButtonSet from '../../control_components/ButtonSet'

export default class AutoPannerEffect extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props

    const { wet, type, frequency, depth } = settings

    node.wet.value = wet
    node.type = type
    node.frequency.value = frequency
    node.depth.value = depth
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings } = this.props

    const {
      wet,
      frequency,
      type,
      depth,
      baseFrequency,
      octaves,
      filter
    } = settings

    const oscillatorTypes = ['sawtooth', 'sine', 'square', 'triangle']

    this.updateNodeParams()

    return (
      <div className="AutoPannerEffect">
        <h1>{name}</h1>
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
            name="Frequency"
            property={['frequency']}
            min={0}
            max={100}
            step={0.01}
            value={frequency}
            handleChange={this.handlePropertyValueChange}
          />
        </div>
        <div className="sliderLargeContainer">
          <Slider
            name="Depth"
            property={['depth']}
            min={0}
            max={1}
            step={0.01}
            value={depth}
            handleChange={this.handlePropertyValueChange}
          />
        </div>
        <div className="buttonSetLineContainer">
          <ButtonSet
            name="Type"
            property={['type']}
            value={type}
            options={oscillatorTypes}
            handleChange={this.handlePropertyValueChange}
          />
        </div>
      </div>
    )
  }
}

AutoPannerEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
