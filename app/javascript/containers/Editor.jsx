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
    console.log('yo')
    const { elementsUrl } = this.props

    fetch(elementsUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)

        this.setState({
          elements: data.elements
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

  handleSaveElementText = (id, tempId) => {
    const { elements } = this.state
    const newElements = []

    elements.forEach((element, i) => {
      if (element.id === tempId) {
        newElements.push({
          id: id,
          position: element.length,
          type: element.type,
          text: element.text
        })
      }

      newElements.push(element)
    })

    this.setState({
      elements: newElements
    })
  }

  updateElement = (id) => {
    const elements = [...this.state.elements]
    const newElements = []

    elements.forEach((element) => {
      if (element.id === id) {
        newElements.push({
          id: element.id,
          type: element.type,
          text: element.text
        })
      } else {
        newElements.push(comment)
      }
    })

    this.setState({
      element: newElements
    })
  }

  handleAddElement = (elementName) => {
    const { elements } = this.state
    const newElements = [...elements]

    const elementId = this.generateId(6)

    newElements.push({
      id: newElements.length + 1,
      position: newElements.length,
      type: elementName,
      text: '',
      isNew: true
    })

    this.setState({
      elements: newElements
    })

    const { createElementUrl } = this.props

    const data = {
      tempId: elementId,
      lesson_element: {
        position: 0,
        kind: elementName,
        text: ''
      }
    }

    fetch(createElementUrl, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        this.handleSaveElementText(data.id, data.tempId)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  handleUpdateElement = (id, elementText) => {
    const elements = [...this.state.comments]
    const newElements = []

    elements.forEach((element) => {
      if (elements.id === id) {
        newElements.push({
          id: elements.id,
          type: elements.type,
          text: elementtext,
          updating: true
        })
      } else {
        newElements.push(element)
      }
    })

    this.setState({
      elements: newElements
    })

    const updateElementUrl = this.props.updateElementUrl + `${id}`

    const data = {
      lesson_element: {
        position: 0,
        kind: elementName,
        text: elementText
      }
    }

    fetch(updateElementUrl, {
      method: 'PUT', // or 'POST'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        this.updateElement(data.id)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  // handleStartEditing = () => {
  //   const { elements } = this.state
  //
  //   this.setState({
  //
  //   })
  // }

  renderElements = () => {
    const { elements } = this.state
    const elementComponents = []

    elements.forEach((element, i) => {
      elementComponents.push(
        <Element
          {...element}
          handleInput={this.handleSaveElementText}
          handleClick={this.handleStartEditing}
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
