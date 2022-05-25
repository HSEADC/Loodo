import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { useDrag } from 'react-dnd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import LessonsListItem from '../lessons_components/LessonsListItem'

export default class LessonsEditor extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      lessons: [],
      draggedPosition: null,
      draggedId: null
    }
  }

  componentDidMount() {
    const { lessonsUrl } = this.props

    fetch(lessonsUrl + '.json')
      .then((response) => response.json())
      .then((data) => {
        const lessons = this.modifyLessonsToStore(data.lessons)

        this.setState({
          lessons
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

  modifyLessonsToStore = (lessons) => {
    const modifiedLessons = lessons.map((lesson) => {
      return {
        id: lesson.id,
        position: lesson.position,
        name: lesson.name,
        description: lesson.description,
        published: lesson.published,
        isNew: false,
        selectIsOpened: false
      }
    })

    return modifiedLessons
  }

  handleDeleteLesson = (id) => {
    const { lessonsUrl } = this.props
    const { lessons } = this.state
    const newLessons = []
    let requestData = {}

    lessons.forEach((lesson, i) => {
      if (lesson.id != id) {
        newLessons.push(lesson)
      }
    })

    this.setState({
      lessons: newLessons
    })

    fetch(lessonsUrl + '/' + id, {
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
    const lessons = this.modifyLessonsToStore(data.lessons)

    this.setState({
      lessons
    })
  }

  arrayMove = (arr, old_index, new_index) => {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1
      while (k--) {
        arr.push(undefined)
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
    return arr // for testing
  }

  handleDropLesson = (id, position) => {
    const { lessons, draggedPosition } = this.state
    let newDraggedId = null
    let newDraggedPosition = null

    this.setState({
      lessons: this.arrayMove(lessons, draggedPosition, position),
      draggedId: newDraggedId,
      draggedPosition: newDraggedPosition
    })
  }

  handleDragLesson = (id, position) => {
    let newDraggedId = id
    let newDraggedPosition = position

    console.log('=====')
    console.log(newDraggedId)
    console.log(newDraggedPosition)

    this.setState({
      draggedId: newDraggedId,
      draggedPosition: newDraggedPosition
    })
  }

  renderLessons = () => {
    const { lessonsUrl } = this.props
    const { lessons } = this.state
    const lessonComponents = []

    lessons.forEach((lesson, i) => {
      lesson.position = i
    })

    lessons.forEach((lesson, i) => {
      lessonComponents.push(
        <LessonsListItem
          {...lesson}
          handleDeleteLesson={this.handleDeleteLesson}
          lessonsUrl={lessonsUrl}
          handleDropLesson={this.handleDropLesson}
          handleDragLesson={this.handleDragLesson}
          key={i}
        />
      )
    })

    return lessonComponents
  }

  render() {
    const { newLessonUrl } = this.props

    return (
      <div className="LessonsEditor">
        <div className="LessonsEditorHeading">Настройка уроков</div>
        <DndProvider backend={HTML5Backend}>{this.renderLessons()}</DndProvider>
        <a href={newLessonUrl}>Добавить урок</a>
      </div>
    )
  }
}
