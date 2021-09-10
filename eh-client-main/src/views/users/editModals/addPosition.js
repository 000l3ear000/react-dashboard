import React, {useState} from 'react';
import {Modal, Button, Row, Col} from 'react-bootstrap';

const style = {
    footer: {
        justifyContent: "center",
        alignItems: "center",
    },
    buttons: {
        width: '20%'
    }
}

function MyVerticallyCenteredModal(props) {
    
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        
      >
        <Modal.Header closeButton>
            <Modal.Title>
                <h5>Add Position</h5>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input className="form-control"/>
        </Modal.Body>
        <Modal.Footer style={style.footer}>
            <Button size="sm" style={style.buttons}>Add</Button>
            <Button size="sm" style={style.buttons} variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const AddPosition = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <button className="btn btn-primary btn-sm" style={{height: '35px', width: '35px'}} onClick={() => setModalShow(true)}>+</button>
  
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
    )
}

export default AddPosition;