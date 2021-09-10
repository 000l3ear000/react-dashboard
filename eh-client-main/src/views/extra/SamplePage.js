import React,{ useState } from 'react';
import {Row, Col, Card, Form, Button, Tab, Tabs, Table} from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import ContentEditable from 'react-contenteditable'
import DatePicker from 'react-datepicker';



import image1 from '../../assets/images/props/213GER345.jpg';
import image2 from '../../assets/images/props/rear.jpg';
import image3 from '../../assets/images/props/bath1.jpg';

import Gallery from "../../components/Gallery/SimpleGallery";



const SamplePage = () => {
        const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date) => {
        setStartDate(date);
    };


    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Row>
                                <Col md={1} style={{minWidth: 180,maxWidth: 180}}>
                                <Gallery
                                images={[{ src: image1, thumbnail: image1, useForDemo: true,},
                                    { src: image2},
                                    { src: image3}
                                ]}
                                backdropClosesModal
                                singleItem

                                />
                                </Col>
                                <Col md={5}>
                                    <h2>213GER345</h2>

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
                                            <Form.Control type="address" placeholder="234 Gerard St" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label className={"mb-n5"} column sm={4}>Beneficiary</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control as="select">
                                            <option>Jeff Bezos</option>
                                            <option>Miles Turner</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label className={"mb-n5"} column sm={4}>Trustee</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control as="select">
                                            <option>Equity & Help Inc</option>
                                            <option>Not Under Management</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label className={"mb-n5"} column sm={4}>EasyHomes Sales Manager</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control as="select">
                                            <option>Charlotte Wallet</option>
                                            <option>Jessica Hollingsworth</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label className={"mb-n5"} column sm={4}>County</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control readOnly defaultValue="Pinellas" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label className={"mb-n5"} column sm={4}>Lockbox code</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control placeholder="1231" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label className={"mb-n5"} column sm={4}>Properties Assigned Vendor</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control as="select">
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
                                            <Form.Control as="select">
                                                <option>On Contract/Needs Inspection</option>
                                                <option>Purchased/Set Up Not Started</option>
                                                <option>Set Up In Progress</option>
                                                <option>Set Up Complete/Feature Issues</option>
                                                <option>Set Up Complete</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label className={"mb-n5"} column sm={4}>Trust Creation Date</Form.Label>
                                        <Col sm={8}>
                                            <DatePicker selected={startDate} onChange={handleChange} dateFormat="MMMM d, yyyy" className="form-control" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label className={"mb-n5"} column sm={4}>Purchased Date</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control className={"mb-n1"} type="date" placeholder="12/25/2019" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label className={"mb-n5"} column sm={4}>Deed Recorded Date</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control className={"mb-n0"} type="date" placeholder="12/25/2019" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label className={"mb-n5"} column sm={4}>Last Date Sold To Inv</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control className={"mb-n0"} type="date" placeholder="12/25/2019" />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label className={"mb-n5"} column sm={4}>Amount Ins For</Form.Label>
                                        <Col sm={8}>
                                            <NumberFormat className="form-control" thousandSeparator prefix="$ " />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label className={"mb-n5"} column sm={4}>Current Loan Amt</Form.Label>
                                        <Col sm={8}>
                                            <NumberFormat className="form-control" thousandSeparator prefix="$ " />
                                        </Col>
                                    </Form.Group>
                                </Col>
                        </Row>
                            <Tabs variant="pills" defaultActiveKey="purchase" className="mb-3">
                        <Tab eventKey="purchase" title="PURCHASE">
                            <row>
                                <Col md={6}>
                                    <Table hover className="table-columned" >
                                        <tbody>
                                            <tr>
                                                <th scope="row"  width='30%'>Address</th>
                                                <td width='70%'><ContentEditable html={"apple"} onChange={this}/></td>
                                            </tr>
                                        <tr>
                                                <th scope="row" width='30%'>Address</th>
                                                <td width='70%'><ContentEditable html={"farma"} onChange={this}/></td>
                                            </tr>
                                        <tr>
                                                <th scope="row" width='30%'>Address</th>
                                                <td width='70%'><ContentEditable html={"wet"} onChange={this}/></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                                <Col md={6}>
                                    <Table hover className="table-columned" >
                                        <tbody>
                                            <tr>
                                                <th scope="row"  width='30%'>Address</th>
                                                <td width='70%'><ContentEditable html={"apple"} onChange={this}/></td>
                                            </tr>
                                        <tr>
                                                <th scope="row" width='30%'>Address</th>
                                                <td width='70%'><ContentEditable html={"farma"} onChange={this}/></td>
                                            </tr>
                                        <tr>
                                                <th scope="row" width='30%'>Address</th>
                                                <td width='70%'><ContentEditable html={"wet"} onChange={this}/></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>

                            </row>

                        </Tab>
                        <Tab eventKey="sale" title="SALE">




                        </Tab>
                        <Tab eventKey="marketing" title="MARKETING">
                            <Row>
                                <Col md={6}>
                                    <Form>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-0"} column sm={4}>Address</Form.Label>
                                            <Col sm={8}>
                                                <ContentEditable html={"<span><b>apple</b></span>"} onChange={this}/>

                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Beneficiary</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control as="select">
                                                <option>Jeff Bezos</option>
                                                <option>Miles Turner</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Trustee</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control as="select">
                                                <option>Equity & Help Inc</option>
                                                <option>Not Under Management</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>EasyHomes Sales Manager</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control as="select">
                                                <option>Charlotte Wallet</option>
                                                <option>Jessica Hollingsworth</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>


                                    </Form>
                                </Col>
                                <Col md={6}>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Set Up & Repair Step</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control as="select">
                                                    <option>On Contract/Needs Inspection</option>
                                                    <option>Purchased/Set Up Not Started</option>
                                                    <option>Set Up In Progress</option>
                                                    <option>Set Up Complete/Feature Issues</option>
                                                    <option>Set Up Complete</option>
                                                </Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Trust Creation Date</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control className={"mb-n1"} type="date" placeholder="12/25/2019" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Purchased Date</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control className={"mb-n1"} type="date" placeholder="12/25/2019" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label className={"mb-n5"} column sm={4}>Deed Recorded Date</Form.Label>
                                            <Col sm={8}>
                                                <Form.Control className={"mb-n0"} type="date" placeholder="12/25/2019" />
                                            </Col>
                                        </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default SamplePage;
