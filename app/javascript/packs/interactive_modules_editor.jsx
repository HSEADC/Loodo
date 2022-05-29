import React from 'react'
import ReactDOM from 'react-dom'
import InteractiveModulesEditor from '../containers/InteractiveModulesEditor'

document.addEventListener('DOMContentLoaded', () => {
  const editorElement = document.getElementById('interactiveModulesEditor')
  const props = JSON.parse(editorElement.dataset.props)
  ReactDOM.render(<InteractiveModulesEditor {...props} />, editorElement)
})
