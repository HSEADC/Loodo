// Lesson_1

import React from 'react'
import ReactDOM from 'react-dom'
import SamplerExampleButtonsContainer from '../containers/SamplerExampleButtonsContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SamplerExampleButtonsContainer />,
    document.body.getElementsByClassName('interactive_module_10')[0]
  )
})
