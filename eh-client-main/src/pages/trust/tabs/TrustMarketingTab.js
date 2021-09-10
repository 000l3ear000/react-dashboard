import React, {useEffect, useState} from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import { Button, Card, Form, OverlayTrigger, Tooltip, Row, Col, Table } from 'react-bootstrap';

import { API_SERVER } from '../../../config/constant';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios'

import DeleteButton from "../../../components/AgGrid/DeleteButton";

import MarketingReportModal from '../modals/MarketingReportModal';
import MarketingHistoryModal from '../modals/MarketingHistoryModal';


const MarketingTab = props => {
    const [HistoryRowData, setHistoryRowData] = useState([]);
    const [ReportRowData, setReportRowData] = useState([]);
    const [toggle, setToggle] = useState(0);


    // these are the AG grid Col Perameters
    const defaultColDef = {
        filter: true,
        sortable: false,
        editable: true,

    }


    useEffect((id) => {
        fetch(`${API_SERVER}api/trust/marketing-report/?format=json&trust_id=${props.id}`)
            .then(result => result.json())
            .then(rowData => setReportRowData(rowData))

        fetch(`${API_SERVER}api/trust/marketing-history/?format=json&trust_id=${props.id}`)
            .then(result => result.json())
            .then(rowData => setHistoryRowData(rowData))
    }, [toggle]);

        const frameworkComponents = {
        btnCellRenderer: DeleteButton
    }

    const handleHistoryDelete = id => {

        axios.delete(`${API_SERVER}api/trust/marketing-history/${id}/`)
            .then(res => {
                console.log("Response", res.data)
                setToggle(!toggle);
            }).catch(err => {

            console.log(err)
        })
    }

    const handleReportDelete = id => {

        axios.delete(`${API_SERVER}api/trust/marketing-report/${id}/`)
            .then(res => {
                console.log("Response", res.data)
                setToggle(!toggle);
            }).catch(err => {

            console.log(err)
        })
    }

    const cellRendererParams = {
        clicked: function (id) {
            handleHistoryDelete(id);
            // window.location = (`${id}`);
        },
    }

    const cellRendererParams2 = {
        clicked: function (id) {
            handleReportDelete(id);
            // window.location = (`${id}`);
        },
    }


    return (
        <React.Fragment>
            <React.Fragment>
                <Card.Header>
                    <Card.Title as="h5">Marketing History</Card.Title>
                    <OverlayTrigger overlay={<Tooltip>Sell To Investor, Buy Back, Purchase, etc</Tooltip>} style={{ float: "right" }}>
                            <MarketingHistoryModal id={ props.id } toggle={ toggle } setToggle={ setToggle } />
                    </OverlayTrigger>
                </Card.Header>
                    <div id className="ag-theme-alpine" >
                        <AgGridReact
                            domLayout={'autoHeight'}
                            frameworkComponents={frameworkComponents}
                            defaultColDef={defaultColDef}
                            sizeColsToFix={true}
                            autoSizeColumns={'allColIds'}
                            quickFilter={'1'}
                            rowData={HistoryRowData}>
                            <AgGridColumn field="on_market_date" headerName="On the Market" flex={1}/>
                            <AgGridColumn field="off_market_date" headerName="Off The Market"  flex={1}/>
                            <AgGridColumn field="days_on_market" headerName="Days On Market" flex={1}/>
                            <AgGridColumn field="id" headerName="" suppressMenu={true} cellRenderer={'btnCellRenderer'} cellRendererParams={cellRendererParams} filter={false} width={50} />
                        </AgGridReact>
                    </div>
            </React.Fragment>
            
            <React.Fragment>
                <Card.Header>
                    <Card.Title as="h5">Marketing Report</Card.Title>
                    <OverlayTrigger overlay={<Tooltip>Sell To Investor, Buy Back, Purchase, etc</Tooltip>} style={{ float: "right" }}>
                            <MarketingReportModal id={ props.id } toggle={ toggle } setToggle={ setToggle } />
                    </OverlayTrigger>
                </Card.Header>
                    <div id className="ag-theme-alpine" style={{height: '100%'}}>
                        <AgGridReact
                            domLayout={'autoHeight'}
                            defaultColDef={defaultColDef}
                            frameworkComponents={frameworkComponents}
                            sizeColsToFix={true}
                            autoSizeColumns={'allColIds'}
                            quickFilter={'1'}
                            rowData={ReportRowData}>
                            <AgGridColumn field="report_date" headerName="Date" flex={1} />
                            <AgGridColumn field="zillow_visits" headerName="Zillow Visits"  flex={1}/>
                            <AgGridColumn field="reaches" headerName="Reaches" flex={1}/>
                            <AgGridColumn field="applications" headerName="Applications"  flex={1}/>
                            <AgGridColumn field="contracts" headerName="Contracts" flex={1}/>
                            <AgGridColumn field="id" headerName="" suppressMenu={true} cellRenderer={'btnCellRenderer'} cellRendererParams={cellRendererParams2} filter={false} width={50} />
                        </AgGridReact>
                    </div>
            </React.Fragment>
            
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

export default MarketingTab;
