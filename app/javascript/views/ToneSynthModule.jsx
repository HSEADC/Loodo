import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import ToneMelodySynth from '../module_components/ToneMelodySynth'

export default class ToneSynthModule extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      instruments,
      handlePropertyValueChange,
      handlePlaySequence,
      togglePlay,
      synth
    } = this.props

    const instrumentElements = []

    instruments.forEach((instrument, i) => {
      const { id, name, type, node, settings } = instrument
      let instrumentElement

      switch (type) {
        case 'ToneSynth':
          instrumentElement = (
            <ToneMelodySynth
              id={id}
              name={name}
              node={node}
              settings={settings}
              handlePropertyValueChange={handlePropertyValueChange}
              handlePlaySequence={handlePlaySequence}
              togglePlay={togglePlay}
              key={i}
              disabled={this.props.disabled}
              synth={this.props.synth}
            />
          )
          break

        case 'MonoSynth':
          instrumentElement = (
            <ToneMelodySynth
              id={id}
              name={name}
              node={node}
              settings={settings}
              handlePropertyValueChange={handlePropertyValueChange}
              handlePlaySequence={handlePlaySequence}
              togglePlay={togglePlay}
              key={i}
              disabled={this.props.disabled}
              synth={this.props.synth}
            />
          )
          break

        case 'AMSynth':
          instrumentElement = (
            <ToneMelodySynth
              id={id}
              name={name}
              node={node}
              settings={settings}
              handlePropertyValueChange={handlePropertyValueChange}
              handlePlaySequence={handlePlaySequence}
              togglePlay={togglePlay}
              key={i}
              disabled={this.props.disabled}
              synth={this.props.synth}
            />
          )
          break

        case 'FMSynth':
          instrumentElement = (
            <ToneMelodySynth
              id={id}
              name={name}
              node={node}
              settings={settings}
              handlePropertyValueChange={handlePropertyValueChange}
              handlePlaySequence={handlePlaySequence}
              togglePlay={togglePlay}
              key={i}
              disabled={this.props.disabled}
              synth={this.props.synth}
            />
          )
          break
      }

      instrumentElements.push(instrumentElement)
    })

    return <div className="SynthRoom">{instrumentElements}</div>
  }
}

ToneSynthModule.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
