// // Lesson_1
//
// import React from 'react'
// import ReactDOM from 'react-dom'
// import MelodySynthChooseEffectContainer from '../containers/MelodySynthChooseEffectContainer'
//
// let source, origin
//
// window.addEventListener(
//   'message',
//   (event) => {
//     source = event.source
//     origin = event.origin
//
//     source.postMessage(
//       {
//         type: 'connection done'
//       },
//       origin
//     )
//   },
//   false
// )
//
// function postMessageToWindow(type, data) {
//   console.log('test', data)
//
//   source.postMessage(
//     {
//       type: type,
//       data: data
//     },
//     origin
//   )
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <MelodySynthChooseEffectContainer
//       postMessageToWindow={postMessageToWindow}
//     />,
//     document.body.getElementsByClassName('interactive_module_7')[0]
//   )
// })

// Lesson_1

import React from 'react'
import ReactDOM from 'react-dom'
import ToneSynthContainer from '../containers/ToneSynthContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ToneSynthContainer disabled={1} synth={'ToneSynth'} />,
    document.body.getElementsByClassName('interactive_module_7')[0]
  )
})
