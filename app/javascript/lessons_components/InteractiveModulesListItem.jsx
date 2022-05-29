import React, { PureComponent } from 'react'
import classnames from 'classnames'

import InteractiveModuleSettingsDialog from '../editor_components/dialogs/InteractiveModuleSettingsDialog'

export default class InteractiveModulesListItem extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      dialogIsOpened: false
    }
  }

  handleOpenInteractiveModuleSettings = (id) => {
    const { handleCloseOpenedDialog } = this.props
    const { dialogIsOpened } = this.state

    let interactiveModuleSettingsDialog = document.getElementById(
      'InteractiveModuleSettingsDialog_' + id
    )

    handleCloseOpenedDialog(interactiveModuleSettingsDialog)

    this.setState({
      dialogIsOpened: !dialogIsOpened
    })
  }

  render() {
    const { id, description, interactiveModulesUrl } = this.props

    const interactiveModuleUrl = interactiveModulesUrl + '/' + id
    // const lessonUrl = lessonsUrl + '/' + id
    // const lessonEditUrl = lessonsUrl + '/' + id + '/edit'
    // const lessonPublishUrl = lessonsUrl + '/' + id + '/publish'
    // const publishActionText = published ? 'Распубликовать' : 'Опубликовать'

    return (
      <div className="InteractoModulesListItemContainer">
        <a className="InteractiveModulesListItem" href={interactiveModuleUrl}>
          <div className="name">{description}</div>
        </a>
        <div
          onClick={() => {
            this.handleOpenInteractiveModuleSettings(id)
          }}
          className="SettingsIconContainer"
        >
          <div className="KebabMenuIcon"></div>
        </div>
        <InteractiveModuleSettingsDialog
          handleDeleteElement={() => {
            console.log(1)
          }}
          description={description}
          id={id}
          styleId={'InteractiveModuleSettingsDialog_' + id}
        />
      </div>
    )
  }
}
