import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Card, Table, Tooltip, Button, OverlayTrigger } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { useTable, useSortBy } from 'react-table';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import makeData from '../../../data/tableData';

import { GET_TRUST_OWNERSHIP } from '../../../store/actions';

import { store } from '../../../store/index';
import { API_SERVER } from '../../../config/constant';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import OwnershipModal from '../modals/OwnershipModal';


function OwnershipTableData({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data
        },
        useSortBy
    );
};


function OwnershipTabView(props) {

    const [rowData, setRowData] = useState([]);

    // these are the AG grid Col Parameters
    const defaultColDef = {
        filter: true,
        sortable: false,

    }

    const dispatch = useDispatch();
    const [ownershipState, setOwnershipState] = useState({});

    const tokenConfig = () => {
        const token = store.getState().account.token


        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config
    }



    useEffect((id) => {
        fetch(`${API_SERVER}api/trust/ownership/?format=json&trust_id=${props.id}`)
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, [props.id]);

    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Table hover className="table-columned" >
                        <tbody>
                            <tr>
                                <th scope="row" width='30%'>Purchase Contract Code</th>
                                <td>{props.trust && props.trust.land_contract_name_id}</td>
                            </tr>
                            {/* realtor auction company etc this should link to contacts */}
                            <tr>
                                <th scope="row" width='30%'>Property Source</th>
                                <td> {props.trust && props.trust.property_source}</td>
                            </tr>
                            <tr>
                                <th scope="row" width='30%'>E&H Purchase Price</th>
                                <td> ${props.trust && props.trust.eh_list_price}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md={6}>
                    <Table hover className="table-columned" >
                        <tbody>
                            <tr>
                                <th scope="row" width='30%'>ARV</th>
                                <td> ${props.trust && props.trust.arv}</td>
                            </tr>
                            <tr>
                                <th scope="row" width='30%'>Investor Price</th>
                                <td> ${props.trust && props.trust.investor_price}</td>
                            </tr>
                            <tr>
                                <th scope="row" width='30%'>Warranty</th>
                                <td> ${props.trust && props.trust.warranty}</td>
                            </tr>
                            <tr>
                                <th scope="row" width='30%'>EasyHomes List Price</th>
                                <td>${props.trust && props.trust.eh_list_price}</td>
                            </tr>
                            <tr>
                                <th scope="row" width='30%'>PI Approved Price</th>
                                <td>${props.trust && props.trust.pi_approved_price}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <hr />
            <React.Fragment>
                <Card.Header>
                    <Row>
                        <Card.Title as="h5">Ownership History</Card.Title>
                        <OverlayTrigger overlay={<Tooltip>Sell To Investor, Buy Back, Purchase, etc</Tooltip>} style={{ float: "right" }}>
                            <OwnershipModal />
                        </OverlayTrigger>
                    </Row>
                </Card.Header>
                <div className="ag-theme-alpine" style={{ height: 400 }}>
                    <AgGridReact
                        defaultColDef={defaultColDef}
                        sizeColsToFix={true}
                        autoSizeColumns={'allColIds'}
                        quickFilter={'1'}
                        rowData={rowData}>
                        <AgGridColumn field="ownership_date" headerName="Date" width={140} />
                        <AgGridColumn field="owner_id" headerName="Owner" width={160} />
                        <AgGridColumn field="ownership" headerName="Type" width={170} />
                        <AgGridColumn field="sale_price" headerName="Sale Price" width={130} valueFormatter={currencyFormatter} />
                        <AgGridColumn field="currency" headerName="Currency" width={160} />
                        <AgGridColumn field="description" headerName="Description" width={300} />
                    </AgGridReact>
                </div>
            </React.Fragment>
        </React.Fragment>

    );
}

export default OwnershipTabView;

function currencyFormatter(params) {
    return '$' + formatNumber(params.value);
}

function formatNumber(number) {
    return Math.abs(number)
        .toFixed(2)
        .toLocaleString('en-US')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

