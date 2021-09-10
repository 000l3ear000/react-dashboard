import React, {useState} from 'react';
import {Button, Card, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';

import makeData from '../../../../data/tableData';


export function FamilyTableData({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data
        },
        useSortBy
    );



    // We don't want to render all 2000 rows for this example, so cap
    // it at 20 for this use case
    const firstPageRows = rows.slice(0, 20);

    return (
        <>
            <BTable striped bordered hover responsive {...getTableProps()}>
                <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            // Add the sorting props to control sorting. For this example
                            // we can add them into the header props
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                {/* Add a sort direction indicator */}
                                <span>
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <span className="feather icon-arrow-down text-muted float-right mt-1" />
                                            ) : (
                                                <span className="feather icon-arrow-up text-muted float-right mt-1" />
                                            )
                                        ) : (
                                            ''
                                        )}
                                    </span>
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {firstPageRows.map((row, i) => {
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
        </>
    );
}

function FamilyTabView() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Family Data',
                columns: [
                    {
                        //Date
                        Header: 'Move In',
                        accessor: 'date'
                    },
                    {
                        //Date
                        Header: 'Move Out',
                        accessor: 'date2'
                    },
                    {
                        //FK-contacts
                        Header: 'Family',
                        accessor: 'word'
                    },
                    {
                        //Dec Field
                        Header: 'Price',
                        accessor: 'visits'
                    }

                ]
            },
            {
                Header: 'Investor',
                columns: [
                    {
                        // FK- Contact
                        Header: 'Name',
                        accessor: 'word1'
                    },
                    {
                        // Dec
                        Header: 'Inv Purchase',
                        accessor: 'mon'
                    },
                    {
                        // Date Inv Purchased
                        Header: 'Date',
                        accessor: 'date3'
                    }
                ]
            }
        ],
        []
    );

    // This is for the Edit switch
    const [FamSwitch, setFamSwitch] = useState(false);

    const toggleHandler = () => {
        setFamSwitch((prevState) => !prevState);
    };


    const data = React.useMemo(() => makeData(3), []);

    return (
        <React.Fragment>
            <Card.Header>
                <Card.Title as="h5">Family History</Card.Title>
                <OverlayTrigger overlay={<Tooltip>Create a loan by pressing this button</Tooltip>} style={{ float: "right" }}>
                    <Button className="shadow-1 theme-bg border">Add Loan</Button>
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
            <Card.Body>
                <FamilyTableData columns={columns} data={data} />
            </Card.Body>
        </React.Fragment>
    );
}

export default FamilyTabView;
