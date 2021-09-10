import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Button, Card, Form, OverlayTrigger, Tooltip, Row, Col, Table, } from 'react-bootstrap';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { API_SERVER } from "../../../config/constant";

import InsurancePaymentModal from '../modals/InsurancePaymentModal';
import DeleteButton from "../../../components/AgGrid/DeleteButton";
import axios from "axios";

const InsuranceTabView = props => {
    const [rowData, setRowData] = useState([]);
    const [insuranceData, setInsuranceData] = useState([]);

    // This is for the Edit switch
    const [FamSwitch, setFamSwitch] = useState(false);

    const toggleHandler = () => {
        setFamSwitch((prevState) => !prevState);
    };

    // these are the AG grid Col Parameters
    const defaultColDef = {
        filter: true,
        sortable: false,

    }


    useEffect((id) => {
        fetch(`${API_SERVER}api/trust/trust/${id}/`)
            .then(result => result.json())
            .then(insuranceData => setInsuranceData(insuranceData))

        fetch(`${API_SERVER}api/trust/bills/?format=json&trust_id=${props.id}&line_choice=ins`)
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, [props.id]);

    const frameworkComponents = {
        btnCellRenderer: DeleteButton
    }

    const handleDelete = id => {

        axios.delete(`${API_SERVER}api/trust/bills/${id}/`)
            .then(res => {
                console.log("Response", res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    const cellRendererParams = {
        clicked: function (id) {
            // handleDelete(id);
            // window.location = (`${id}`);
        },
    }

    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Table hover className="table-columned" >
                        <tbody>
                            <tr>
                                {/*This is an editable field that only accepts currency. should have USD masking on it*/}
                                <th scope="row" width='30%'>Daily Insurance Rate</th>
                                <td width='10%'>$24.00</td>
                                <th scope="row" width='5%'>Per</th>
                                {/*this is a selection field options: (Day, Sqft Per Day) Day Is Default*/}
                                <td >Day</td>
                            </tr>
                            <tr>
                                <th scope="row" width='30%'>Insurance Company</th>
                                <td>Loyd's Of London</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md={6}>
                    <Table hover className="table-columned" >
                        <tbody>
                            <tr>
                                <th scope="row" width='30%'>Estimated Monthly Ins</th>
                                <td>$288</td>
                            </tr>
                            <tr>
                                <th scope="row" width='30%'>Policy Number</th>
                                <td>343245324FREFV345</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <hr />
            <Card.Header>
                <Card.Title as="h5">Insurance</Card.Title>
                <InsurancePaymentModal id={props.id && props.id} />
                <div className="switch d-inline m-r-10 float-right">
                    <Form.Control
                        type="checkbox"
                        id="insswitch"
                        famswitch={FamSwitch}
                        onChange={() => toggleHandler}
                    />
                    <Form.Label htmlFor="insswitch" className="cr" />
                    <Form.Label>Show Full Accounting</Form.Label>
                </div>
            </Card.Header>
            <div className="ag-theme-alpine" style={{ height: '100%' }}>
                <AgGridReact
                    domLayout={'autoHeight'}
                    frameworkComponents={frameworkComponents}
                    defaultColDef={defaultColDef}
                    sizeColsToFix={true}
                    autoSizeColumns={'allColIds'}
                    quickFilter={'1'}
                    rowData={rowData}>
                    <AgGridColumn field="date_received" headerName="Date" flex={1} />
                    <AgGridColumn field="due_date" headerName="Due Date" flex={1} />
                    <AgGridColumn field="entity" headerName="Entity Name" flex={1} />
                    <AgGridColumn field="bill_type" headerName="Type" flex={1} />
                    <AgGridColumn field="debit" headerName="Debit" flex={1} valueFormatter={currencyFormatter} />
                    <AgGridColumn field="credit" headerName="Credit" flex={1} valueFormatter={currencyFormatter} />
                    <AgGridColumn headerName="balance" flex={1} valueGetter=" data.credit - data.debit" valueFormatter={currencyFormatter} />
                    <AgGridColumn field="id" headerName="" suppressMenu={true} cellRenderer={'btnCellRenderer'} cellRendererParams={cellRendererParams} filter={false} flex={.5} />
                </AgGridReact>
            </div>
        </React.Fragment>
    );
}

function currencyFormatter(params) {
    return '$' + formatNumber(params.value);
}

function formatNumber(number) {
    return Math.abs(number)
        .toFixed(2)
        .toLocaleString('en-US')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}


export default InsuranceTabView;
