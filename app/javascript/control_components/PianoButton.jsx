import React from "react";

export default class PianoButton extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("ommouseup", this.props.handleUp);
    window.addEventListener("keydown", this.props.keyDown);
    window.addEventListener("keyup", this.props.keyUp);
  }

  render() {
    return (
      <div
        id={"PianoKey" + this.props.buttonId}
        className={this.props.classes.join(" ")}
        onMouseDown={this.props.handleDown}
        onMouseUp={this.props.handleUp}
      ></div>
    );
  }
}
