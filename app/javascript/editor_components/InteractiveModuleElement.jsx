import classnames from 'classnames'
import React, { PureComponent } from 'react'
import InteractiveModuleSettings from './InteractiveModuleSettings'
import TrigerContainer from '../containers/TrigerContainer'
import AddModuleDialog from './dialogs/AddModuleDialog'
import ElementSettingsDialog from './dialogs/ElementSettingsDialog'

export default class InteractiveModuleElement extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      plusWasPressed: false,
      dragWasPressed: false,
      idOfPressed: 0
    }
  }

  handleDelete = () => {
    const { id, handleDelete } = this.props
    const { plusWasPressed } = this.state

    let elementSettingsDialog = document.getElementById(
      'ElementSettingsDialog_' + id
    )

    this.setState({
      plusWasPressed: !plusWasPressed
    })

    handleDelete(id)
    elementSettingsDialog.close()
  }

  handleOpenAddModule = (id) => {
    const { plusWasPressed, idOfPressed, dragWasPressed } = this.state

    let elementSettingsDialog = document.getElementById(
      'ElementSettingsDialog_' + id
    )
    let addModuleDialog = document.getElementById('AddModuleDialog_' + id)

    if (dragWasPressed) {
      elementSettingsDialog.close()
      addModuleDialog.show()

      this.setState({
        plusWasPressed: true,
        dragWasPressed: false,
        idOfPressed: id
      })
    } else {
      plusWasPressed ? addModuleDialog.close() : addModuleDialog.show()
      this.setState({
        plusWasPressed: !plusWasPressed,
        idOfPressed: id
      })
    }
  }

  handleOpenOptions = (id) => {
    const { dragWasPressed, idOfPressed, plusWasPressed } = this.state

    let elementSettingsDialog = document.getElementById(
      'ElementSettingsDialog_' + id
    )

    console.log('=======')
    console.log(id)
    console.log(elementSettingsDialog)
    console.log('=======')

    let addModuleDialog = document.getElementById('AddModuleDialog_' + id)

    if (plusWasPressed) {
      addModuleDialog.close()
      elementSettingsDialog.show()

      this.setState({
        plusWasPressed: false,
        dragWasPressed: true,
        idOfPressed: id
      })
    } else {
      dragWasPressed
        ? elementSettingsDialog.close()
        : elementSettingsDialog.show()
      this.setState({
        dragWasPressed: !dragWasPressed,
        idOfPressed: id
      })
    }
  }

  handleAddElement = () => {
    const { handleAddElement } = this.props

    let dialog = document.getElementById(id)

    dialog.close()
    handleAddElement(type)

    this.setState({
      idOfPressed: false
    })
  }

  render() {
    const { type, text, isEditing, interactiveModule, id } = this.props

    const classes = classnames({
      InteractiveModuleElement: true,
      [`${type}`]: true,
      editing: isEditing
    })

    return (
      <div className={classes}>
        <InteractiveModuleSettings
          handleOpenOptions={this.handleOpenOptions}
          handleOpenAddModule={this.handleOpenAddModule}
          handleDelete={this.handleDelete}
          id={id}
        />

        <AddModuleDialog
          handleAddElement={this.handleAddElement}
          styleId={'AddModuleDialog_' + id}
          id={id}
        />
        <ElementSettingsDialog
          handleChangeElementType={this.handleChangeElementType}
          handleChangeType={this.handleChangeType}
          handleDeleteElement={this.handleDelete}
          styleId={'ElementSettingsDialog_' + id}
          id={id}
        />
        <div className="interactive_module_1">
          <TrigerContainer />
        </div>
      </div>
    )
  }
}
