import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { Button, Card, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { API_SERVER } from "../../../config/constant";

import LoanModal from '../modals/LoanModal';

const FamilyTabView = props => {
    const [rowData, setRowData] = useState([]);

    // This is for the Edit switch
    const [FamSwitch, setFamSwitch] = useState(false);

    const toggleHandler = () => {
        setFamSwitch((prevState) => !prevState);
    };

    // these are the AG grid Col Parameters
    const defaultColDef = {
        filter: true,
        sortable: false,
        sortable: true,
        editable: true,
    }


    useEffect((id) => {
        fetch(`${API_SERVER}api/trust/family-history/?format=json&trust_id=${props.id}`)
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, [props.id]);


    return (
        <React.Fragment>
            <Card.Header>
                <Card.Title as="h5">Family History</Card.Title>
                <OverlayTrigger overlay={<Tooltip>Create a loan by pressing this button</Tooltip>} style={{ float: "right" }}>
                    <LoanModal />
                </OverlayTrigger>
                <div className="switch d-inline m-r-10 float-right">
                    <Form.Control
                        type="checkbox"
                        id="famswitch"
                        famswitch={FamSwitch}
                        onChange={() => toggleHandler}
                    />
                    <Form.Label htmlFor="famswitch" className="cr" />
                    <Form.Label>Show Inv History</Form.Label>
                </div>
            </Card.Header>
            <div className="ag-theme-alpine" style={{ height: 400 }}>
                <AgGridReact
                    defaultColDef={defaultColDef}
                    sizeColsToFix={true}
                    autoSizeColumns={'allColIds'}
                    quickFilter={'1'}
                    rowData={rowData}>
                    <AgGridColumn field="family_id" headerName="Family" width={210} />
                    <AgGridColumn field="fam_price" headerName="Price" width={110} valueFormatter={currencyFormatter} />
                    <AgGridColumn field="move_in_date" headerName="Move In" width={130} />
                    <AgGridColumn field="move_out_date" headerName="Move Out" width={130} />
                    <AgGridColumn field="investor_id" headerName="Investor" width={210} />
                    <AgGridColumn field="inv_purchase_price" headerName="Price" width={110} valueFormatter={currencyFormatter} />
                    <AgGridColumn field="purchase_date" headerName="Purchase Date" flex={1} />
                </AgGridReact>
            </div>
        </React.Fragment>
    );
};

function currencyFormatter(params) {
    return '$' + formatNumber(params.value);
}

function formatNumber(number) {
    return Math.abs(number)
        .toFixed(2)
        .toLocaleString('en-US')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export default FamilyTabView;