import React, { PureComponent } from 'react'
import classnames from 'classnames'
import { useDrag, useDrop } from 'react-dnd'

import LessonMenuSelect from '../control_components/LessonMenuSelect'

const LessonsListItem = (props) => {
  const {
    id,
    name,
    description,
    published,
    position,
    lessonsUrl,
    handleDeleteLesson,
    handleDragLesson,
    handleDropLesson
  } = props

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'Card',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'Card',
    drop: () => handleDropLesson(id, position),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))

  const lessonUrl = lessonsUrl + '/' + id
  const lessonEditUrl = lessonsUrl + '/' + id + '/edit'
  const lessonPublishUrl = lessonsUrl + '/' + id + '/publish'
  const publishActionText = published ? 'Распубликовать' : 'Опубликовать'

  let itemName
  let itemDescription

  if (name === null) {
    itemName = 'Без названия'
  } else {
    itemName = name
  }

  if (description === null) {
    itemDescription = 'Без описания'
  } else {
    itemDescription = description
  }

  return (
    <div
      onDragStart={() => {
        handleDragLesson(id, position)
      }}
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
      className="LessonsListItemContainer"
    >
      <div ref={drop}>
        <LessonMenuSelect
          lessonPublishUrl={lessonPublishUrl}
          lessonEditUrl={lessonEditUrl}
          published={published}
          handleDeleteLesson={handleDeleteLesson}
          id={id}
        />
        <a className="LessonsListItem" href={lessonUrl}>
          <div className="name">{itemName}</div>
          <div className="description">{itemDescription}</div>
        </a>
      </div>
    </div>
  )
}

export default LessonsListItem

// export default class LessonsListItem extends PureComponent {
//   constructor(props) {
//     super(props)
//   }
//
//   render() {
//     const {
//       id,
//       name,
//       description,
//       published,
//       lessonsUrl,
//       handleDeleteLesson
//     } = this.props
//     const lessonUrl = lessonsUrl + '/' + id
//     const lessonEditUrl = lessonsUrl + '/' + id + '/edit'
//     const lessonPublishUrl = lessonsUrl + '/' + id + '/publish'
//     const publishActionText = published ? 'Распубликовать' : 'Опубликовать'
//
//     let itemName
//     let itemDescription
//
//     if (name === null) {
//       itemName = 'Без названия'
//     } else {
//       itemName = name
//     }
//
//     if (description === null) {
//       itemDescription = 'Без описания'
//     } else {
//       itemDescription = description
//     }
//
//     return (
//       <div className="LessonsListItemContainer">
//         <LessonMenuSelect
//           lessonPublishUrl={lessonPublishUrl}
//           lessonEditUrl={lessonEditUrl}
//           published={published}
//           handleDeleteLesson={handleDeleteLesson}
//           id={id}
//         />
//         <a className="LessonsListItem" href={lessonUrl}>
//           <div className="name">{itemName}</div>
//           <div className="description">{itemDescription}</div>
//         </a>
//       </div>
//     )
//   }
// }
