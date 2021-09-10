import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Form, OverlayTrigger, Row, Tab, Badge, Tabs, Tooltip } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
// import ContentEditable from 'react-contenteditable'
import DatePicker from 'react-datepicker';
import Datetime from 'react-datetime';
import moment from 'moment';

import image1 from '../../assets/images/props/213GER345.jpg';
import image2 from '../../assets/images/props/rear.jpg';
import image3 from '../../assets/images/props/bath1.jpg';
import Gallery from '../../components/Gallery/SimpleGallery';

import {store} from '../../store/index';
import { API_SERVER } from '../../config/constant';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

const CreateReact = props => {

    const [trustState, setTrustState] = useState({});
    const [trustOptionsState, setTrustOptionsState] = useState({});

    const history = useHistory();

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

    const CreateTrust = (body) =>  {
    
        axios.post(`${API_SERVER}api/trust/trust/`, JSON.stringify(body), tokenConfig())
            .then(res => {
                console.log("Create", res)
                history.replace(`/trust/${res.data.id}`)
                
            }).catch(err => {
                console.log(err)
            }
            )
    }

    const getOptions = () =>  {

        axios.options(`${API_SERVER}api/trust/trust/`, tokenConfig())
            .then(res => {
                setTrustOptionsState(res.data.actions.POST)
            }).catch(err => {
                console.log(err)
            }
            ) 
    }

    const handleDates = (event, name) => {
        console.log("From date", moment(event._d).format("MM/DD/YYYY"))
        console.log("From name", name)
        

        setTrustState({
            ...trustState,
            [name]: moment(event._d).format("YYYY-MM-DD")
        })
    };

    const handleEdit = (event) => {
        console.log("Event", event)
        const { name, value } = event.target
        setTrustState({
            ...trustState,
            [name]: value
        })
    }

    useEffect(() => {
        getOptions()
    }, [])

    console.log("Trust", trustState)

    const onSubmit = () => {
        CreateTrust(trustState)
    }


    return(
        <Card>
                        <Card.Header>
                            <Row>
                                <Col md={1} style={{ minWidth: 180, maxWidth: 180 }}>
                                    <Gallery
                                        images={[{ src: image1, thumbnail: image1, useForDemo: true, },
                                            { src: image2 },
                                            { src: image3 }
                                        ]}
                                        backdropClosesModal
                                        singleItem
                                    />
                                </Col>
                                <Col>
                                <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} sm={4}>Name</Form.Label>
                                            <Col sm={8}>
                                                {/* -------------------- /api/trust/trust/ - address -------------------- */}
                                                <Form.Control 
                                                    type="text" 
                                                    name="name" 
                                                    onChange={handleEdit}
                                                    />
                                            </Col>
                                        </Form.Group>
                                </Col>
                                <Col className="float-left">
                                    {/* -------------------- /api/trust/trust/ - name -------------------- */}
                                    <h2></h2>                                            
                                </Col>
                                <Col className="float-right">
                                    <div className="float-right" style={{ display: "flex" }}>
                                    
                                        <OverlayTrigger overlay={<Tooltip>Create New Trust</Tooltip>} style={{ float: "right" }}>

                                                    <Button className="shadow-1 theme-bg border border-0" onClick={onSubmit}>
                                                        Save
                                                    </Button>
                                            
                                        </OverlayTrigger>
                                        
                                    </div>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <Form>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Address</Form.Label>
                                            <Col sm={8}>
                                                {/* -------------------- /api/trust/trust/ - address -------------------- */}
                                                <Form.Control 
                                                    type="address" 
                                                    name="address" 
                                                    onChange={handleEdit}
                                                    />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Beneficiary</Form.Label>
                                            <Col sm={8}>
                                                {/* -------------------- /api/trust/trust/ - beneficiary_id -------------------- */}
                                                {/* This is going to point to a contacts app when built */}
                                                {/* For now it is just a CharField in order to get data */}
                                                <Form.Control 
                                                    name="beneficiary_id" 
                                                    onChange={handleEdit}
                                                    />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            {/* -------------------- /api/trust/trust/ - trustee -------------------- */}
                                            <Form.Label className={"mb-n5"} column sm={4}>Trustee</Form.Label>
                                            <Col sm={8}>
                                                {/* /api/trust - trustee */}
                                                <Form.Control
                                                    name="trustee_type" 
                                                    onChange={handleEdit}
                                                    as="select">
                                                        <option value=""></option>
                                                    {   trustOptionsState.trustee_type &&
                                                        trustOptionsState.trustee_type.choices.map(data => (
                                                            <option value={data.value} key={data.value}>{data.display_name}</option>
                                                        ))
                                                    }
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            {/* -------------------- /api/trust/trust/ - beneficiary_id -------------------- */}
                                            {/* This is going to point to users app */}
                                            {/* It will check for employee status of users in order to generate this group to select from */}
                                            {/* For now it is just a CharField in order to get data */}
                                            <Form.Label className={"mb-n5"} column sm={4}>EasyHomes Sales Manager</Form.Label>
                                            <Col sm={8}>
                                                {/* /api/trust - sale_manager */}
                                                <Form.Control disabled={true} as="select">
                                                    <option>Charlotte Wallet</option>
                                                    <option>Jessica Hollingsworth</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>County</Form.Label>
                                            <Col sm={8}>
                                                {/* -------------------- /api/trust/trust/ - county -------------------- */}
                                                <Form.Control 
                                                    name="county"
                                                    onChange={handleEdit} 
                                                    />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Lockbox code</Form.Label>
                                            <Col sm={8}>
                                                {/* -------------------- /api/trust/trust/ - lockbox -------------------- */}
                                                <Form.Control 
                                                    name="lockbox"
                                                    onChange={handleEdit} />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Properties Assigned Vendor</Form.Label>
                                            <Col sm={8}>
                                                {/* -------------------- /api/trust/trust/ - assigned_vendor -------------------- */}
                                                {/* I also don't think this will be a dropdown */}
                                                <Form.Control disabled={true} as="select">
                                                    <option>Mike the Plumber</option>
                                                    <option>Red Roof Tommy</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col md={6}>
                                    <Form.Group as={Row}>
                                        <Form.Label className={"mb-n5"} column sm={4}>Set Up & Repair Step</Form.Label>
                                        <Col sm={8}>
                                            {/* -------------------- /api/trust/trust/ - repair_stage_id -------------------- */}
                                            {/* This will pull from another place, it is a simple CharField for now */}
                                            <Form.Control disabled={true} as="select">
                                                <option>On Contract/Needs Inspection</option>
                                                <option>Purchased/Set Up Not Started</option>
                                                <option>Set Up In Progress</option>
                                                <option>Set Up Complete/Feature Issues</option>
                                                <option>Set Up Complete</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        {/* -------------------- /api/trust/trust/ - trust_create_date -------------------- */}
                                        <Form.Label className={"mb-n5"} column sm={4}>Trust Creation Date</Form.Label>
                                        <Col sm={8}>
                                        <Datetime
                                                        dateFormat="MM/DD/YYYY"
                                                        closeOnSelect={true}
                                                        timeFormat={false}
                                                        name="trust_create_date"
                                                        onChange={event => handleDates(event, "trust_create_date")} />
 
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        {/* -------------------- /api/trust/trust/ - purchase_date -------------------- */}
                                        <Form.Label className={"mb-n5"} column sm={4}>Purchased Date</Form.Label>
                                        <Col sm={8}>
                                        <Datetime
                                                        dateFormat="MM/DD/YYYY"
                                                        closeOnSelect={true}
                                                        timeFormat={false}
                                                        name="purchase_date"
                                                        onChange={event => handleDates(event, "purchase_date")} />
                                           
                                            
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        {/* -------------------- /api/trust/trust/ - deed_record_date -------------------- */}
                                        <Form.Label className={"mb-n5"} column sm={4}>Deed Recorded Date</Form.Label>
                                        <Col sm={8}>
                                        
                                                <Datetime
                                                        dateFormat="MM/DD/YYYY"
                                                        closeOnSelect={true}
                                                        timeFormat={false}
                                                        name="trust_create_date"
                                                        onChange={event => handleDates(event, "trust_create_date")} />
                               
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        {/* -------------------- /api/trust/trust/ - investor_purchase_date -------------------- */}
                                        <Form.Label className={"mb-n5"} column sm={4}>Last Date Sold To Inv</Form.Label>
                                        <Col sm={8}>
                                        
                                        <Datetime
                                                        dateFormat="MM/DD/YYYY"
                                                        closeOnSelect={true}
                                                        timeFormat={false}
                                                        name="investor_purchase_date"
                                                        onChange={event => handleDates(event, "investor_purchase_date")} />

                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        {/* -------------------- /api/trust/trust/ - insured_amount -------------------- */}
                                        <Form.Label className={"mb-n5"} column sm={4}>Amount Ins For</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control
                                                className="form-control"
                                                type="number"
                                                name="insured_amount"
                                                onChange={handleEdit} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        {/* -------------------- /api/trust/trust/ - loan_amount -------------------- */}
                                        <Form.Label className={"mb-n5"} column sm={4}>Current Loan Amt</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control
                                                className="form-control"
                                                type="number"
                                                name="loan_amount"
                                                onChange={handleEdit} />
                                        </Col>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
    )
}

export default CreateReact;