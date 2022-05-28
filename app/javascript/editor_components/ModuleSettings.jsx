import classnames from 'classnames'
import React, { PureComponent } from 'react'
import IconButton from '../control_components/IconButton'

export default class ModuleSettings extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      on,
      handleClick,
      id,
      elementName,
      handleOpenAddModule,
      handleOpenOptions
    } = this.props

    const classes = classnames({
      playButton: true,
      on: on
    })

    let settingsTypeName

    switch (elementName) {
      case 'Image':
        settingsTypeName = 'Изображение'
        break
      case 'Heading1 ':
        settingsTypeName = 'Большой заголовок'
        break
      case 'Heading2':
        settingsTypeName = 'Средний заголовок'
        break
      case 'Heading3':
        settingsTypeName = 'Маленький заголовок'
        break
      case 'Paragraph':
        settingsTypeName = 'Обычный текст'
        break
      case 'Interactive_Module':
        settingsTypeName = 'Интерактивный блок'
        break
      default:
    }

    return (
      <div className="ModuleSettings">
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
      </div>
    )
  }
}
