import React from 'react'
import ReactDOM from 'react-dom'
import Editor from '../containers/Editor'

document.addEventListener('DOMContentLoaded', () => {
  const editorElement = document.getElementById('editor')
  const props = JSON.parse(editorElement.dataset.props)
  ReactDOM.render(<Editor {...props} />, editorElement)
})
