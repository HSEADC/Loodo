// Lesson_1

import React from 'react'
import ReactDOM from 'react-dom'
import TrigerCodeContainer from '../containers/TrigerCodeContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TrigerCodeContainer />,
    document.body.getElementsByClassName('interactive_module_3')[0]
  )
})
