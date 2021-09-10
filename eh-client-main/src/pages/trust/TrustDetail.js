import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Form, OverlayTrigger, Row, Tab, Badge, Tabs, Tooltip } from 'react-bootstrap';
import Datetime from 'react-datetime';
import moment from 'moment';

import image1 from '../../assets/images/props/213GER345.jpg';
import image2 from '../../assets/images/props/rear.jpg';
import image3 from '../../assets/images/props/bath1.jpg';
import Gallery from '../../components/Gallery/SimpleGallery';

// Import Tab Views
import InsuranceTabView from './tabs/TrustInsuranceTab';
import TaxTabView from './tabs/TrustTaxTab';
import OwnershipTabView from './tabs/TrustOwnershipTab';
import FamilyTabView from './tabs/TrustFamilyTab';
import BillsTabView from './tabs/TrustBillsTab';
import TrustFileTab from './tabs/TrustFileTab';
import TrustImagesTab from './tabs/TrustImagesTab';
import MarketingTab from './tabs/TrustMarketingTab';
import NotesTab from './tabs/TrustNotesTab';

// Import Chatter
import Chatter from './Chatter';

// Import Modals
import OwnershipModal from './modals/OwnershipModal';
import LoanModal from './modals/LoanModal';

import {GET_TRUST, EDIT_TRUST} from '../../store/actions';

import {store} from '../../store/index';
import { API_SERVER } from '../../config/constant';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

