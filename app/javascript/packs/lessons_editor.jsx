import React from 'react'
import ReactDOM from 'react-dom'
import LessonsEditor from '../containers/LessonsEditor'

document.addEventListener('DOMContentLoaded', () => {
  const editorElement = document.getElementById('lessonsEditor')
  const props = JSON.parse(editorElement.dataset.props)
  ReactDOM.render(<LessonsEditor {...props} />, editorElement)
})
