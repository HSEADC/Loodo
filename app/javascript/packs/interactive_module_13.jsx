// Lesson_2

import React from 'react'
import ReactDOM from 'react-dom'
import BPMSynth from '../containers/BPMSynthContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BPMSynth />,
    document.body.getElementsByClassName('interactive_module_13')[0]
  )
})
