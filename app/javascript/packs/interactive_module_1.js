import React from 'react'
import ReactDOM from 'react-dom'
import TrigerContainer from '../containers/TrigerContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <TrigerContainer />,
    document.body.appendChild(document.createElement('div'))
  )
})
