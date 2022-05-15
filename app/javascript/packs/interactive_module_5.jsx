// Lesson_1

import React from 'react'
import ReactDOM from 'react-dom'
import ToneSynthContainer from '../containers/ToneSynthContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ToneSynthContainer disabled={3} synth={'ToneSynth'} />,
    document.body.getElementsByClassName('interactive_module_5')[0]
  )
})
