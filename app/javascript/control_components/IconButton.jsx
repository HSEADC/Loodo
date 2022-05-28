import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

export default class IconButton extends PureComponent {
  constructor(props) {
    super(props)

    this.div = React.createRef()
  }

  render() {
    const { type, handleClick } = this.props

    let classes

    switch (type) {
      case 'Plus':
        classes = 'PlusIcon'
        break
      case 'Drag':
        classes = 'DragIcon'
        break
      case 'Delete':
        classes = 'DeleteIcon'
        break
      case 'DownMediumArrow':
        classes = 'DownMediumArrowIcon'
        break
      case 'UpMediumArrow':
        classes = 'UpMediumArrowIcon'
        break
      default:
    }

    return (
      <div ref={this.field} className={classes} onClick={handleClick}>
        <div className="Image"></div>
      </div>
    )
  }
}
