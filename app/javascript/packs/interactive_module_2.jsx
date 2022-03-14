import React from 'react'
import ReactDOM from 'react-dom'
import KeyboardContainer from '../containers/KeyboardContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <KeyboardContainer />,
    document.body.getElementsByClassName('interactive_module_2')[0]
  )
})
