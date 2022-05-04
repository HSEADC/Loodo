// Lesson_1

import React from 'react'
import ReactDOM from 'react-dom'
import ToneSynthContainer from '../containers/ToneSynthContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ToneSynthContainer disabled={2} />,
    document.body.getElementsByClassName('interactive_module_10')[0]
  )
})
