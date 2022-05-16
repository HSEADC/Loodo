// // Lesson_1
//
// import React from 'react'
// import ReactDOM from 'react-dom'
// import SequencerFirstGameContainer from '../containers/SequencerFirstGameContainer'
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
//         type: 'Connection done'
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
//     <SequencerFirstGameContainer postMessageToWindow={postMessageToWindow} />,
//     document.body.getElementsByClassName('interactive_module_8')[0]
//   )
// })

// Lesson_4

import React from 'react'
import ReactDOM from 'react-dom'
import EveryEffectContainer from '../containers/EveryEffectContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <EveryEffectContainer effect={'Chorus'} />,
    document.body.getElementsByClassName('interactive_module_8')[0]
  )
})
