import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import ToggleButton from '../control_components/ToggleButton'

import ToneMelodyEffectSynth from '../module_components/ToneMelodyEffectSynth'

import ChorusEffect from '../module_components/ChorusEffect'

import Channel from '../module_components/Channel'

export default class MelodySynthEffectModule extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { instruments, handlePropertyValueChange } = this.props
    const instrumentElements = []

    instruments.forEach((instrument, i) => {
      const instrumentModuleElements = []

      instrument.forEach((instrumentModule, i) => {
        const { id, name, type, node, settings } = instrumentModule

        const components = {
          ToneMelodyEffectSynth: ToneMelodyEffectSynth,
          ChorusEffect: ChorusEffect,
          Channel: Channel
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
        <div class="moduleHeaderText">Синтезатор</div>
        <div>стрелка</div>
        <div className="InteractiveBlocks">
          <div className="moduleHeaderText">Эффект</div>
          {instrumentElements}
        </div>
      </div>
    )
  }
}

MelodySynthEffectModule.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
