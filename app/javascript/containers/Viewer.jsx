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
    const { name, description } = this.props

    return (
      <div className="Viewer">
        <div className="CourseHeaderContainer">
          <div className="NameContainer">
            <h5>Название урока</h5>
            <div>{name}</div>
          </div>
          <div className="DescriptionContainer">
            <h5>Описание</h5>
            <div>{description}</div>
          </div>
        </div>
        {this.renderElements()}
      </div>
    )
  }
}
