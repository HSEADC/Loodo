import React from 'react'
import ReactDOM from 'react-dom'
import SequencerFirstGameContainer from '../containers/SequencerFirstGameContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SequencerFirstGameContainer />,
    document.body.getElementsByClassName('interactive_module_8')[0]
  )
})
