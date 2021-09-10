import React, { useState } from 'react';
import { Button, Card, Col, Form, OverlayTrigger, Row, Tab, Badge, Tabs, Tooltip } from 'react-bootstrap';
// import NumberFormat from 'react-number-format';
// import ContentEditable from 'react-contenteditable'
import DatePicker from 'react-datepicker';

// Image Imports
import image1 from '../../assets/images/props/213GER345.jpg';
import image2 from '../../assets/images/props/rear.jpg';
import image3 from '../../assets/images/props/bath1.jpg';
import Gallery from '../../components/Gallery/SimpleGallery';

// Import Tab Views
// import SomeTabView from './tabs/SomeTab';


const TemplateFormView = () => {

    // Set Data and Methods
    const [startDate, setStartDate] = useState(new Date());

    // This is for the Edit swtich
    const [defaultSwitch, setDefaultSwitch] = useState(true);

    const toggleHandler = () => {
        setDefaultSwitch((prevState) => !prevState);
    };

    // for ContentEditable
    const handleChange = (date) => {
        setStartDate(date);
    };

    return (

        <React.Fragment>
            <Row>
                <Col md={12} lg={9} xl={9}>
                    <Card>
                        <Card.Header>
                            <Row>

                                {/* -------------------- Page Avatar Image -------------------- */}
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

                                {/* -------------------- Action Button Section -------------------- */}
                                <Col className="float-left">
                                    <h2>Name</h2>
                                    <OverlayTrigger overlay={<Tooltip>Action Button Tooltip</Tooltip>} style={{ float: "right" }}>
                                        <Button className="shadow-1 theme-bg border border-0" size="sm" >Action Button</Button>
                                    </OverlayTrigger>
                                </Col>

                                <Col className="float-right">
                                    <div className="float-right" style={{ display: "flex" }}>

                                        {/* -------------------- Edit Toggle -------------------- */}
                                        <Form.Label>Edit <br /> Mode</Form.Label>
                                        <div className="switch d-inline m-r-10">
                                            <Form.Control
                                                type="checkbox"
                                                id="checked-default"
                                                defaultChecked={defaultSwitch}
                                                onChange={() => toggleHandler}
                                            />
                                            <Form.Label htmlFor="checked-default" className="cr" />
                                        </div>

                                        {/* -------------------- Create Button -------------------- */}
                                        <OverlayTrigger overlay={<Tooltip>Create New Item Tooltip</Tooltip>} style={{ float: "right" }}>
                                            <Button className="shadow-1 theme-bg border border-0" >
                                                Create
                                            </Button>
                                        </OverlayTrigger>

                                    </div>
                                </Col>
                            </Row>
                        </Card.Header>

                        {/* -------------------- Fields Section -------------------- */}
                        <Card.Body>
                            <Row>

                                {/* -------------------- Left Column Fields -------------------- */}
                                <Col md={6}>
                                    <Form>

                                        {/* -------------------- Read Only Mode Fields -------------------- */}
                                        <Table hover className="table-columned" >
                                            <tbody>

                                                {/* -------------------- Endpoint Details -------------------- */}
                                                <tr>
                                                    <th scope="row" width='30%'>Field Name</th>
                                                    <td>Field Data</td>
                                                </tr>

                                                {/* -------------------- Endpoint Details -------------------- */}
                                                <tr>
                                                    <th scope="row" width='30%'>Field Name</th>
                                                    <td>Field Data</td>
                                                </tr>

                                                {/* -------------------- Endpoint Details -------------------- */}
                                                <tr>
                                                    <th scope="row" width='30%'>Field Name</th>
                                                    <td>Field Data</td>
                                                </tr>
                                                
                                            </tbody>
                                        </Table>



                                    </Form>
                                </Col>
                                {/* -------------------- Right Column Fields -------------------- */}
                                <Col md={6}>
                                    <Form>

                                        {/* -------------------- Edit Mode Fields -------------------- */}

                                        {/* -------------------- Address Field -------------------- */}
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Address Field Name</Form.Label>
                                            <Col sm={8}>
                                                {/* -------------------- Endpoint Details -------------------- */}
                                                <Form.Control type="address" placeholder="address field placeholder" />
                                            </Col>
                                        </Form.Group>

                                        {/* -------------------- Readonly Field -------------------- */}
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Read Only Field Name</Form.Label>
                                            <Col sm={8}>
                                                {/* -------------------- Endpoint Details -------------------- */}
                                                <Form.Control readOnly defaultValue="Default Value" />
                                            </Col>
                                        </Form.Group>

                                        {/* -------------------- Selection Field -------------------- */}
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Selection Field Name</Form.Label>
                                            <Col sm={8}>
                                                {/* -------------------- Endpoint Details -------------------- */}
                                                <Form.Control as="select">
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>

                                        {/* -------------------- Formatted Date Field -------------------- */}
                                        <Form.Group as={Row}>
                                            {/* -------------------- Endpoint Details -------------------- */}
                                            <Form.Label className={"mb-n5"} column sm={4}>Formatted Date Field Name</Form.Label>
                                            <Col sm={8}>
                                                {/* -------------------- Date Data and Format Details -------------------- */}
                                                <DatePicker selected={startDate} onChange={handleChange} dateFormat="MMMM d, yyyy" className="form-control" />
                                            </Col>
                                        </Form.Group>

                                    </Form>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* -------------------- Tabs Section -------------------- */}
                    <Card bg="light">
                        <Card.Body>
                            <Tabs variant="pills" defaultActiveKey="default-tab" className="mb-3">

                                {/* -------------------- Default Tab -------------------- */}
                                <Tab eventKey="default-tab" title="DEFAULT NAME">
                                    {/* -------------------- Tab component -------------------- */}
                                    {/* -------------------- <DefaultTabView /> -------------------- */}
                                </Tab>

                                {/* -------------------- Name Tab -------------------- */}
                                <Tab eventKey="name-tab" title="TAB NAME">
                                    {/* -------------------- Tab component -------------------- */}
                                    {/* -------------------- <NameTabView /> -------------------- */}
                                </Tab>

                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>

                {/* -------------------- Sidebar Section -------------------- */}
                <Col md={12} lg={3} xl={3}>
                    <Card>
                        <Card.Body>

                            {/* -------------------- Text Area -------------------- */}
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows="3" placeholder="Write your message" />
                            </Form.Group>

                            {/* -------------------- Attachment and Send Buttons -------------------- */}
                            <div className="float-right mb-2">
                                <OverlayTrigger overlay={<Tooltip>Attach a File</Tooltip>} style={{ float: "right" }}>
                                    <i className="fa fa-paperclip f-20 mr-2" />
                                </OverlayTrigger>

                                <OverlayTrigger overlay={<Tooltip>Send</Tooltip>} style={{ float: "right" }}>
                                    <i className="fa fa-paper-plane text-c-blue f-20 mr-2" />
                                </OverlayTrigger>
                            </div>
                            <br />

                            {/* -------------------- Attachment, Message, and Edit History -------------------- */}
                            {/* -------------------- Dates in Descending Order -------------------- */}
                            <ul className="task-list">

                                {/* -------------------- Top Message Block -------------------- */}
                                <li>
                                    <i className="task-icon bg-c-green" />
                                    <h6>
                                        <p className="text-muted">Date of Message<Badge className="float-right text-white f-11 theme-bg2">Sender</Badge></p>
                                    </h6>
                                    <p>Message Content</p>
                                </li>

                                {/* -------------------- Fields Edit History Block -------------------- */}
                                <li>
                                    <hr />
                                    <i className="task-icon bg-c-green" />
                                    <h6>
                                        <p className="text-muted">Date of Edit<Badge className="float-right size text-white f-11 theme-bg2">Name of Editor</Badge></p>
                                    </h6>
                                    <p>
                                        {/*Every time any field is edited in trust an entry gets generated here. */}
                                        <dl>
                                            {/* -------------------- Edited Fields -------------------- */}
                                            <dt className="text-secondary">&#8214; Fields Changed &#8214;</dt>
                                            <dt>Set-Up & Repair Step</dt>
                                            <dd>On Contract/Needs Inspection &rarr; On Contract Ready To Purchase</dd>
                                            <dt>ARV</dt>
                                            <dd>$25,000 &rarr; $82,000</dd>
                                            <dt>Warranty</dt>
                                            <dd>$3,000 &rarr; $5,000</dd>
                                        </dl>
                                    </p>
                                </li>

                                {/* -------------------- Messages Block -------------------- */}
                                <li>
                                    <hr />
                                    <i className="task-icon bg-c-green" />
                                    <h6>
                                        <p className="text-muted">Date of Message<Badge className="float-right text-white f-11 theme-bg2">Sender</Badge></p>
                                    </h6>
                                    <p>Message Content</p>
                                </li>
                            </ul>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default TemplateFormView;