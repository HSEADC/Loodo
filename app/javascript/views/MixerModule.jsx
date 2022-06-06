import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import PlayButton from '../control_components/PlayButton'
import Slider from '../control_components/Slider'

export default class MixerModule extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    let harmonicity = 0
    return (
      <div className="MixerContainer">
        <div className="PlayAllContainer">
          <PlayButton
            on={this.props.togglePlay}
            handleClick={() => {
              this.props.handlePlayNote('C4', '1')
            }}
          />
          <div className="text">Воспроизвести все каналы</div>
        </div>
        <div className="MixerGuitarContainer">
          <div className="LeftMixerPart">
            <PlayButton
              on={this.props.togglePlay}
              handleClick={() => {
                this.props.handlePlayNote('C4', '1')
              }}
            />
            <span>Гитара</span>
          </div>

          <div className="RightMixerPart">
            <Slider
              name=""
              property={['oscillator', 'harmonicity']}
              min={0}
              max={10}
              step={0.1}
              value={harmonicity}
              handleChange={this.handlePropertyValueChange}
            />
          </div>
        </div>
        <div className="MixerSynthContainer">
          <div className="LeftMixerPart">
            <PlayButton
              on={this.props.togglePlay}
              handleClick={() => {
                this.props.handlePlayNote('C4', '1')
              }}
            />
            <span>Синт</span>
          </div>
          <div className="RightMixerPart">
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
        </div>
        <div className="DrumsContainer">
          <div className="LeftMixerPart">
            <PlayButton
              on={this.props.togglePlay}
              handleClick={() => {
                this.props.handlePlayNote('C4', '1')
              }}
            />
            <span>Барабаны</span>
          </div>
          <div className="RightMixerPart">
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
        </div>
      </div>
    )
  }
}
