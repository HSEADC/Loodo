import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import PlayButton from '../control_components/PlayButton'

import ToneMelodyEffectSynth from '../module_components/ToneMelodyEffectSynth'

import AutoFilter from '../module_components/effects/AutoFilter'
import AutoPanner from '../module_components/effects/AutoPanner'
import AutoWah from '../module_components/effects/AutoWah'
import BitCrusher from '../module_components/effects/BitCrusher'
import Chebyshev from '../module_components/effects/Chebyshev'
import Chorus from '../module_components/effects/Chorus'
import Distortion from '../module_components/effects/Distortion'
import FeedbackDelay from '../module_components/effects/FeedbackDelay'
import Freeverb from '../module_components/effects/Freeverb'
import FrequencyShifter from '../module_components/effects/FrequencyShifter'
import JCReverb from '../module_components/effects/JCReverb'
// import MidSide from '../module_components/effects/MidSide'
import Phaser from '../module_components/effects/Phaser'
import PingPongDelay from '../module_components/effects/PingPongDelay'
import PitchShift from '../module_components/effects/PitchShift'
import Reverb from '../module_components/effects/Reverb'
import StereoWidener from '../module_components/effects/StereoWidener'
import Tremolo from '../module_components/effects/Tremolo'
import Vibrato from '../module_components/effects/Vibrato'

import Channel from '../module_components/Channel'

export default class MelodySynthEffectModule extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { instruments, handlePropertyValueChange } = this.props
    const instrumentElements = []

    console.log(instruments)

    instruments.forEach((instrument, i) => {
      const instrumentModuleElements = []
      const { id, name, type, node, settings } = instrument

      console.log(type)

      const components = {
        ToneSynth: ToneMelodyEffectSynth,

        AutoFilter: AutoFilter,
        AutoPanner: AutoPanner,
        AutoWah: AutoWah,
        BitCrusher: BitCrusher,
        Chebyshev: Chebyshev,
        Chorus: Chorus,
        Distortion: Distortion,
        FeedbackDelay: FeedbackDelay,
        Freeverb: Freeverb,
        FrequencyShifter: FrequencyShifter,
        JCReverb: JCReverb,
        // MidSide: MidSide,
        Phaser: Phaser,
        PingPongDelay: PingPongDelay,
        PitchShift: PitchShift,
        Reverb: Reverb,
        StereoWidener: StereoWidener,
        Tremolo: Tremolo,
        Vibrato: Vibrato,

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
        <div className="Arrow"></div>
        <div className="moduleHeaderText">Синтезатор</div>
        <div className="Arrow"></div>
        <div className="InteractiveBlocks">{instrumentElements}</div>
      </div>
    )
  }
}

MelodySynthEffectModule.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
