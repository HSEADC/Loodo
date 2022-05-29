import classnames from 'classnames'
import React, { PureComponent } from 'react'
import ModuleSettings from './ModuleSettings'
import AddButton from '../editor_components/AddButton'
import AddModuleDialog from './dialogs/AddModuleDialog'
import ElementSettingsDialog from './dialogs/ElementSettingsDialog'

export default class EditableElement extends PureComponent {
  constructor(props) {
    super(props)
    this.field = React.createRef()

    this.state = {
      plusWasPressed: false,
      dragWasPressed: false,
      idOfPressed: 0
    }
  }

  componentDidMount() {
    const { isNew, id } = this.props
    this.setInnerText()

    if (isNew) {
      this.field.current.focus()
    }

    let dialog = document.getElementById('ElementSettingsDialog_' + id)
    // dialog.show()
    let firstDialog = document.getElementById('AddModuleDialog_1')
  }

  componentDidUpdate() {
    this.setInnerText()
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

  handleAddElement = (id, type) => {
    const { handleAddElement } = this.props

    let dialog = document.getElementById(id)

    dialog.close()
    handleAddElement(type)

    this.setState({
      idOfPressed: false
    })
  }

  setInnerText = () => {
    const { text } = this.props
    const field = this.field.current
    field.innerText = text
  }

  handleFocus = () => {
    const { id, handleFocus } = this.props
    handleFocus(id)
  }

  handleBlur = () => {
    const { id, handleBlur } = this.props
    const field = this.field.current
    handleBlur(id, field.textContent)
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

  handleChangeType = (id, type) => {
    const { handleChangeElementType } = this.props

    let elementSettingsDialog = document.getElementById(
      'ElementSettingsDialog_' + id
    )

    elementSettingsDialog.close()
    handleChangeElementType(id, type)

    this.setState({
      dragWasPressed: false
    })
  }

  render() {
    const { type, text, id } = this.props

    const classes = classnames({
      EditableElement: true,
      [`${type}`]: true
    })

    return (
      <div className={classes}>
        <div className="ModuleSettingsAddButtonContainer">
          <ModuleSettings
            id={id}
            handleOpenAddModule={this.handleOpenAddModule}
            handleOpenOptions={this.handleOpenOptions}
          />

          <AddModuleDialog
            handleClick={this.handleAddElement}
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
        </div>
        <div
          className={'Input'}
          ref={this.field}
          contentEditable={true}
          suppressContentEditableWarning={true}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <div className={'CompositionBlock'}> </div>
      </div>
    )
  }
}
