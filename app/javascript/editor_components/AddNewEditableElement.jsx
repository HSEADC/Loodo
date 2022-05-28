import classnames from 'classnames'
import React, { PureComponent } from 'react'
import ModuleSettings from './ModuleSettings'
import AddButton from '../editor_components/AddButton'
import AddModuleDialog from '../editor_components/AddModuleDialog'

export default class AddNewEditableElement extends PureComponent {
  constructor(props) {
    super(props)
    this.field = React.createRef()

    this.state = {
      plusWasPressed: false,
      idOfPressed: 0
    }
  }

  componentDidMount() {
    const { id } = this.props

    let dialog = document.getElementById('AddModuleDialog_' + id)
    let firstDialog = document.getElementById('AddModuleDialog_1')
  }

  handleOpenAddModule = (id) => {
    const { plusWasPressed, idOfPressed } = this.state

    let dialog = document.getElementById(id)

    plusWasPressed ? dialog.close() : dialog.show()

    this.setState({
      plusWasPressed: !plusWasPressed,
      idOfPressed: id
    })
  }

  handleAddElement = (id, type) => {
    const { handleAddElement, elements, handleUpdateElement } = this.props

    let dialog = document.getElementById('AddModuleDialog_' + id)

    dialog.close()
    handleAddElement(type)

    console.log(this.field.current)

    this.setState({
      idOfPressed: false
    })
  }

  handleOpenOptions = () => {}

  handleDelete = () => {
    const { id, handleDelete } = this.props
    const { plusWasPressed } = this.state

    this.setState({
      plusWasPressed: !plusWasPressed
    })
  }

  render() {
    const { id } = this.props

    return (
      <div className="AddNewEditableElement">
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
        <input
          ref={this.field}
          value={''}
          onInput={() => {
            this.handleAddElement(id, 'paragraph')
          }}
          className="Input"
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
