import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import Element from '../editor_components/Element'

export default class Viewer extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      elements: []
    }
  }

  componentDidMount() {
    const { elementsUrl } = this.props

    fetch(elementsUrl)
      .then((response) => response.json())
      .then((data) => {
        const elements = data.elements.map((element) => {
          return {
            id: element.id,
            position: element.position,
            type: element.type,
            text: element.text
          }
        })

        this.setState({
          elements
        })
      })
  }

  renderElements = () => {
    const { elements } = this.state
    const elementComponents = []

    elements.forEach((element, i) => {
      elementComponents.push(<Element {...element} key={i} />)
    })

    return elementComponents
  }

  render() {
    return <div className="Viewer">{this.renderElements()}</div>
  }
}
