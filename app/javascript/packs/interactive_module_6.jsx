import React from 'react'
import ReactDOM from 'react-dom'
import MelodySynthEffectContainer from '../containers/MelodySynthEffectContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MelodySynthEffectContainer />,
    document.body.appendChild(document.createElement('div'))
  )
})
