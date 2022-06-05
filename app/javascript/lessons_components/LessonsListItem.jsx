import React, { PureComponent, useEffect } from 'react'
import classnames from 'classnames'
import { useDrag, useDrop } from 'react-dnd'

import LessonMenuDialog from '../editor_components/dialogs/LessonMenuDialog'

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
    handleOpenLessonMenuDialog,
    handleDropLesson
  } = props

  useEffect(() => {
    let lessonMenuDialog = document.getElementById('LessonMenuDialog_' + id)
    lessonMenuDialog.close()
  }, [])

  function handleOpenDialog(id) {
    let lessonMenuDialog = document.getElementById('LessonMenuDialog_' + id)
    handleOpenLessonMenuDialog(lessonMenuDialog)
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'Card',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'Card',
    drop: () => handleDropLesson(position),
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
      className="onDragContainer"
      onDragStart={() => {
        handleDragLesson(position)
      }}
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move'
      }}
    >
      <div className="onDropContainer" ref={drop}>
        <div className="LessonsListItemContainer">
          <a className="LessonsListItem" href={lessonUrl}>
            <div className="name">{itemName}</div>
            <div className="description">{itemDescription}</div>
          </a>

          <div className="SettingsIconContainer">
            <div
              className="KebabMenuIcon"
              onClick={() => {
                handleOpenDialog(id)
              }}
            ></div>
          </div>

          <LessonMenuDialog
            styleId={'LessonMenuDialog_' + id}
            lessonPublishUrl={lessonPublishUrl}
            lessonEditUrl={lessonEditUrl}
            published={published}
            handleDeleteLesson={handleDeleteLesson}
            id={id}
          />
        </div>
      </div>
    </div>
  )
}

export default LessonsListItem
