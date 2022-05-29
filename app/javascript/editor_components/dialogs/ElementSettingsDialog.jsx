import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import ChooseTypeDialog from './ChooseTypeDialog'

export default class ElementSettingsDialog extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      buttonWasPressed: false
    }
  }

  handleOpenChangeTypeModule = (id) => {
    const { buttonWasPressed } = this.state

    let chooseTypeDialog = document.getElementById('ChooseTypeDialog_' + id)

    buttonWasPressed ? chooseTypeDialog.close() : chooseTypeDialog.show()

    this.setState({
      buttonWasPressed: !buttonWasPressed
    })
  }

  handleChangeType = (id, type) => {
    const { handleChangeType } = this.props

    let chooseTypeDialog = document.getElementById('ChooseTypeDialog_' + id)

    chooseTypeDialog.close()

    handleChangeType(id, type)

    this.setState({
      buttonWasPressed: false
    })
  }

  render() {
    const { text, handleDeleteElement, styleId, id } = this.props

    return (
      <dialog className="ElementSettingsDialog" id={styleId}>
        <div
          className="Button"
          onClick={() => {
            this.handleOpenChangeTypeModule(id)
          }}
        >
          Поменять тип модуля
        </div>
        <div
          className="Button"
          onClick={() => {
            handleDeleteElement(id)
          }}
        >
          Удалить
        </div>

        <ChooseTypeDialog
          styleId={'ChooseTypeDialog_' + id}
          handleClick={this.handleChangeType}
          id={id}
        />
      </dialog>
    )
  }
}
