import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import Element from '../editor_components/Element'
import AddButton from '../editor_components/AddButton'

export default class Editor extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      elements: []
    }
  }

  componentDidMount() {
    const { elementsUrl } = this.props

    fetch(elementsUrl)
      .then((response) => response.json())
      .then((data) => {
        const elements = data.elements.map((element) => {
          return {
            id: element.id,
            position: element.position,
            type: element.type,
            text: element.text,
            isNew: false,
            isEditing: false,
            isSaving: false
          }
        })

        this.setState({
          elements
        })
      })
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

  handleAddElement = (elementName) => {
    const { createElementUrl } = this.props
    const { elements } = this.state
    const newElements = [...elements]

    const newElement = {
      id: this.generateId(6),
      position: newElements.length,
      type: elementName,
      text: '',
      isNew: true,
      isEditing: true,
      isSaving: false
    }

    const requestData = {
      temp_id: newElement.id,
      lesson_element: {
        position: newElement.position,
        type: newElement.type,
        text: ''
      }
    }

    newElements.push(newElement)

    this.setState({
      elements: newElements
    })

    fetch(createElementUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        this.handleAddElementSuccess(data.id, data.tempId)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  handleAddElementSuccess = (id, tempId) => {
    const { elements } = this.state
    const newElements = []

    elements.forEach((element, i) => {
      if (element.id === tempId) {
        newElements.push({
          id: id,
          position: element.position,
          type: element.type,
          text: element.text,
          isNew: element.isNew,
          isEditing: element.isEditing,
          isSaving: element.isSaving
        })
      } else {
        newElements.push(element)
      }
    })

    this.setState({
      elements: newElements
    })
  }

  handleFocusElement = (id) => {
    const { elements } = this.state
    const newElements = []

    elements.forEach((element, i) => {
      if (element.id === id) {
        newElements.push({
          id: id,
          position: element.position,
          type: element.type,
          text: element.text,
          isNew: element.isNew,
          isEditing: true,
          isSaving: false
        })
      } else {
        newElements.push(element)
      }
    })

    this.setState({
      elements: newElements
    })
  }

  handleBlurElement = (id, text) => {
    const updateElementUrl = this.props.updateElementUrl + `/${id}`
    const { elements } = this.state
    const newElements = []
    let requestData = {}

    elements.forEach((element) => {
      if (element.id === id) {
        const newElement = {
          id: element.id,
          position: element.position,
          type: element.type,
          text: text,
          isNew: element.isNew,
          isEditing: false,
          isSaving: true
        }

        requestData = {
          position: newElement.position,
          type: newElement.type,
          text: newElement.text
        }

        newElements.push(newElement)
      } else {
        newElements.push(element)
      }
    })

    this.setState({
      elements: newElements
    })

    fetch(updateElementUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        this.handleUpdateElementSuccess(data.id)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  handleUpdateElementSuccess = (id) => {
    const { elements } = this.state
    const newElements = []

    elements.forEach((element, i) => {
      if (element.id === id) {
        newElements.push({
          id: element.id,
          position: element.position,
          type: element.type,
          text: element.text,
          isNew: false,
          isEditing: false,
          isSaving: false
        })
      } else {
        newElements.push(element)
      }
    })

    this.setState({
      elements: newElements
    })
  }

  renderElements = () => {
    const { elements } = this.state
    const elementComponents = []

    elements.forEach((element, i) => {
      elementComponents.push(
        <Element
          {...element}
          handleFocus={this.handleFocusElement}
          handleBlur={this.handleBlurElement}
          key={i}
        />
      )
    })

    return elementComponents
  }

  render() {
    return (
      <div className="Editor">
        {this.renderElements()}
        <AddButton handleClick={this.handleAddElement} />
      </div>
    )
  }
}
