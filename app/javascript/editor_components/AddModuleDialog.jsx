import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import AddModuleButton from '../control_components/AddModuleButton'

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
                handleClick={() => {
                  handleClick(id)
                }}
              />
              <AddModuleButton
                type="heading1"
                handleClick={() => {
                  handleClick(id)
                }}
              />
              <AddModuleButton
                type="heading2"
                handleClick={() => {
                  handleClick(id)
                }}
              />
              <AddModuleButton
                type="heading3"
                handleClick={() => {
                  handleClick(id)
                }}
              />
            </div>
          </div>
          <div className="AddButtonsContainer">
            <div className="AddButtonsHeader">Медиа</div>
            <div className="ButtonsContainer">
              <AddModuleButton
                type="image"
                handleClick={() => {
                  handleClick(id)
                }}
              />
              <AddModuleButton
                type="video"
                handleClick={() => {
                  handleClick(id)
                }}
              />
            </div>
          </div>
          <div className="AddButtonsContainer">
            <div className="AddButtonsHeader">Интерактивный блок</div>
            <div className="ButtonsContainer">
              <AddModuleButton
                type="module"
                handleClick={() => {
                  handleClick(id)
                }}
              />
            </div>
          </div>
        </div>
      </dialog>
    )
  }
}
