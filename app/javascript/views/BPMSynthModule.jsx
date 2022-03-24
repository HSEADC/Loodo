import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import BPMSynth from '../module_components/BPMSynth'

export default class BPMSynthContainer extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      instruments,
      handlePropertyValueChange,
      handlePlaySequence,
      togglePlay
    } = this.props
    const instrumentElements = []

    instruments.forEach((instrument, i) => {
      const { id, name, type, node, settings } = instrument
      let instrumentElement

      switch (type) {
        case 'ToneSynth':
          instrumentElement = (
            <BPMSynth
              id={id}
              name={name}
              node={node}
              settings={settings}
              handlePropertyValueChange={handlePropertyValueChange}
              handlePlaySequence={handlePlaySequence}
              togglePlay={togglePlay}
              key={i}
              disabled={this.props.disabled}
              bpm={this.props.bpm}
              handleBPMChange={this.props.handleBPMChange}
            />
          )

          break
      }

      instrumentElements.push(instrumentElement)
    })

    return <div className="SynthRoom">{instrumentElements}</div>
  }
}

BPMSynthContainer.propTypes = {
  instruments: PropTypes.array.isRequired,
  handlePropertyValueChange: PropTypes.func.isRequired
}
