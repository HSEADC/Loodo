import React from 'react'
import ReactDOM from 'react-dom'
import LessonContainer from '../containers/LessonContainer'
import TrigerContainer from '../containers/TrigerContainer'

document.addEventListener('DOMContentLoaded', () => {
  const article = document.body.getElementsByTagName('article')[0]

  if (article) {
    ReactDOM.render(
      <LessonContainer interactiveModules={[TrigerContainer]} />,
      document.body.getElementsByTagName('article')[0]
    )
  }
})
