import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import ToggleButton from '../control_components/ToggleButton'
import Button from '../control_components/Button'

import ToneMelodyEffectSynth from '../module_components/ToneMelodyEffectSynth'

import ChorusEffect from '../module_components/ChorusEffect'
import FreeverbEffect from '../module_components/FreeverbEffect'
import VibratoEffect from '../module_components/VibratoEffect'
import PitchShiftEffect from '../module_components/PitchShiftEffect'
import DistortionEffect from '../module_components/DistortionEffect'

import Channel from '../module_components/Channel'

export default class MelodySynthChooseEffectModule extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { instruments, handlePropertyValueChange, addEffect } = this.props
    const instrumentElements = []

    instruments.forEach((instrument, i) => {
      const instrumentModuleElements = []

      instrument.forEach((instrumentModule, i) => {
        const { id, name, type, node, settings } = instrumentModule

        const components = {
          ToneMelodyEffectSynth: ToneMelodyEffectSynth,
          ChorusEffect: ChorusEffect,
          FreeverbEffect: FreeverbEffect,
          Channel: Channel,
          VibratoEffect: VibratoEffect,
          PitchShiftEffect: PitchShiftEffect,
          DistortionEffect: DistortionEffect
        }

        const ComponentType = components[type]

        instrumentModuleElements.push(
          <ComponentType
            id={id}
            name={name}
            node={node}
            settings={settings}
            handlePropertyValueChange={handlePropertyValueChange}
            key={i}
          />
        )
      })

      instrumentElements.push(
        <div className="Row" key={i}>
          {instrumentModuleElements}
        </div>
      )
    })

    return (
      <div>
        <div className="moduleHeaderButton">
          <div className="headerButton">
            <ToggleButton
              className="trigerButton"
              text="Start"
              handleClick={this.props.handlePlaySequence}
            />
          </div>
          <span>Мелодия</span>
        </div>
        <div>стрелка</div>
        <div className="moduleHeaderText">Синтезатор</div>
        <div>стрелка</div>
        <div className="InteractiveBlocks">
          <div className="moduleHeaderText">Эффект</div>
          {instrumentElements}
        </div>

        <div>
          <Button text="Start" handleClick={addEffect} />
        </div>
      </div>
    )
  }
}

MelodySynthChooseEffectModule.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
