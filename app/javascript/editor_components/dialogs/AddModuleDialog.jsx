import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import AddModuleButton from '../../control_components/AddModuleButton'

export default class AddModuleDialog extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, handleClick, styleId, id } = this.props

    return (
      <dialog className="AddModuleDialog" id={styleId}>
        <div className="AddButton">
          <div className="AddButtonsContainer">
            <div className="AddButtonsHeader">Текст</div>
            <div className="ButtonsContainer">
              <AddModuleButton
                type="paragraph"
                styleId={styleId}
                handleClick={handleClick}
              />
              <AddModuleButton
                type="heading1"
                styleId={styleId}
                handleClick={handleClick}
              />
              <AddModuleButton
                type="heading2"
                styleId={styleId}
                handleClick={handleClick}
              />
              <AddModuleButton
                type="heading3"
                styleId={styleId}
                handleClick={handleClick}
              />
            </div>
          </div>
          <div className="AddButtonsContainer">
            <div className="AddButtonsHeader">Медиа</div>
            <div className="ButtonsContainer">
              <AddModuleButton
                type="image"
                styleId={styleId}
                handleClick={handleClick}
              />
              <AddModuleButton
                type="video"
                styleId={styleId}
                handleClick={handleClick}
              />
            </div>
          </div>
          <div className="AddButtonsContainer">
            <div className="AddButtonsHeader">Интерактивный блок</div>
            <div className="ButtonsContainer">
              <AddModuleButton
                type="module"
                styleId={styleId}
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </dialog>
    )
  }
}
