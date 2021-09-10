import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Button, Card, Form, OverlayTrigger, Tooltip, Col, Row, Table } from 'react-bootstrap';
import BillAddFundsModal from "../modals/BillAddFundsModal";
import BillPaymentModal from "../modals/BillPaymentModal";
import BillEstimateModal from "../modals/BillEstimateModal";

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { API_SERVER } from "../../../config/constant";
import DeleteButton from "../../../components/AgGrid/DeleteButton";
import axios from "axios";


const BillsTabView = props => {
    const [rowData, setRowData] = useState([]);
    const [billsData, setBillsData] = useState([]);
    const [gridApi, setGridApi] = useState(null);
    const [toggle, setToggle] = useState(0);

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
        fetch(`${API_SERVER}api/trust/bills/?format=json&trust_id=${props.id}&line_choice=misc`)
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, [toggle]);

    const handleDelete = id => {
        axios.delete(`${API_SERVER}api/trust/bills/${id}/`)
            .then(res => {
                console.log("Response", res.data)
                setToggle(!toggle)
            }).catch(err => {
                console.log(err)
            })
    }

    const frameworkComponents = {
        btnCellRenderer: DeleteButton
    }

    const cellRendererParams = {
        clicked: function (id) {
            handleDelete(id);
            // window.location = (`${id}`);
        },
    }

    const onGridReady = ( params ) => {
        setGridApi(params.api);
    }

    // quick filter text change
    const gridFilterText = ( event ) => {
        gridApi.setQuickFilter( event.target.value );
    }

    
    return (
        <React.Fragment>
            <Card.Header>
                <Card.Title as="h5">Other Bills</Card.Title>
                <BillEstimateModal toggle={toggle} setToggle={setToggle} id={props.id && props.id} />
                <BillPaymentModal toggle={toggle} setToggle={setToggle} id={props.id && props.id} />
                <BillAddFundsModal toggle={toggle} setToggle={setToggle} id={props.id && props.id} />
                <input style={{border:"1px solid lightgray",borderRadius:'5px',outline:'none',height:'32px'}} type="search" placeholder="Search Here..." onChange={ gridFilterText } />
                <div className="switch d-inline m-r-10 float-right">
                    <Form.Control
                        type="checkbox"
                        id="billsswitch"
                        famswitch={FamSwitch}
                        onChange={() => toggleHandler}
                    />
                    <Form.Label htmlFor="billsswitch" className="cr" />
                    <Form.Label className="ml-2">Show Full Accounting</Form.Label>
                </div>
            </Card.Header>
            
                
            
            <div className="ag-theme-alpine" style={{ height: '100%' }}>
                <AgGridReact
                    domLayout={'autoHeight'}
                    frameworkComponents={frameworkComponents}
                    onGridReady={onGridReady}
                    defaultColDef={defaultColDef}
                    sizeColsToFix={true}
                    autoSizeColumns={'allColIds'}
                    quickFilter={'1'}
                    rowData={rowData}>
                    <AgGridColumn field="date_received" headerName="Date" flex={1} />
                    <AgGridColumn field="due_date" headerName="Due Date" flex={1} />
                    <AgGridColumn field="entity" headerName="Entity Name" flex={1} />
                    <AgGridColumn field="charge_type" headerName="Type" flex={1} />
                    <AgGridColumn field="debit" headerName="Debit" flex={1} valueFormatter={currencyFormatter} />
                    <AgGridColumn field="credit" headerName="Credit" flex={1} valueFormatter={currencyFormatter} />
                    <AgGridColumn headerName="balance" flex={1} valueGetter="data.credit - data.debit" valueFormatter={currencyFormatter} />
                    <AgGridColumn field="id" headerName="" suppressMenu={true} cellRenderer={'btnCellRenderer'} cellRendererParams={cellRendererParams} sort={false} flex={.5} />
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

export default BillsTabView;
