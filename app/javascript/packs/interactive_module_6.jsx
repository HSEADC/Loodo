// Lesson_1

import React from 'react'
import ReactDOM from 'react-dom'
import MelodySynthEffectContainer from '../containers/MelodySynthEffectContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MelodySynthEffectContainer />,
    document.body.getElementsByClassName('interactive_module_6')[0]
  )
})
