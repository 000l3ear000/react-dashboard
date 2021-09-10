import React, { useState } from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';

import makeData from '../../../../data/tableData';


export function BillsTableData({ columns, data }) {
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

function BillsTabView() {
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
            <Card.Header>
                <Card.Title as="h5">Other Bills</Card.Title>
                <Button className="shadow-1 theme-bg border">
                    Add Bill Estimate
                </Button>
                <Button className="shadow-1 theme-bg border">
                    Pay Bill
                </Button>
                <Button className="shadow-1 theme-bg border">
                    Add Funds
                </Button>
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
            <Card.Body>
                <BillsTableData columns={columns} data={data} />
            </Card.Body>
        </React.Fragment>
    );
}

export default BillsTabView;
