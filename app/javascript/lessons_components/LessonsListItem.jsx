import React, { PureComponent } from 'react'

export default class LessonsListItem extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, name, description, published, lessonsUrl } = this.props
    const lessonUrl = lessonsUrl + '/' + id
    const lessonEditUrl = lessonsUrl + '/' + id + '/edit'
    const lessonPublishUrl = lessonsUrl + '/' + id + '/publish'
    const publishActionText = published ? 'Распубликовать' : 'Опубликовать'

    return (
      <div className="LessonsListItem">
        <a className="name" href={lessonUrl}>
          {name}
        </a>

        <div className="description">{description}</div>

        <a className="edit" href={lessonEditUrl}>
          Редактировать
        </a>

        <a className="edit" href={lessonPublishUrl}>
          {publishActionText}
        </a>
      </div>
    )
  }
}
