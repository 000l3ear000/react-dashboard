import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

import Datetime from 'react-datetime';
import moment from 'moment';

import { store } from '../../../store/index';
import { API_SERVER } from '../../../config/constant';
import { useDispatch } from 'react-redux';
import axios from 'axios';


const MarketingReportModal = props => {

    const [isLarge, setIsLarge] = useState(false);

    const [marketingReportState, setMarketingReportState] = useState({});
    // const [ownerOptionsState, setOwnerOptionsState] = useState({});

    const tokenConfig = () => {
        const token = store.getState().account.token
        
    
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        // Removed this, because the backend is giving a 401, if there's a token
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }
    
        return config
    }

    // const getOptions = () =>  {

    //     axios.options(`${API_SERVER}api/trust/ownership/`, tokenConfig())
    //         .then(res => {
    //             setMarketingReportState(res.data.actions.POST)
    //         }).catch(err => {
    //             console.log(err)
    //         }
    //         ) 
    // }

    const handleDates = (event, name) => {
        console.log("From date", moment(event._d).format("MM/DD/YYYY"))
        console.log("From name", name)
        

        setMarketingReportState({
            ...marketingReportState,
            [name]: moment(event._d).format("YYYY-MM-DD")
        })
    };

    const handleEdit = (event) => {
        console.log("Event", event)
        const { name, value } = event.target
        setMarketingReportState({
            ...marketingReportState,
            [name]: value
        })
    }

    const CreateMarketingReport = (body) =>  {

        axios.post(`${API_SERVER}api/trust/marketing-report/`, JSON.stringify(body), tokenConfig())
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
        setMarketingReportState({
            ...marketingReportState,
            "trust_id": props.id
        })
        // getOptions()
    }, [])

    const onSubmit = () => {
        CreateMarketingReport(marketingReportState);
    }

    console.log("The sate", marketingReportState);

return (
    <React.Fragment>
            <OverlayTrigger overlay={<Tooltip>Sell To Investor, Buy Back, Purchase, etc</Tooltip>} style={{ float: "right" }}>
                <Button className="shadow-1 theme-bg border border-0" size="sm" onClick={() => setIsLarge(true)}>
                    Add Marketing Report
                </Button>
            </OverlayTrigger>
            <Modal size="lg" show={isLarge} onHide={() => setIsLarge(false)}>
                <Modal.Header closeButton>
                    <Modal.Title as="h5">Marketing Report</Modal.Title>
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
                                name="report_date"
                                onChange={event => handleDates(event, "report_date")} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label className={"mb-n5"} column xs={4} md={3}>Zillow Visits</Form.Label>
                            <Col>
                                <Form.Control
                                    name="zillow_visits"
                                    onChange={handleEdit} 
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label className={"mb-n5"} column xs={4} md={3}>Reaches</Form.Label>
                            <Col>
                            <Form.Control
                                    name="reaches" 
                                    onChange={handleEdit}
                                    />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label className={"mb-n5"} column xs={4} md={3}>Applications</Form.Label>
                            <Col>
                                <Form.Control
                                    className="form-control"
                                    type="number"
                                    name="applications" 
                                    onChange={handleEdit}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label className={"mb-n5"} column xs={4} md={3}>Contracts</Form.Label>
                            <Col>
                                <Form.Control
                                    name="contracts" 
                                    onChange={handleEdit}
                                    />
                            </Col>
                        </Form.Group>
                        {/* <Form.Group as={Row}>
                            <Form.Label className={"mb-n5"} column xs={4} md={3}>Description</Form.Label>
                            <Col>
                                <Form.Control
                                    name="description"
                                    onChange={handleEdit} 
                                />
                            </Col>
                        </Form.Group> */}
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

export default MarketingReportModal;