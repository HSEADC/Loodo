import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class InteractiveModuleDownloadDialog extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      buttonWasPressed: false
    }
  }

  render() {
    const {
      text,
      styleId,
      id,
      description,
      handleCloseInteractiveModuleDownloadDialog
    } = this.props

    return (
      <dialog className="InteractiveModuleDownloadDialog" id={styleId}>
        <div className="InteractiveModuleDownloadContainer">
          <div className="Description">
            <div className="Header">Название модуля</div>
            <input className="DescriptionInput" />
          </div>
          <div className="File">
            <div className="Header">Файл модуля</div>
            <input type="file" id="file" className="inputfile" />
            <label for="file">Выберите файл</label>
          </div>
          <div className="Submit">
            <div
              onClick={() => {
                handleCloseInteractiveModuleDownloadDialog(id)
              }}
              className="Cancel"
            >
              Отменить
            </div>
            <div className="Confirm">Подтвердить</div>
          </div>
        </div>
      </dialog>
    )
  }
}
