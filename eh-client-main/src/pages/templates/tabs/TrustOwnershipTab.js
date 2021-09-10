import React from 'react';
import {Row, Col, Card, Table, Tooltip, Button, OverlayTrigger} from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';

import makeData from '../../../../data/tableData';


export function OwnershipTableData({ columns, data }) {
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

function OwnershipTabView() {
    const columns = React.useMemo(
        () => [
            {

                Header: 'Date',
                accessor: 'date'
            },
            {
                //owning Entity FK -Contacts
                Header: 'Owner',
                accessor: 'lastName'
            },
            {
                // Ownership Type Selection Field (3rd Party, Investor, E&H, Family)
                Header: 'Type',
                accessor: 'type2'
            },
            {
                // Dec Field
                Header: 'Sale Price',
                accessor: 'mon'
            },
            {
                // Selection Field showing what we used to buy the propery (USD,HBC Credit, Crypto, Asset)
                Header: 'Currency',
                accessor: 'status'
            },
            {
                // Text Field
                Header: 'Description',
                accessor: 'desc'
            },



        ],
        []
    );

    const data = React.useMemo(() => makeData(4), []);

    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Table hover className="table-columned" >
                        <tbody>
                            <tr>
                                <th scope="row" width='30%'>Purchase Contract Code</th>
                                <td> 2E4DRFD345</td>
                            </tr>
                            {/* realtor auction company etc this should link to contacts */}
                            <tr>
                                <th scope="row" width='30%'>Property Source</th>
                                <td> Auction.com</td>
                            </tr>
                            <tr>
                                <th scope="row" width='30%'>E&H Purchase Price</th>
                                <td> $23,000.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col md={6}>
                    <Table hover className="table-columned" >
                        <tbody>
                            <tr>
                                <th scope="row" width='30%'>ARV</th>
                                <td> $83,000.00</td>
                            </tr>
                            <tr>
                                <th scope="row" width='30%'>Investor Price</th>
                                <td> $53,000.00</td>
                            </tr>
                            <tr>
                                <th scope="row" width='30%'>Warranty</th>
                                <td> $5,000.00</td>
                            </tr>
                            <tr>
                                <th scope="row" width='30%'>EasyHomes List Price</th>
                                <td>$65,000.00</td>
                            </tr>
                            <tr>
                                <th scope="row" width='30%'>PI Approved Price</th>
                                <td>$58,000.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <hr />
            <Card.Header>
                <Card.Title as="h5">Ownership History</Card.Title>
                <OverlayTrigger overlay={<Tooltip>Sell To Investor, Buy Back, Purchase, etc</Tooltip>} style={{ float: "right" }}>
                                            <Button className="shadow-1 theme-bg border"  >Change Ownership</Button>
                                        </OverlayTrigger>
            </Card.Header>
            <Card.Body>
                <OwnershipTableData columns={columns} data={data} />
            </Card.Body>
        </React.Fragment>
    );
}

export default OwnershipTabView;
