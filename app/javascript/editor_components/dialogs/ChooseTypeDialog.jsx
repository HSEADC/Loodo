import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import AddModuleButton from '../../control_components/AddModuleButton'

export default class ChooseTypeDialog extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, handleClick, styleId, id } = this.props

    return (
      <dialog className="ChooseTypeDialog" id={styleId}>
        <div className="AddButton">
          <div className="AddButtonsContainer">
            <div className="AddButtonsHeader">Текст</div>
            <div className="ButtonsContainer">
              <AddModuleButton
                type="paragraph"
                styleId={styleId}
                handleClick={() => {
                  handleClick(id, 'paragraph')
                }}
              />
              <AddModuleButton
                type="heading1"
                styleId={styleId}
                handleClick={() => {
                  handleClick(id, 'heading1')
                }}
              />
              <AddModuleButton
                type="heading2"
                styleId={styleId}
                handleClick={() => {
                  handleClick(id, 'heading2')
                }}
              />
              <AddModuleButton
                type="heading3"
                styleId={styleId}
                handleClick={() => {
                  handleClick(id, 'heading3')
                }}
              />
            </div>
          </div>
          <div className="AddButtonsContainer">
            <div className="AddButtonsHeader">Медиа</div>
            <div className="ButtonsContainer">
              <AddModuleButton
                type="image"
                styleId={styleId}
                handleClick={() => {
                  handleClick(id, 'image')
                }}
              />
              <AddModuleButton
                type="video"
                styleId={styleId}
                handleClick={() => {
                  handleClick(id, 'video')
                }}
              />
            </div>
          </div>
          <div className="AddButtonsContainer">
            <div className="AddButtonsHeader">Интерактивный блок</div>
            <div className="ButtonsContainer">
              <AddModuleButton
                type="module"
                styleId={styleId}
                handleClick={() => {
                  handleClick(id, 'module')
                }}
              />
            </div>
          </div>
        </div>
      </dialog>
    )
  }
}
