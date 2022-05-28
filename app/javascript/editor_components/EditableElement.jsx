import classnames from 'classnames'
import React, { PureComponent } from 'react'
import ModuleSettings from './ModuleSettings'
import AddButton from '../editor_components/AddButton'
import AddModuleDialog from '../editor_components/AddModuleDialog'

export default class EditableElement extends PureComponent {
  constructor(props) {
    super(props)
    this.field = React.createRef()

    this.state = {
      plusWasPressed: false,
      idOfPressed: 0
    }
  }

  componentDidMount() {
    const { isNew, id } = this.props
    this.setInnerText()

    if (isNew) {
      this.field.current.focus()
    }

    let dialog = document.getElementById('AddModuleDialog_' + id)
    let firstDialog = document.getElementById('AddModuleDialog_1')
  }

  componentDidUpdate() {
    this.setInnerText()
  }

  handleOpenAddModule = (id) => {
    const { plusWasPressed, idOfPressed } = this.state

    let dialog = document.getElementById('AddModuleDialog_' + id)

    plusWasPressed ? dialog.close() : dialog.show()

    this.setState({
      plusWasPressed: !plusWasPressed,
      idOfPressed: id
    })
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

  handleOpenOptions = () => {}

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

    this.setState({
      plusWasPressed: !plusWasPressed
    })

    // handleDelete(id)
  }

  render() {
    const { type, text, id } = this.props

    const classes = classnames({
      EditableElement: true,
      [`${type}`]: true
    })

    let plusWasPressed = this.state.plusWasPressed

    let open = 'open'

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

// <dialog className="AddModuleDialog" id={'AddModuleDialog_' + id}>
//   This is an open dialog window
// </dialog>

// <div className="AddButtonContainer">
//   {plusWasPressed ? <AddButton /> : ''}
// </div>
