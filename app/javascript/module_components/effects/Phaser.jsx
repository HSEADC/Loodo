import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../../control_components/Slider'
import ButtonSet from '../../control_components/ButtonSet'
import Knob from '../../control_components/Knob'

export default class PhaserEffect extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props

    const { wet, frequency, octaves, stages, Q, baseFrequency } = settings

    node.wet.value = wet
    node.frequency.value = frequency
    node.octaves = octaves
    node.stages = stages
    node.Q.value = Q
    node.baseFrequency = baseFrequency
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings } = this.props

    const { wet, frequency, octaves, stages, Q, baseFrequency } = settings

    this.updateNodeParams()

    return (
      <div className="PhaserEffect">
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
        <div className="knobSliderContainer">
          <div className="knobContainer">
            <Knob
              name="Base Frequency"
              property={['baseFrequency']}
              min={0}
              max={1000}
              value={baseFrequency}
              handleChange={this.handlePropertyValueChange}
            />
          </div>

          <div>
            <div className="sliderMediumContainer">
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
            <div className="sliderMediumContainer">
              <Slider
                name="Octaves"
                property={['octaves']}
                min={0}
                max={6}
                step={0.1}
                value={octaves}
                handleChange={this.handlePropertyValueChange}
              />
            </div>

            <div className="sliderMediumContainer">
              <Slider
                name="Stages"
                property={['stages']}
                min={0}
                max={10}
                step={1}
                value={stages}
                handleChange={this.handlePropertyValueChange}
              />
            </div>
          </div>
        </div>
        <div className="sliderLargeContainer">
          <Slider
            name="Quality"
            property={['Q']}
            min={0}
            max={10}
            step={0.01}
            value={Q}
            handleChange={this.handlePropertyValueChange}
          />
        </div>
      </div>
    )
  }
}

PhaserEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
