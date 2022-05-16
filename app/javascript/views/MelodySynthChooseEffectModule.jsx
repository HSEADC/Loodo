import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import PlayButton from '../control_components/PlayButton'
import Button from '../control_components/Button'
import Select from '../control_components/Select'

import ToneMelodyEffectSynth from '../module_components/ToneMelodyEffectSynth'

import Chorus from '../module_components/effects/Chorus'
import Freeverb from '../module_components/effects/Freeverb'
import Vibrato from '../module_components/effects/Vibrato'
import PitchShift from '../module_components/effects/PitchShift'
import Distortion from '../module_components/effects/Distortion'
import Tremolo from '../module_components/effects/Tremolo'

import Channel from '../module_components/Channel'

export default class MelodySynthChooseEffectModule extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      newEffect: false
    }
  }

  render() {
    const { instruments, handlePropertyValueChange, addEffect } = this.props
    const instrumentElements = []
    let possibleEffects = ['Distortion', 'Tremolo', 'Pitch Shift']

    console.log(instruments)

    instruments.forEach((instrument, i) => {
      const instrumentModuleElements = []

      instrument.forEach((instrumentModule, i) => {
        const { id, name, type, node, settings, newEffect } = instrumentModule

        const components = {
          ToneMelodyEffectSynth: ToneMelodyEffectSynth,
          ChorusEffect: Chorus,
          FreeverbEffect: Freeverb,
          Channel: Channel,
          VibratoEffect: Vibrato,
          PitchShiftEffect: PitchShift,
          DistortionEffect: Distortion,
          TremoloEffect: Tremolo
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
            newEffect={newEffect}
          />
        )
      })

      if (this.state.newEffect) {
        instrumentElements.push(
          <div className="NewEffect" id={'NewEffect' + name}>
            <div className="Arrow"> </div>
            <div className="Row" key={i}>
              {instrumentModuleElements}
            </div>
          </div>
        )
      } else {
        instrumentElements.push(
          <div className="Row" key={i}>
            {instrumentModuleElements}
          </div>
        )
      }
    })

    return (
      <div className="mainSequencerContainer">
        <div className="moduleWidth">
          <div className="flexBlock">
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
            <div className="moduleHeaderText">Синтезатор</div>
            <div className="Arrow"></div>
          </div>
          <div className="addEffectContainer">
            <div className="InteractiveBlocks">{instrumentElements}</div>

            <Select
              text="Добавить эффект"
              options={possibleEffects}
              addEffect={this.props.addEffect}
            />
          </div>
        </div>
      </div>
    )
  }
}

MelodySynthChooseEffectModule.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
