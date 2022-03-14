import React from 'react'
import ReactDOM from 'react-dom'
import SequencerContainer from '../containers/SequencerContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SequencerContainer />,
    document.body.getElementsByClassName('interactive_module_4')[0]
  )
})
