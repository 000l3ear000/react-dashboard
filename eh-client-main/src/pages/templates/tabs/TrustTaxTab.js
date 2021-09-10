import React, {useState} from 'react';
import {Button, Row, Col, Card, Table, Form} from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';

import makeData from '../../../../data/tableData';


export function TaxTableData({ columns, data }) {
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

function TaxTabView() {
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
            {
                Header: <div className="switch d-inline">
                    <span className="mr-2" >Edit</span>
                    <Form.Control type="checkbox" id="editswitch"/>
                    <Form.Label htmlFor="editswitch" className="cr"/>
                </div>,
                accessor: 'cont',
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
            <hr/>
            <Card.Header>
                <Card.Title as="h5">Taxes</Card.Title>
                <Button className="shadow-1 theme-bg border">
                    Add Tax Estimate
                </Button>
                <Button className="shadow-1 theme-bg border">
                    Pay Tax Bill
                </Button>
                <div className="switch d-inline m-r-10 float-right">
                    <Form.Control
                        type="checkbox"
                        id="taxswitch"
                        famswitch={FamSwitch}
                        onChange={() => toggleHandler}
                    />
                    <Form.Label htmlFor="taxswitch" className="cr" />
                    <Form.Label className="ml-2">Show Full Accounting</Form.Label>
                </div>
            </Card.Header>
            <Card.Body>
                <TaxTableData columns={columns} data={data} />
            </Card.Body>
        </React.Fragment>
    );
}

export default TaxTabView;
