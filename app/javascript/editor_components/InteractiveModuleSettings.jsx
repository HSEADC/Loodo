import classnames from 'classnames'
import React, { PureComponent } from 'react'
import IconButton from '../control_components/IconButton'

export default class InteractiveModuleSettings extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      handleClick,
      id,
      elementName,
      handleOpenAddModule,
      handleOpenOptions
    } = this.props

    return (
      <div className="InteractiveModuleSettings">
        <div className="IconButtonContainer">
          <IconButton
            handleClick={() => {
              handleOpenAddModule(id)
            }}
            type="Plus"
          />
          <IconButton
            handleClick={() => {
              handleOpenOptions(id)
            }}
            type="Drag"
          />
        </div>
        <div className="InteractiveModuleSettingsContainer">
          <div className="FileChange">Имя модуля: Тригер</div>
          <div>
            <span>W</span>
            <input value="600px" />
            <span>H</span>
            <input value="400px" />
          </div>
        </div>
        <div className={'CompositionBlock'}> </div>
      </div>
    )
  }
}