const TrustFormView = props => {
    const [startDate, setStartDate] = useState(new Date());

    // This is for the Edit swtich
    const [defaultSwitch, setDefaultSwitch] = useState(true);
    const [trustState, setTrustState] = useState({});
    const [trustOptionsState, setTrustOptionsState] = useState({});

    const toggleHandler = () => {
        setDefaultSwitch((prevState) => !prevState);
        
    };
    console.log(defaultSwitch)

    // for ContentEditable
    

    console.log(props)
    //    api/trust/trust/1/

    const dispatch = useDispatch();
    


    const tokenConfig = () => {
        const token = store.getState().account.token
        
    
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        return config
    }

    const getTrust = (id) =>  {

        axios.options(`${API_SERVER}api/trust/trust/`, tokenConfig())
            .then(res => {
                setTrustOptionsState(res.data.actions.POST)
            }).catch(err => {
                console.log(err)
            }
            )
    
        axios.get(`${API_SERVER}api/trust/trust/${id}/`, tokenConfig())
            .then(res => {
                setTrustState(res.data)
                dispatch({
                    type: GET_TRUST,
                    payload: res.data
                });
            }).catch(err => {
                console.log(err)
            }
            )
    }

    const EditTrust = (id, body) =>  {
    
        axios.put(`${API_SERVER}api/trust/trust/${id}/`, JSON.stringify(body), tokenConfig())
            .then(res => {
                setTrustState(res.data)
                setDefaultSwitch((prevState) => !prevState)
                dispatch({
                    type: EDIT_TRUST,
                    payload: res.data
                });
                getTrust(id)
            }).catch(err => {
                console.log(err)
            }
            )
    }

    const onEdit = id => {
        EditTrust(id, trustState)
    }

    const handleEdit = (event) => {
        console.log("Event", event)
        const { name, value } = event.target
        setTrustState({
            ...trustState,
            [name]: value
        })
    }


    const handleDates = (event, name) => {
        console.log("From date", moment(event._d).format("MM/DD/YYYY"))
        console.log("From name", name)
        

        setTrustState({
            ...trustState,
            [name]: moment(event._d).format("YYYY-MM-DD")
        })
    };

    useEffect(() => {
        getTrust(props.match.params.id)
    }, [props.match.params.id])

    //trustee_type.choices
    console.log("Trust", trustState)


    return (
        <React.Fragment>
            <Row>
                <Col md={12} lg={9} xl={9}>
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
                                <Col className="float-left">
                                    {/* -------------------- /api/trust/trust/ - name -------------------- */}
                                    <h2>{trustState && trustState.name}</h2>                                    
                                        <OwnershipModal id={props.match.params.id} />
                                        <LoanModal />                                  
                                </Col>
                                <Col className="float-right">
                                    <div className="float-right" style={{ display: "flex" }}>
                                        <Form.Label>Edit <br/> Mode</Form.Label>
                                        <div className="switch d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-default"
                                                defaultChecked={defaultSwitch===false}
                                                onChange={() => toggleHandler()}
                                            />
                                            <Form.Label htmlFor="checked-default" className="cr" />
                                        </div>
                                        {!defaultSwitch ? 
                                        <OverlayTrigger overlay={<Tooltip>Save Edited Trust</Tooltip>} style={{ float: "right" }}>
                                        <Button className="shadow-1 theme-bg border border-0" onClick={() => onEdit(trustState.id)}>
                                            Save
                                            </Button>
                                        </OverlayTrigger>
                                        :
                                        <OverlayTrigger overlay={<Tooltip>Create New Trust</Tooltip>} style={{ float: "right" }}>
                                           
                                               <Link to="/trust">
                                                    <Button className="shadow-1 theme-bg border border-0">
                                                        Create
                                                    </Button>
                                               </Link>
                                            
                                        </OverlayTrigger>
                                        }
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
                                                    readOnly={defaultSwitch} 
                                                    type="address" 
                                                    name="address" 
                                                    value={trustState.address ? trustState["address"] : ''}
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
                                                    readOnly={defaultSwitch}
                                                    name="beneficiary_id" 
                                                    value={trustState.beneficiary_id ? trustState["beneficiary_id"] : ''}
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
                                                    disabled={defaultSwitch}
                                                    name="trustee_type" 
                                                    value={trustState.trustee_type ? trustState["trustee_type"] : ''}
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
                                                    readOnly={defaultSwitch}
                                                    name="county" 
                                                    value={trustState.county ? trustState["county"] : ''}
                                                    onChange={handleEdit}
                                                    />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Lockbox code</Form.Label>
                                            <Col sm={8}>
                                                {/* -------------------- /api/trust/trust/ - lockbox -------------------- */}
                                                <Form.Control 
                                                    readOnly={defaultSwitch}
                                                    name="lockbox" 
                                                    value={trustState.lockbox ? trustState["lockbox"] : ''}
                                                    onChange={handleEdit}/>
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
                                        {
                                                defaultSwitch ? 
                                                    <Form.Control
                                                        readOnly={true}
                                                        dateFormat="MM/DD/YYYY"
                                                        name="trust_create_date"
                                                        value={trustState.trust_create_date ? trustState["trust_create_date"] : ''} />
                                                :
                                                    <Datetime
                                                        dateFormat="MM/DD/YYYY"
                                                        closeOnSelect={true}
                                                        timeFormat={false}
                                                        name="trust_create_date"
                                                        value={trustState.trust_create_date ? trustState["trust_create_date"] : ''}
                                                        onChange={event => handleDates(event, "trust_create_date")} />
                                            }
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        {/* -------------------- /api/trust/trust/ - purchase_date -------------------- */}
                                        <Form.Label className={"mb-n5"} column sm={4}>Purchased Date</Form.Label>
                                        <Col sm={8}>
                                            {
                                                defaultSwitch ? 
                                                    <Form.Control
                                                        readOnly={true}
                                                        dateFormat="MM/DD/YYYY"
                                                        name="purchase_date"
                                                        value={trustState.purchase_date ? trustState["purchase_date"] : ""} />
                                                :
                                                    <Datetime
                                                        dateFormat="MM/DD/YYYY"
                                                        closeOnSelect={true}
                                                        timeFormat={false}
                                                        name="purchase_date"
                                                        value={trustState.purchase_date ? trustState["purchase_date"] : ''}
                                                        onChange={event => handleDates(event, "purchase_date")} />
                                            }
                                            
                                            
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        {/* -------------------- /api/trust/trust/ - deed_record_date -------------------- */}
                                        <Form.Label className={"mb-n5"} column sm={4}>Deed Recorded Date</Form.Label>
                                        <Col sm={8}>
                                        
                                        {
                                                defaultSwitch ? 
                                                    <Form.Control
                                                        readOnly={true}
                                                        dateFormat="MM/DD/YYYY"
                                                        name="deed_record_date"
                                                        value={trustState.deed_record_date ? trustState["deed_record_date"] : ""} />
                                                :
                                                    <Datetime
                                                        dateFormat="MM/DD/YYYY"
                                                        closeOnSelect={true}
                                                        timeFormat={false}
                                                        name="deed_record_date"
                                                        value={trustState.purchase_date ? trustState["deed_record_date"] : ''}
                                                        onChange={event => handleDates(event, "deed_record_date")} />
                                            }
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        {/* -------------------- /api/trust/trust/ - investor_purchase_date -------------------- */}
                                        <Form.Label className={"mb-n5"} column sm={4}>Last Date Sold To Inv</Form.Label>
                                        <Col sm={8}>
                                        {
                                                defaultSwitch ? 
                                                    <Form.Control
                                                        readOnly={true}
                                                        dateFormat="MM/DD/YYYY"
                                                        name="investor_purchase_date"
                                                        value={trustState.investor_purchase_date ? trustState["investor_purchase_date"] : ''} />
                                                :
                                                    <Datetime
                                                        dateFormat="MM/DD/YYYY"
                                                        closeOnSelect={true}
                                                        timeFormat={false}
                                                        name="investor_purchase_date"
                                                        value={trustState.purchase_date ? trustState["investor_purchase_date"] : ''}
                                                        onChange={event => handleDates(event, "investor_purchase_date")} />
                                            }
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        {/* -------------------- /api/trust/trust/ - insured_amount -------------------- */}
                                        <Form.Label className={"mb-n5"} column sm={4}>Amount Ins For</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control
                                                className="form-control"
                                                type="number"
                                                readOnly={defaultSwitch}
                                                name="insured_amount" 
                                                value={trustState.insured_amount ? trustState["insured_amount"] : ''}
                                                onChange={handleEdit}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        {/* -------------------- /api/trust/trust/ - loan_amount -------------------- */}
                                        <Form.Label className={"mb-n5"} column sm={4}>Current Loan Amt</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control
                                                className="form-control"
                                                type="number"
                                                readOnly={defaultSwitch}
                                                name="loan_amount" 
                                                value={trustState.loan_amount ? trustState["loan_amount"] : ''}
                                                onChange={handleEdit}/>
                                        </Col>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
            {/* Tabs Section */}
                    <Card bg="light">
                        <Card.Body>
                            <Tabs variant="pills" defaultActiveKey="ownership" className="mb-3">

                                {/* Ownership Tab */}
                                <Tab eventKey="ownership" title="OWNERSHIP">
                                    <OwnershipTabView trust={trustState} id={props.match.params.id}/>
                                </Tab>

                                {/* Family History Tab */}
                                <Tab eventKey="family" title="FAMILY">
                                    <FamilyTabView id={props.match.params.id}/>
                                </Tab>

                                {/* Marketing Tab */}
                                <Tab eventKey="marketing" title="MARKETING">
                                    <MarketingTab id={props.match.params.id}/>
                                </Tab>

                                {/* Taxes Tab */}
                                <Tab eventKey="taxes" title="TAXES">
                                    <TaxTabView id={props.match.params.id}/>
                                </Tab>

                                {/* Insurance Tab */}
                                <Tab eventKey="insurance" title="INSURANCE">
                                    <InsuranceTabView id={props.match.params.id}/>
                                </Tab>

                                {/* Other Bills */}
                                <Tab eventKey="bills" title="OTHER BILLS">
                                    <BillsTabView id={props.match.params.id}/>
                                </Tab>

                                {/* Documents Tab */}
                                <Tab eventKey="documents" title="DOCUMENTS">
                                    <TrustFileTab />
                                </Tab>

                                {/* Images Tab */}
                                <Tab eventKey="images" title="IMAGES">
                                    <TrustImagesTab id={props.match.params.id}/>
                                </Tab>

                                {/* Notes Tab */}
                                <Tab eventKey="notes" title="NOTES">
                                    <NotesTab />
                                </Tab>

                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>
                <Chatter id={props.match.params.id}/>
            </Row>
        </React.Fragment>
    );
};

export default TrustFormView;
