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
      draggedPosition: null
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
        this.handleUpdateElementSuccess(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  handleUpdateElementSuccess = (data) => {
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
    return arr
  }

  handleDropLesson = (position) => {
    const { updateLessonUrl } = this.props
    const { lessons, draggedPosition } = this.state
    let newDraggedPosition = null
    let requestData = {}

    let newLessons = this.arrayMove(lessons, draggedPosition, position)

    newLessons.forEach((lesson, i) => {
      lesson.position = i
    })

    this.setState({
      lessons: newLessons,
      draggedPosition: newDraggedPosition
    })

    requestData = {
      newLessons
    }

    console.log(newLessons)

    fetch(updateLessonUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        this.handleUpdateElementSuccess(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  handleDragLesson = (position) => {
    let newDraggedPosition = position

    this.setState({
      draggedPosition: newDraggedPosition
    })
  }

  renderLessons = () => {
    const { lessonsUrl } = this.props
    const { lessons } = this.state
    const lessonComponents = []

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
        <div className="LessonsEditorHeading">Уроки</div>
        <DndProvider backend={HTML5Backend}>{this.renderLessons()}</DndProvider>
        <div className="AddLessonContainer">
          <a className="AddLesson" href={newLessonUrl}>
            + Добавить урок
          </a>
        </div>
      </div>
    )
  }
}
