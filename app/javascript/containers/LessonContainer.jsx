import React, { PureComponent } from 'react'

export default class LessonContainer extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.interactiveModules)
    const interactiveModules = this.props.interactiveModules

    const components = {
      [`${interactiveModules[0]}`]: interactiveModules[0]
    }

    const ComponentType = components[interactiveModules[0]]

    return (
      <div className="LessonContainer">
        <ComponentType />
      </div>
    )
  }
}
