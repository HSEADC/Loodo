import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import InteractiveModuleDownloadDialog from './InteractiveModuleDownloadDialog'

export default class InteractiveModuleSettingsDialog extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      buttonWasPressed: false
    }
  }

  handleOpenInteractiveModuleDownloadDialog = (id) => {
    const { buttonWasPressed } = this.state

    let interactiveModuleDownloadDialog = document.getElementById(
      'InteractiveModuleDownloadDialog_' + id
    )

    interactiveModuleDownloadDialog.show()

    this.setState({
      buttonWasPressed: !buttonWasPressed
    })
  }

  handleCloseInteractiveModuleDownloadDialog = (id) => {
    const { buttonWasPressed } = this.state

    let interactiveModuleDownloadDialog = document.getElementById(
      'InteractiveModuleDownloadDialog_' + id
    )

    let interactiveModuleSettingsDialog = document.getElementById(
      'InteractiveModuleSettingsDialog_' + id
    )

    interactiveModuleDownloadDialog.close()
    interactiveModuleSettingsDialog.close()

    this.setState({
      buttonWasPressed: !buttonWasPressed
    })
  }

  render() {
    const { text, handleDeleteElement, styleId, id, description } = this.props

    return (
      <dialog className="InteractiveModuleSettingsDialog" id={styleId}>
        <div
          className="SettingsButton"
          onClick={() => {
            this.handleOpenInteractiveModuleDownloadDialog(id)
          }}
        >
          Редактировать модуль
        </div>
        <div
          className="SettingsButton"
          onClick={() => {
            console.log(id)
          }}
        >
          Удалить
        </div>
        <InteractiveModuleDownloadDialog
          styleId={'InteractiveModuleDownloadDialog_' + id}
          description={description}
          id={id}
          handleCloseInteractiveModuleDownloadDialog={
            this.handleCloseInteractiveModuleDownloadDialog
          }
        />
      </dialog>
    )
  }
}

// <ChooseTypeDialog
//   styleId={'ChooseTypeDialog_' + id}
//   handleClick={this.handleChangeType}
//   id={id}
// />
