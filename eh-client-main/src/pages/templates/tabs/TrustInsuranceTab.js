import React, {useState} from 'react';
import {Row, Col, Card, Table, Form, Button} from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';

import makeData from '../../../../data/tableData';
import {TaxTableData} from "./TrustTaxTab";


export function InsuranceTableData({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    });

    // Render the UI for your table
    return (
        <BTable striped bordered hover responsive {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </BTable>
    );
}

function InsuranceTabView() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'date'
            },
            {
                Header: 'Date Due',
                accessor: 'date2'
            },
            {
                Header: 'Entity Name',
                accessor: 'word1'
            },
            {
                Header: 'Type',
                accessor: 'type'
            },
            {
                Header: 'Deposit',
                accessor: 'mon'
            },
            {
                Header: 'Withdrawal',
                accessor: 'mon2'
            },
            {
                Header: 'Balance',
                accessor: 'mon3'
            },

        ],
        []
    );

    const data = React.useMemo(() => makeData(4), []);


            // This is for the Edit switch
    const [FamSwitch, setFamSwitch] = useState(false);

    const toggleHandler = () => {
        setFamSwitch((prevState) => !prevState);
    };


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
            <hr/>
            <Card.Header>
                <Card.Title as="h5">Taxes</Card.Title>
                <Button className="shadow-1 theme-bg border">
                    Pay Insurance Bill
                </Button>
                <div className="switch d-inline m-r-10 float-right">
                    <Form.Control
                        type="checkbox"
                        id="insswitch"
                        famswitch={FamSwitch}
                        onChange={() => toggleHandler}
                    />
                    <Form.Label htmlFor="insswitch" className="cr" />
                    <Form.Label className="ml-2">Show Full Accounting</Form.Label>
                </div>
            </Card.Header>
            <Card.Body>
                <TaxTableData columns={columns} data={data} />
            </Card.Body>
        </React.Fragment>
    );
}

export default InsuranceTabView;
