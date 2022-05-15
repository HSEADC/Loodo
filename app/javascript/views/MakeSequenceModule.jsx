import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import Button from '../control_components/Button'
import PlayButton from '../control_components/PlayButton'

import ToneSynth from '../module_components/ToneSynth'
import Sampler from '../module_components/Sampler'
import Sequencer from '../module_components/Sequencer'
import CodeModule from '../module_components/CodeModule'

import AutoFilter from '../module_components/effects/AutoFilter'

import Channel from '../module_components/Channel'

export default class MakeSequenceModule extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { instruments, handlePropertyValueChange } = this.props
    const instrumentElements = []

    instruments.forEach((instrument, i) => {
      const instrumentModuleElements = []

      let headerName

      if (instrument[0].name === 'Drum Sampler') {
        headerName = 'Семплер'
      } else if (instrument[2].name === 'Melody Synth') {
        headerName = 'Синтезатор'
      }
      console.log(instrument)
      console.log('______')

      instrument.forEach((instrumentModule, i) => {
        const { id, name, type, node, settings } = instrumentModule

        const components = {
          ToneSynth: ToneSynth,
          Sampler: Sampler,
          Sequencer: Sequencer,
          AutoFilter: AutoFilter,
          Channel: Channel
        }

        const ComponentType = components[type]

        if (type === 'AutoFilter') {
          instrumentModuleElements.push(
            <div>
              <div className="Arrow"></div>
              <ComponentType
                id={id}
                name={name}
                node={node}
                settings={settings}
                handlePropertyValueChange={handlePropertyValueChange}
                key={i}
              />
            </div>
          )
        } else {
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
        }
      })

      instrumentElements.push(
        <div>
          <div className="moduleHeaderButton">
            <div className="headerButton">
              <PlayButton
                on={this.props.togglePlay}
                handleClick={this.props.handlePlaySequence}
              />
            </div>
            <span>{headerName}</span>
          </div>
          <div className="Row" key={i}>
            {instrumentModuleElements}
          </div>
        </div>
      )
    })

    return (
      <div className="mainSequencerContainer">
        <div className="SequencerModule">{instrumentElements}</div>
      </div>
    )
  }
}

MakeSequenceModule.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
