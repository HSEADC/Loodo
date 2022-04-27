import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Slider from '../control_components/Slider'
import Knob from '../control_components/Knob'
import PlayButton from '../control_components/PlayButton'

export default class ToneMelodySynth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sequenceIsPlaying: true
    }
  }

  updateNodeParams = () => {
    const { node, settings } = this.props
    console.log(settings)
    const { volume, detune, portamento, envelope, oscillator } = settings
    const { type, phase, harmonicity } = oscillator

    const {
      attack,
      attackCurve,
      decay,
      decayCurve,
      sustain,
      release,
      releaseCurve
    } = envelope

    node.volume.value = volume
    node.detune.value = detune
    node.portamento = portamento

    node.oscillator.type = type
    node.oscillator.phase = phase

    if (node.oscillator.harmonicity) {
      node.oscillator.harmonicity.value = harmonicity
    }

    node.envelope.attack = attack
    node.envelope.attackCurve = attackCurve
    node.envelope.decay = decay
    node.envelope.decayCurve = decayCurve
    node.envelope.sustain = sustain
    node.envelope.release = release
    node.envelope.releaseCurve = releaseCurve
  }

  handlePropertyValueChange = (property, value) => {
    const { id, handlePropertyValueChange } = this.props
    handlePropertyValueChange(id, property, value)
  }

  render() {
    const { id, name, settings, disabled } = this.props
    const { volume, detune, portamento, envelope, oscillator } = settings

    let adsrStyle = ''
    let portStyle = ''
    let phaseStyle = ''
    let freqStyle = ''

    switch (disabled) {
      case 4:
        adsrStyle = 'Disabled'
        portStyle = 'Disabled'
        phaseStyle = 'Disabled'
        freqStyle = 'Disabled'

        break
      case 3:
        adsrStyle = 'Disabled'
        portStyle = 'Disabled'
        phaseStyle = 'Disabled'

        break
      case 2:
        adsrStyle = 'Disabled'
        portStyle = 'Disabled'

        break
      case 1:
        adsrStyle = 'Disabled'

        break
    }

    const {
      type,
      // modulationType,
      // partialCount,
      // partials,
      phase,
      harmonicity
    } = oscillator

    // Type
    // The type of the oscillator. Can be any of the basic types: sine, square, triangle, sawtooth. Or prefix the basic types with "fm", "am", or "fat" to use the FMOscillator, AMOscillator or FatOscillator types. The oscillator could also be set to "pwm" or "pulse". All of the parameters of the oscillator's class are accessible when the oscillator is set to that type, but throws an error when it's not.
    // type OmniOscillatorType = "fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle" | "fatcustom" | FatTypeWithPartials | "fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle" | "fmcustom" | FMTypeWithPartials | "amsine" | "amsquare" | "amsawtooth" | "amtriangle" | "amcustom" | AMTypeWithPartials | TypeWithPartials | OscillatorType | "pulse" | "pwm"

    // Modulation Type
    // The type of the modulator oscillator. Only if the oscillator is set to "am" or "fm" types. See AMOscillator or FMOscillator

    const { attack, decay, sustain, release } = envelope

    this.updateNodeParams()

    return (
      <div className="SynthMelodyModule">
        <div className="moduleHeaderButton">
          <div className="headerButton">
            <PlayButton
              on={this.props.togglePlay}
              handleClick={this.props.handlePlaySequence}
            />
          </div>
          <span>Мелодия</span>
        </div>
        <div className="Arrow"></div>

        <div className="synthModule">
          <div className="moduleHeaderText">Синтезатор</div>
          <div className="synthModuleSettings">
            <div className="synthModuleSettingsContainer">
              <div className="knobContainerDetune">
                <Knob
                  name="Detune"
                  property={['detune']}
                  min={-100}
                  max={100}
                  value={detune}
                  handleChange={this.handlePropertyValueChange}
                />
              </div>

              <div className="synthModuleSettingsContainerBlock">
                <div className={'sliderLargeContainer' + freqStyle}>
                  <Slider
                    name="Harmonicity"
                    property={['oscillator', 'harmonicity']}
                    min={0}
                    max={10}
                    step={0.1}
                    value={harmonicity}
                    handleChange={this.handlePropertyValueChange}
                  />
                </div>
                <div className={'sliderLargeContainer' + phaseStyle}>
                  <Slider
                    name="Phase"
                    property={['oscillator', 'phase']}
                    min={0}
                    max={100}
                    step={1}
                    value={phase}
                    handleChange={this.handlePropertyValueChange}
                  />
                </div>
              </div>
            </div>
            <div className="synthModuleSettingsContainer">
              <div className={'knobContainerPortamento' + portStyle}>
                <Knob
                  name="Volume"
                  property={['volume']}
                  min={0}
                  max={10}
                  value={volume}
                  handleChange={this.handlePropertyValueChange}
                />
              </div>
              <div className={'synthModuleSettingsContainerADSR' + adsrStyle}>
                <div className="ADSRSlider">
                  <Slider
                    name="Attack"
                    property={['envelope', 'attack']}
                    min={0}
                    max={1}
                    step={0.01}
                    value={attack}
                    handleChange={this.handlePropertyValueChange}
                  />
                </div>

                <div className="ADSRSlider">
                  <Slider
                    name="Decay"
                    property={['envelope', 'decay']}
                    min={0}
                    max={1}
                    step={0.01}
                    value={decay}
                    handleChange={this.handlePropertyValueChange}
                  />
                </div>
                <div className="ADSRSlider">
                  <Slider
                    name="Sustain"
                    property={['envelope', 'sustain']}
                    min={0}
                    max={1}
                    step={0.01}
                    value={sustain}
                    handleChange={this.handlePropertyValueChange}
                  />
                </div>
                <div className="ADSRSlider">
                  <Slider
                    name="Release"
                    property={['envelope', 'release']}
                    min={0}
                    max={1}
                    step={0.01}
                    value={release}
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

ToneMelodySynth.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  node: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
