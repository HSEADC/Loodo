// // Lesson_1
//
// import React from 'react'
// import ReactDOM from 'react-dom'
// import SequencerContainer from '../containers/SequencerContainer'
//
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <SequencerContainer />,
//     document.body.getElementsByClassName('interactive_module_4')[0]
//   )
// })

// Lesson_1

import React from 'react'
import ReactDOM from 'react-dom'
import ToneSynthContainer from '../containers/ToneSynthContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ToneSynthContainer disabled={4} synth={'ToneSynth'} />,
    document.body.getElementsByClassName('interactive_module_4')[0]
  )
})
