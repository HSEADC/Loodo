import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import InteractiveModulesListItem from '../lessons_components/InteractiveModulesListItem'

export default class InteractiveModulesEditor extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      interactiveModules: [],
      openedDialog: null
    }
  }

  componentDidMount() {
    const { interactiveModulesUrl } = this.props

    fetch(interactiveModulesUrl + '.json')
      .then((response) => response.json())
      .then((data) => {
        const interactiveModules = this.modifyInteractiveModulesToStore(
          data.interactive_modules
        )

        this.setState({
          interactiveModules
        })
      })
  }

  modifyInteractiveModulesToStore = (interactiveModules) => {
    const modifiedInteractiveModules = interactiveModules.map(
      (interactiveModule) => {
        return {
          id: interactiveModule.id,
          description: interactiveModule.description
        }
      }
    )

    return modifiedInteractiveModules
  }

  generateId = (length) => {
    var result = ''
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length

    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
  }

  handleCloseOpenedDialog = (dialogToOpen) => {
    const { openedDialog } = this.state

    if (openedDialog !== dialogToOpen && openedDialog !== null) {
      dialogToOpen.show()
      openedDialog.close()
      this.setState({
        openedDialog: dialogToOpen
      })
    } else if (openedDialog === null) {
      dialogToOpen.show()
      this.setState({
        openedDialog: dialogToOpen
      })
    } else if (openedDialog === dialogToOpen) {
      dialogToOpen.close()
      this.setState({
        openedDialog: null
      })
    }
  }

  renderInteractiveModules = () => {
    const { interactiveModulesUrl } = this.props
    const { interactiveModules } = this.state
    const interactiveModulesComponents = []

    interactiveModules.forEach((interactiveModule, i) => {
      interactiveModulesComponents.push(
        <InteractiveModulesListItem
          id={interactiveModule.id}
          interactiveModulesUrl={interactiveModulesUrl}
          handleCloseOpenedDialog={this.handleCloseOpenedDialog}
          description={interactiveModule.description}
          key={i}
        />
      )
    })

    return interactiveModulesComponents
  }

  render() {
    const { newLessonUrl } = this.props

    return (
      <div className="InteractiveModulesEditor">
        <div className="InteractiveModulesEditorHeading">
          Интерактивные модули
        </div>
        {this.renderInteractiveModules()}
        <a>Добавить интерактивный модуль</a>
      </div>
    )
  }
}
