import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import AddModuleButton from '../control_components/AddModuleButton'

export default class AddButton extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, handleClick } = this.props

    return (
      <div className="AddButton">
        <div className="AddButtonsContainer">
          <span>Текст</span>
          <div className="ButtonsContainer">
            <AddModuleButton type="paragraph" handleClick={handleClick} />
            <AddModuleButton type="heading1" handleClick={handleClick} />
            <AddModuleButton type="heading2" handleClick={handleClick} />
            <AddModuleButton type="heading3" handleClick={handleClick} />
          </div>
        </div>
        <div className="AddButtonsContainer">
          <span>Медиа</span>
          <div className="ButtonsContainer">
            <AddModuleButton type="image" handleClick={handleClick} />
            <AddModuleButton type="video" handleClick={handleClick} />
          </div>
        </div>
        <div className="AddButtonsContainer">
          <span>Интерактивный блок</span>
          <div className="ButtonsContainer">
            <AddModuleButton type="module" handleClick={handleClick} />
          </div>
        </div>
      </div>
    )
  }
}
