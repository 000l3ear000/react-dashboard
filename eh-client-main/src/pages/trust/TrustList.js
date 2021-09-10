import React, { useState, useEffect, useRef, } from 'react';
import { Button, Card, } from 'react-bootstrap';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { API_SERVER } from '../../config/constant';
import BtnCellRenderer from "../../components/AgGrid/BtnCellRenderer";

import axios from 'axios';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const App = props => {
    const [rowData, setRowData] = useState([]);
    const [trustSate, setTrustState] = useState([]);
    const gridRef = useRef(null);

    useEffect(() => {
            fetch(`${API_SERVER}api/trust/trust/`)
                .then(result => result.json())
                .then(rowData => setRowData(rowData))
        },
        []);

    const tokenConfig = {
        headers: {
            'Content-Type': 'application/json'
        },
    }

    const handleUpdate = body => {
        console.log("Update", body.data.id, "Field:", body.colDef.field, "New Value:", body.newValue)
        const id = body.data.id
        const obj = {};
        obj[body.colDef.field] = body.newValue

        axios.put(`${API_SERVER}api/trust/trust/${id}/`, JSON.stringify(obj), tokenConfig)
            .then(res => {
                console.log("Response", res.data)
            }).catch(err => {

            console.log(err)
        })
    }

    useEffect(() => {
            fetch(`${API_SERVER}api/trust/trust/`)
                .then(result => result.json())
                .then(rowData => setRowData(rowData))
        },
        []);

    // these are the AG grid Col Parameters
    const defaultColDef = {
        filter: 'agMultiColumnFilter',
        sortable: true,
        editable: true,
        enableRowGroup: true,
        resizable: true,
        flex: 1,
    }

    const frameworkComponents = {
        btnCellRenderer: BtnCellRenderer
    }

    const cellRendererParams = {
        clicked: function (id) {
            window.location = (`${id}`);
        },
    }

    return (
        <Card>
            <Card.Body>
                <div className="ag-theme-alpine" style={{ height: 600 }}>
                    {/*these Buttons do not do anything, it chousle be a link to the create trust form */}
                    <Button className="shadow-1 theme-bg border border-0"
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href='/trust';
                            }}>
                        Create </Button>

                    <AgGridReact
                        sideBar={false}
                        hiddenByDefault={false}
                        suppressFilterSearch={false}

                        frameworkComponents={frameworkComponents}

                        defaultColDef={defaultColDef}
                        ref={gridRef}
                        rowData={rowData}

                        // Editing
                        stopEditingWhenCellsLoseFocus={true}
                        onCellValueChanged={handleUpdate}

                        // groupping
                        rowGroupPanelShow={'always'}
                        groupSelectsChildren={true}

                        // Styling
                        autoSizePadding={0}
                        colResizeDefault={'shift'}
                        suppressDragLeaveHidesColumns={true}

                        // Charts
                        enableCharts={true}

                        // selection
                        rowSelection="multiple"
                        enableRangeSelection={true}
                        enableRangeHandle={true}
                        enableFillHandle={false}
                        suppressRowClickSelection={true}
                    >

                        <AgGridColumn headerName="Address">
                            <AgGridColumn field="id" headerName="" suppressMenu={true} cellRenderer={'btnCellRenderer'} cellRendererParams={cellRendererParams} editable={false} sort={false} filter={false} flex={.5} />
                            <AgGridColumn field="name" headerName="Trust" checkboxSelection={true} />
                            <AgGridColumn field="address" headerName="Address" columnGroupShow="open" flex={2} />
                        </AgGridColumn>
                        <AgGridColumn headerName="Ownership">
                            <AgGridColumn field="beneficiary_id" headerName="Investor" columnGroupShow="closed" />
                            <AgGridColumn field="family_id" headerName="Family" columnGroupShow="closed" />
                            <AgGridColumn field="trustee" headerName="Trustee" />
                        </AgGridColumn>
                        <AgGridColumn headerName="Pricing">
                            <AgGridColumn field="arv" headerName="ARV" columnGroupShow="open" valueFormatter={currencyFormatter} />
                            <AgGridColumn field="eh_list_price" headerName="EasyHomes List Price" valueFormatter={currencyFormatter} />
                            <AgGridColumn field="pi_approved_price" headerName="PI Approved" columnGroupShow="open" valueFormatter={currencyFormatter} />
                            <AgGridColumn field="warranty" headerName="Warrenty" columnGroupShow="open" valueFormatter={currencyFormatter} />
                            <AgGridColumn field="investor_price" headerName="Inv Price" columnGroupShow="open" valueFormatter={currencyFormatter} />
                        </AgGridColumn>
                        <AgGridColumn headerName="Dates">
                            <AgGridColumn field="investor_purchase_date" headerName="Inv Purchase Date" />
                            <AgGridColumn field="trust_create_date" headerName="Create Date" columnGroupShow="open" />
                            <AgGridColumn field="deed_record_date" headerName="Deed Record" columnGroupShow="open" />
                            <AgGridColumn field="purchase_date" headerName="Purchase" columnGroupShow="open" />
                        </AgGridColumn>
                        <AgGridColumn headerName="Land Contract">
                            <AgGridColumn field="occupied_stage_id" headerName="Occupied?" columnGroupShow="closed" />
                            <AgGridColumn field="land_contract_name_id" headerName="LC Number" columnGroupShow="open" />
                            <AgGridColumn field="loan_amount" headerName="Loan Amount" columnGroupShow="open" valueFormatter={currencyFormatter} />
                        </AgGridColumn>
                    </AgGridReact>
                </div>
            </Card.Body>
        </Card>
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

export default App;