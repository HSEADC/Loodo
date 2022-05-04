// Lesson_4

import React from 'react'
import ReactDOM from 'react-dom'
import EveryEffectContainer from '../containers/EveryEffectContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <EveryEffectContainer effect={'AutoWah'} />,
    document.body.getElementsByClassName('interactive_module_28')[0]
  )
})
