import PropTypes from 'prop-types'
import classnames from 'classnames'

import React, { PureComponent } from 'react'

export default class LessonMenuDialog extends PureComponent {
  constructor(props) {
    super(props)
  }

  log = () => {
    const { id } = this.props

    console.log(id)
  }

  render() {
    const {
      text,
      published,
      lessonEditUrl,
      lessonPublishUrl,
      handleDeleteLesson,
      id,
      styleId
    } = this.props

    const publishActionText = published ? 'Распубликовать' : 'Опубликовать'

    return (
      <dialog className="LessonMenuDialog" id={styleId}>
        <a href={lessonEditUrl}>Редактировать</a>
        <a href={lessonPublishUrl}>{publishActionText}</a>
        <div
          className="SettingsButton"
          onClick={() => {
            handleDeleteLesson(id)
          }}
        >
          Удалить
        </div>
      </dialog>
    )
  }
}
