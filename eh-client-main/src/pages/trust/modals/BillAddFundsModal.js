import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

import Datetime from 'react-datetime';
import moment from 'moment';

import { store } from '../../../store/index';
import { API_SERVER } from '../../../config/constant';
import { useDispatch } from 'react-redux';
import axios from 'axios';


const BillAddFundsModal = props => {
    const [isLarge, setIsLarge] = useState(false);

    const [billState, setbillState] = useState({});
    const [optionsState, setOptions] = useState({});

    const tokenConfig = () => {
        const token = store.getState().account.token
        
    
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        //Removed this, because the backend is giving a 401, if there's a token
        /*if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }*/
    
        return config
    }

    const getOptions = () =>  {

        axios.options(`${API_SERVER}api/trust/bills/`, tokenConfig())
            .then(res => {
                setOptions(res.data.actions.POST)
            }).catch(err => {
                console.log(err)
            }) 
    }

    const CreateBill = (body) =>  {
    
        axios.post(`${API_SERVER}api/trust/bills/`, JSON.stringify(body), tokenConfig())
            .then(res => {
                console.log("Create", res)
                props.setToggle(!props.toggle)
                
            }).catch(err => {
                console.log(err)
            })
    }

    const handleDates = (event, name) => {
        setbillState({
            ...billState,
            [name]: moment(event._d).format("YYYY-MM-DD")
        })
    };

    const handleEdit = (event) => {
        const { name, value } = event.target
        setbillState({
            ...billState,
            [name]: value
        })
    }

    useEffect(() => {
        setbillState({
            ...billState,
            "trust_id": props.id,
            "line_choice": "misc"
        })
        getOptions()
    }, [])

    const onSubmit = () => {
        CreateBill(billState)
        setIsLarge(false)
    }

    console.log("The state", billState)

    return (
        <React.Fragment>
            <OverlayTrigger overlay={<Tooltip>Add funds to this Trust account</Tooltip>} style={{ float: "right" }}>
                <Button className="shadow-1 theme-bg border border-0" size="sm" onClick={() => setIsLarge(true)}>
                    Add Funds
                </Button>
            </OverlayTrigger>
            <Modal size="lg" show={isLarge} onHide={() => setIsLarge(false)}>
                <Modal.Header closeButton>
                    <Modal.Title as="h5">Add Funds</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label className={"mb-n5"} column xs={4} md={3}>Date</Form.Label>
                            <Col>
                                <Datetime
                                    dateFormat="MM/DD/YYYY"
                                    closeOnSelect={true}
                                    timeFormat={false}
                                    name="date_received"
                                    onChange={event => handleDates(event, "date_received")} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label className={"mb-n5"} column xs={4} md={3}>Entity Name</Form.Label>
                            <Col>
                                <Form.Control
                                    name="entity"
                                    onChange={handleEdit} 
                                    />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label className={"mb-n5"} column xs={4} md={3}>Type</Form.Label>
                            <Col>
                                <Form.Control
                                    name="bill_choice" 
                                    onChange={handleEdit}
                                    as="select">
                                        <option value=""></option>
                                    {   optionsState.bill_choice &&
                                        optionsState.bill_choice.choices.map(data => (
                                            <option value={data.value} key={data.value}>{data.display_name}</option>
                                        ))
                                    }
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label className={"mb-n5"} column xs={4} md={3}>Amount</Form.Label>
                            <Col>
                                <Form.Control
                                    className="form-control"
                                    type="number"
                                    name="credit" 
                                    onChange={handleEdit}/>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col className="float-right">
                            <div className="float-right" style={{ display: "flex" }}>
                                <OverlayTrigger overlay={<Tooltip>Discard Changes</Tooltip>} style={{ float: "right" }}>
                                    <Button className="shadow-1 theme-bg border border-0" onClick={() => setIsLarge(false)}>
                                        Cancel
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>Save Changes</Tooltip>} style={{ float: "right" }}>
                                    <Button className="shadow-1 theme-bg border border-0" onClick={onSubmit}>
                                        Save
                                    </Button>
                                </OverlayTrigger>
                            </div>
                        </Col>
                    </Row>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};

export default BillAddFundsModal;