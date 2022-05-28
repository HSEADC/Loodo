import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class AddModuleButton extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { type, handleClick, styleId } = this.props
    let imageClass
    let heading
    let text

    switch (type) {
      case 'heading1':
        imageClass = 'H1Image'
        heading = 'Большой заголовок'
        text = 'Для крупных разделов'
        break
      case 'heading2':
        imageClass = 'H2Image'
        heading = 'Средний заголовок'
        text = 'Для оглавлений внутри разделов'
        break
      case 'heading3':
        imageClass = 'H3Image'
        heading = 'Маленький заголовок'
        text = 'Для мелких подписей'
        break
      case 'paragraph':
        imageClass = 'PImage'
        heading = 'Обычный текст'
        text = 'Для основного текста'
        break
      case 'image':
        imageClass = 'IImage'
        heading = 'Изображение'
        text = 'Для примеров и схем'
        break
      case 'video':
        imageClass = 'VImage'
        heading = 'Видео'
        text = 'Для лучшей коммуникации'
        break
      case 'module':
        imageClass = 'MImage'
        heading = 'Интерактивный блок'
        text = 'Для геймификации'
        break
      default:
    }

    return (
      <div
        className="AddModuleButton"
        onClick={() => {
          handleClick(styleId, type)
        }}
      >
        <div className={imageClass}></div>
        <div className={'AddButtonDescriptionContainer'}>
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
      </div>
    )
  }
}
