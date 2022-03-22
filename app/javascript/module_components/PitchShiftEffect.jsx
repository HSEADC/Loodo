import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { generateUniqId } from '../utilities'

import Slider from '../control_components/Slider'
import Knob from '../control_components/Knob'
import ButtonSet from '../control_components/ButtonSet'

export default class PitchShiftEffect extends Component {
  constructor(props) {
    super(props)
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    const { wet, pitch, windowSize, delayTime, feedback } = settings

    node.wet.value = wet
    node.pitch = pitch
    node.windowSize = windowSize
    node.delayTime.value = delayTime
    node.feedback.value = feedback
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { name, settings, newEffect } = this.props
    const { wet, pitch, windowSize, delayTime, feedback } = settings

    let newArrow = []

    if (newEffect) {
      newArrow.push(
        <div className="ArrowHorizontal" key={generateUniqId()}></div>
      )
    }

    this.updateNodeParams()

    return (
      <div className="PitchShiftEffect">
        <div className="newEffectContainer">
          {newArrow}
          <div>
            <div className="moduleHeaderText">Эффект: Pitch Shift</div>
            <div className="PartManage">
              <div className="LeftPart">
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
                    <div className="sliderLargeContainer">
                      <Slider
                        name="Window Size"
                        property={['windowSize']}
                        min={0}
                        max={1}
                        step={0.01}
                        value={windowSize}
                        handleChange={this.handlePropertyValueChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="sliderLargeContainer">
                  <Slider
                    name="Feedback"
                    property={['feedback']}
                    min={0}
                    max={1}
                    step={0.001}
                    value={feedback}
                    handleChange={this.handlePropertyValueChange}
                  />
                </div>
              </div>

              <div className="RightPart">
                <div className="knobContainer">
                  <Knob
                    name="Pitch"
                    property={['pitch']}
                    min={-24}
                    max={24}
                    value={pitch}
                    handleChange={this.handlePropertyValueChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

PitchShiftEffect.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
