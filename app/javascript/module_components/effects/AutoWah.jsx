import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../../control_components/Slider'
import Knob from '../../control_components/Knob'

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
                name="Sensitivity"
                property={['sensitivity']}
                min={0}
                max={20}
                step={0.1}
                value={sensitivity}
                handleChange={this.handlePropertyValueChange}
              />
            </div>

            <div className="sliderMediumContainer">
              <Slider
                name="Q"
                property={['Q']}
                min={0}
                max={10}
                step={0.01}
                value={Q}
                handleChange={this.handlePropertyValueChange}
              />
            </div>
          </div>
        </div>
        <div className="sliderLargeContainer">
          <Slider
            name="Gain"
            property={['gain']}
            min={0}
            max={10}
            step={0.01}
            value={gain}
            handleChange={this.handlePropertyValueChange}
          />
        </div>
        <div className="sliderLargeContainer">
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
