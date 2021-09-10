import React, { Component} from 'react';
import { Button } from 'react-bootstrap';

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.btnClickedHandler = this.btnClickedHandler.bind(this);
  }
  btnClickedHandler() {
   this.props.clicked(this.props.value);
  }
  render() {
    return (
      <i className="fa fa-trash-alt text-c-red" onClick={this.btnClickedHandler}/>
    )
  }
}

export default DeleteButton;