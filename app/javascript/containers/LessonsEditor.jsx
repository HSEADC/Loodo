import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import LessonsListItem from '../lessons_components/LessonsListItem'

export default class LessonsEditor extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      lessons: []
    }
  }

  componentDidMount() {
    const { lessonsUrl } = this.props

    fetch(lessonsUrl + '.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          lessons: data.lessons
        })
      })
  }

  renderLessons = () => {
    const { lessonsUrl } = this.props
    const { lessons } = this.state
    const lessonComponents = []

    lessons.forEach((lesson, i) => {
      lessonComponents.push(
        <LessonsListItem {...lesson} lessonsUrl={lessonsUrl} key={i} />
      )
    })

    return lessonComponents
  }

  render() {
    const { newLessonUrl } = this.props

    return (
      <div className="LessonsEditor">
        {this.renderLessons()}
        <a href={newLessonUrl}>Добавить урок</a>
      </div>
    )
  }
}
