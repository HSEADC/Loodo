import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import Button from '../control_components/Button'
import PlayButton from '../control_components/PlayButton'

import ToneSynth from '../module_components/ToneSynth'
import Sampler from '../module_components/Sampler'
import Sequencer from '../module_components/Sequencer'
import CodeModule from '../module_components/CodeModule'

import AutoFilter from '../module_components/effects/AutoFilter'
import AutoPannerEffect from '../module_components/effects/AutoPanner'
import AutoWahEffect from '../module_components/effects/AutoWah'
import BitCrusherEffect from '../module_components/effects/BitCrusher'
import ChebyshevEffect from '../module_components/effects/Chebyshev'
import ChorusEffect from '../module_components/effects/Chorus'
import DistortionEffect from '../module_components/effects/Distortion'
import FeedbackDelayEffect from '../module_components/effects/FeedbackDelay'
import FreeverbEffect from '../module_components/effects/Freeverb'
import FrequencyShifterEffect from '../module_components/effects/FrequencyShifter'
import JCReverbEffect from '../module_components/effects/JCReverb'
import MidSideEffect from '../module_components/effects/MidSide'
import PhaserEffect from '../module_components/effects/Phaser'
import PingPongDelayEffect from '../module_components/effects/PingPongDelay'
import PitchShiftEffect from '../module_components/effects/PitchShift'
import ReverbEffect from '../module_components/effects/Reverb'
import StereoWidenerEffect from '../module_components/effects/StereoWidener'
import TremoloEffect from '../module_components/effects/Tremolo'
import VibratoEffect from '../module_components/effects/Vibrato'

import Channel from '../module_components/Channel'

export default class SequencerModule extends PureComponent {
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
        console.log(type)

        const components = {
          ToneSynth: ToneSynth,
          Sampler: Sampler,
          Sequencer: Sequencer,
          AutoFilter: AutoFilter,
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
      <div className="mainSequencerContainer">
        <div className="moduleHeaderButton">
          <div className="headerButton">
            <PlayButton
              on={this.props.togglePlay}
              handleClick={this.props.handlePlaySequence}
            />
          </div>
          <span>Мелодия</span>
        </div>
        <div className="SequencerModule">{instrumentElements}</div>
        <div className="Arrow"></div>
        <div className="moduleHeaderText">Синтезатор</div>
      </div>
    )
  }
}

SequencerModule.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
