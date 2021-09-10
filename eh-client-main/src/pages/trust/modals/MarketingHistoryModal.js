import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

import Datetime from 'react-datetime';
import moment from 'moment';

import { store } from '../../../store/index';
import { API_SERVER } from '../../../config/constant';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const OwnershipModal = props => {
    const [marketingHistoryState, setMarketingHistoryState] = useState({});
    const [isLarge, setIsLarge] = useState(false);

    // const [ownerState, setOwnertate] = useState({});
    // const [ownerOptionsState, setOwnerOptionsState] = useState({});

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

    const handleDates = (event, name) => {
        console.log("From date", moment(event._d).format("MM/DD/YYYY"))
        console.log("From name", name)
        

        setMarketingHistoryState({
            ...marketingHistoryState,
            [name]: moment(event._d).format("YYYY-MM-DD")
        })
    };

    const handleEdit = (event) => {
        console.log("Event", event)
        const { name, value } = event.target
        setMarketingHistoryState({
            ...marketingHistoryState,
            [name]: value
        })
    }

    const CreateOwnerShip = (body) =>  {
    
        axios.post(`${API_SERVER}api/trust/marketing-history/`, JSON.stringify(body), tokenConfig())
            .then(res => {
                setIsLarge(false)
                console.log("Create", res)
                props.setToggle(!props.toggle)
                
            }).catch(err => {
                console.log(err)
            }
            )
    }

    useEffect(() => {
        setMarketingHistoryState({
            ...marketingHistoryState,
            "trust_id": props.id
        })
    }, [])

    const onSubmit = () => {
        CreateOwnerShip(marketingHistoryState)
    }

    console.log("The sate", marketingHistoryState)

    return (
        <React.Fragment>
            <OverlayTrigger overlay={<Tooltip>Sell To Investor, Buy Back, Purchase, etc</Tooltip>} style={{ float: "right" }}>
                <Button className="shadow-1 theme-bg border border-0" size="sm" onClick={() => setIsLarge(true)}>
                    Add Marketing History
                </Button>
            </OverlayTrigger>
            <Modal size="lg" show={isLarge} onHide={() => setIsLarge(false)}>
                <Modal.Header closeButton>
                    <Modal.Title as="h5">Change Ownership</Modal.Title>
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
                                name="on_market_date"
                                onChange={event => handleDates(event, "on_market_date")} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label className={"mb-n5"} column xs={4} md={3}>Date</Form.Label>
                            <Col>
                            <Datetime
                                dateFormat="MM/DD/YYYY"
                                closeOnSelect={true}
                                timeFormat={false}
                                name="off_market_date"
                                onChange={event => handleDates(event, "off_market_date")} />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col className="float-right">
                            <div className="float-right" style={{ display: "flex" }}>
                                <OverlayTrigger overlay={<Tooltip>Discard Changes</Tooltip>} style={{ float: "right" }}>
                                    <Button className="shadow-1 theme-bg border border-0"  onClick={() => setIsLarge(false)}>
                                        Cancel
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger overlay={<Tooltip>Save Changes</Tooltip>} style={{ float: "right" }}>
                                    <Button className="shadow-1 theme-bg border border-0" type="submit" onClick={onSubmit} >
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

export default OwnershipModal;