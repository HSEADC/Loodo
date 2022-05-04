// Lesson_4

import React from 'react'
import ReactDOM from 'react-dom'
import EveryEffectContainer from '../containers/EveryEffectContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <EveryEffectContainer effect={'Tremolo'} />,
    document.body.getElementsByClassName('interactive_module_43')[0]
  )
})
