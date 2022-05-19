import React from 'react'
import ReactDOM from 'react-dom'
import Viewer from '../containers/Viewer'

document.addEventListener('DOMContentLoaded', () => {
  const viewerElement = document.getElementById('viewer')
  const props = JSON.parse(viewerElement.dataset.props)
  ReactDOM.render(<Viewer {...props} />, viewerElement)
})
