import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import EditableElement from '../editor_components/EditableElement'
import AddNewEditableElement from '../editor_components/AddNewEditableElement'
import InteractiveModuleElement from '../editor_components/InteractiveModuleElement'
import AddButton from '../editor_components/AddButton'
import CourseHeader from '../editor_components/CourseHeader'

export default class Editor extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      elements: [],
      lessonDescription: {}
    }
  }

  componentDidMount() {
    const { elementsUrl, name, description } = this.props

    fetch(elementsUrl)
      .then((response) => response.json())
      .then((data) => {
        const elements = this.modifyElementsToStore(data.elements)
        const lessonDescription = this.modifyLessonDescriptionToStore(
          name,
          description
        )

        this.setState({
          elements,
          lessonDescription
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

  modifyLessonDescriptionToStore = (name, description) => {
    return {
      name: name,
      description: description
    }
  }

  modifyElementsToStore = (elements) => {
    const modifiedElements = elements.map((element) => {
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

    return modifiedElements
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

  handleUpdateLessonSuccess = (name, description) => {
    const lessonDescription = this.modifyLessonDescriptionToStore(
      name,
      description
    )

    this.setState({
      lessonDescription
    })
  }

  handleBlurLesson = (object) => {
    const updateLessonUrl = this.props.updateLessonUrl
    let requestData = {
      name: object.name,
      description: object.description
    }

    this.setState({
      lessonDescription: object
    })

    fetch(updateLessonUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        this.handleUpdateElementSuccess(data.name, data.description)
      })
      .catch((error) => {
        console.error('Error:', error)
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

  handleDeleteElement = (id) => {
    const updateElementUrl = this.props.updateElementUrl + `/${id}`
    const { elements } = this.state
    const newElements = []
    let requestData = {}

    elements.forEach((element, i) => {
      if (element.id != id) {
        newElements.push(element)
      }
    })

    this.setState({
      elements: newElements
    })

    fetch(updateElementUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        this.handleDeleteElementSuccess(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  handleDeleteElementSuccess = (data) => {
    const elements = this.modifyElementsToStore(data.elements)

    this.setState({
      elements
    })
  }

  renderElements = () => {
    const { elements } = this.state
    const elementComponents = []

    elements.forEach((element, i) => {
      if (element.type === 'module') {
        elementComponents.push(
          <InteractiveModuleElement
            {...element}
            isActive={element.isEditing}
            handleFocus={this.handleFocusElement}
            handleBlur={this.handleBlurElement}
            handleDelete={this.handleDeleteElement}
            key={i}
          />
        )
      } else {
        elementComponents.push(
          <EditableElement
            {...element}
            isActive={element.isEditing}
            handleFocus={this.handleFocusElement}
            handleBlur={this.handleBlurElement}
            handleDelete={this.handleDeleteElement}
            handleAddElement={this.handleAddElement}
            key={i}
          />
        )
      }
    })

    return elementComponents
  }

  render() {
    const { elements, lessonDescription } = this.state

    return (
      <div className="Editor">
        <CourseHeader
          name={lessonDescription.name}
          description={lessonDescription.description}
          handleBlur={this.handleBlurLesson}
        />
        {this.renderElements()}
        <AddNewEditableElement
          id="AddNewElement"
          handleAddElement={this.handleAddElement}
        />
        <div className="AddButtonContainer"></div>
      </div>
    )
  }
}

// <AddButton handleClick={this.handleAddElement} />
//
// <div className="CourseHeaderContainer">
//   <div className="NameContainer">
//     <div className="CaptionHeader">Название урока</div>
//
//     <div
//       className={'Input'}
//       onFocus={this.handleFocus}
//       onBlur={this.handleBlur}
//       contentEditable={true}
//       suppressContentEditableWarning={true}
//     />
//   </div>
//
//   <div className="DescriptionContainer">
//     <div className="CaptionHeader">Описание</div>
//     <div
//       className={'Input'}
//       contentEditable={true}
//       suppressContentEditableWarning={true}
//     />
//   </div>
// </div>
