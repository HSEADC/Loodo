import classnames from 'classnames'
import React, { PureComponent } from 'react'
import ModuleSettings from './ModuleSettings'

export default class CourseHeader extends PureComponent {
  constructor(props) {
    super(props)
    this.nameField = React.createRef()
    this.descriptionField = React.createRef()
  }

  componentDidMount() {
    this.setInnerText()
  }

  componentDidUpdate() {
    this.setInnerText()
  }

  setInnerText = () => {
    const { name, description } = this.props

    const nameField = this.nameField.current
    const descriptionField = this.descriptionField.current

    nameField.innerText = name
    descriptionField.innerText = description
  }

  handleBlur = () => {
    const { handleBlur } = this.props

    const nameFieldText = this.nameField.current.textContent
    const descriptionFieldText = this.descriptionField.current.textContent

    let newLessonDescription = {
      name: nameFieldText,
      description: descriptionFieldText
    }

    handleBlur(newLessonDescription)
  }

  render() {
    return (
      <div className="CourseHeaderContainer">
        <div className="NameContainer">
          <div>Название урока</div>
          <div
            className={'Input'}
            ref={this.nameField}
            contentEditable={true}
            suppressContentEditableWarning={true}
            onBlur={this.handleBlur}
          />
        </div>
        <div className="DescriptionContainer">
          <div>Описание</div>
          <div
            className={'Input'}
            ref={this.descriptionField}
            contentEditable={true}
            suppressContentEditableWarning={true}
            onBlur={this.handleBlur}
          />
        </div>
      </div>
    )
  }
}
