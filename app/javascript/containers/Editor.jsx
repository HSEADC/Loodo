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

  handleAddElement = (elementName) => {
    console.log(elementName)

    const { elements } = this.state
    const newElements = [...elements]

    newElements.push({
      id: this.generateId(6),
      type: elementName,
      text: '',
      isNew: true
    })

    this.setState({
      elements: newElements
    })
  }

  handleSaveElementText = (id, text) => {
    const { elements } = this.state
    const newElements = []

    element.forEach((element, i) => {
      if (element.id === id) {
        element.text = text
        element.isNew = false
      }

      newElements.push(element)
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
          handleInput={this.handleSaveElementText}
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
