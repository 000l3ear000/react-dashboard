import React, { Component} from 'react';
import { Button } from 'react-bootstrap';

class BtnCellRenderer extends Component {
  constructor(props) {
    super(props);
    this.btnClickedHandler = this.btnClickedHandler.bind(this);
  }
  btnClickedHandler() {
   this.props.clicked(this.props.value);
  }
  render() {
    return (
      <Button className="shadow-1 btn-sm theme-bg border text-white border-0" onClick={this.btnClickedHandler}>Open</Button>
    )
  }
}

export default BtnCellRenderer;