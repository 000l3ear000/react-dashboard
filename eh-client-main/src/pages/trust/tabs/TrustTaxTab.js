import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Button, Card, Form, OverlayTrigger, Tooltip, Col, Row, Table } from 'react-bootstrap';
import TaxEstimateModal from '../modals/TaxEstimateModal';
import TaxPaymentModal from '../modals/TaxPaymentModal';
import './demo.css'
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { API_SERVER } from "../../../config/constant";
import DeleteButton from "../../../components/AgGrid/DeleteButton";
import axios from "axios";




const TaxTabView = props => {
    const [rowData, setRowData] = useState([]);
    const [taxState, setTaxState] = useState({});

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

    const styles={
        pass:{
            fontWeight:'bold',
            height:'100%'
        },
        fail:{
            height:'100%'
        }
    }
    


    useEffect((id) => {
        fetch(`${API_SERVER}api/trust/tax/?format=json&trust_id=${props.id}`)
            .then(result => result.json())
            .then(taxState => { setTaxState(taxState); console.log("This is tax state >>> ", taxState); })
            

        fetch(`${API_SERVER}api/trust/bills/?format=json&trust_id=${props.id}&line_choice=tax`)
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);


    useEffect(() => {
        console.log("HERE IS PEYO",rowData)
    }, [rowData])


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
            handleDelete(id);
            // window.location = (`${id}`);
        },
    }
    var gridOptions = {
        
        rowClassRules: {
          "pass": params => params.api.getValue("estimate", params.node) === true,
          "fail": params => params.api.getValue("estimate", params.node) === false
        },
      };

    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Table hover className="table-columned" >
                        <tbody>
                            <tr>
                                {/*This is a calculated field and read only*/}
                                <th scope="row" width='30%'>Estimated Monthly Tax</th>
                                <td>$124.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md={6}>
                    <Table hover className="table-columned" >
                        <tbody>
                            <tr>
                                {/*This is a calculated field and read only*/}
                                <th scope="row" width='30%'>Estimated Annual Tax</th>
                                <td> $1200</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <hr />
            <Card.Header>
                <Card.Title as="h5">Taxes</Card.Title>
                <TaxEstimateModal id={props.id && props.id} />
                <TaxPaymentModal id={props.id && props.id} />
                <div className="switch d-inline m-r-10 float-right">
                    <Form.Control
                        type="checkbox"
                        id="taxswitch"
                        famswitch={FamSwitch}
                        onChange={() => toggleHandler}
                    />
                    <Form.Label htmlFor="taxswitch" className="cr" />
                    <Form.Label>Show Full Accounting</Form.Label>
                </div>
            </Card.Header>
            <div className="ag-theme-alpine" >
                <AgGridReact
                    gridOptions={gridOptions}
                    rowStyle={{}}
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
                    <AgGridColumn headerName="balance" flex={1} valueGetter="data.credit - data.debit" type="totalColumn" valueFormatter={currencyFormatter} />
                    <AgGridColumn field="estimate" flex={1} />
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


export default TaxTabView;
