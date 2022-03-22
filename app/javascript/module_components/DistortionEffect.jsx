import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { generateUniqId } from '../utilities'

import Slider from '../control_components/Slider'
import ButtonSet from '../control_components/ButtonSet'

export default class DistortionEffect extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    const { wet, distortion, oversample } = settings

    node.wet.value = wet
    node.distortion = distortion
    node.oversample = oversample
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings, newEffect } = this.props
    const { wet, distortion, oversample } = settings
    const oversampleTypes = ['none', '2x', '4x']

    let newArrow = []

    if (newEffect) {
      newArrow.push(
        <div className="ArrowHorizontal" key={generateUniqId()}></div>
      )
    }

    this.updateNodeParams()

    return (
      <div className="DistortionEffect">
        <div className="newEffectContainer">
          {newArrow}
          <div>
            <div className="moduleHeaderText">Эффект: Distortion</div>
            <div className="firstModuleSettingsContainer">
              <div className="sliderLargeContainerBlock">
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
                <div className="sliderLargeProblemContainer">
                  <Slider
                    name="Distortion"
                    property={['distortion']}
                    min={0}
                    max={20}
                    step={0.01}
                    value={distortion}
                    handleChange={this.handlePropertyValueChange}
                  />
                </div>
              </div>
              <div className="buttonSetContainer">
                <ButtonSet
                  name="Oversample"
                  property={['oversample']}
                  value={oversample}
                  options={oversampleTypes}
                  handleChange={this.handlePropertyValueChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

DistortionEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
