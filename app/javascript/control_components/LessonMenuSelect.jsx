import PropTypes from 'prop-types'
import classnames from 'classnames'

import React, { PureComponent } from 'react'

export default class LessonMenuSelect extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isOpened: false
    }
  }

  handleOpenSelect = () => {
    const { isOpened } = this.state

    this.setState({
      isOpened: !isOpened
    })
  }

  render() {
    const {
      text,
      published,
      lessonEditUrl,
      lessonPublishUrl,
      handleDeleteLesson,
      id
    } = this.props

    const publishActionText = published ? 'Распубликовать' : 'Опубликовать'

    const classes = classnames({
      OptionsSelectContainer: true,
      on: this.state.isOpened
    })

    return (
      <div className="LessonsMenuSelect">
        <div
          className="KebabMenuIcon"
          onClick={() => {
            this.handleOpenSelect()
          }}
        ></div>
        <div className={classes}>
          <a className="edit" href={lessonEditUrl}>
            Редактировать
          </a>
          <a className="edit" href={lessonPublishUrl}>
            {publishActionText}
          </a>
          <div
            onClick={() => {
              handleDeleteLesson(id)
            }}
            className="delete"
          >
            Удалить
          </div>
        </div>
      </div>
    )
  }
}
