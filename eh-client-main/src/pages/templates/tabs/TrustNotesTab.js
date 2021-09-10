import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';


const NotesTab = () => {

    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    {/*this information will be always editable even in non editable view*/}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label as="h5"> Easy Homes Notes:</Form.Label>
                        <Form.Control as="textarea" placeholder="Some amount of text goes here as a basic note" rows="10" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    {/*this information will be always editable even in non editable view*/}
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label as="h5"> Property Preservation Notes:</Form.Label>
                        <Form.Control as="textarea" placeholder="Some amount of text goes here as a basic note" rows="10" />
                    </Form.Group>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default NotesTab;