import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';

import makeData from '../../../../data/tableData';


export function MarketingHistoryData({ columns, data }) {
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

export function MarketingReportData({ columns, data }) {
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

// It would be a lot better to set this up as a for loop for each table, but for now this will display what we need
function MarketingTab() {
    const historyColumns = React.useMemo(
        () => [
            {
                Header: 'On the Market',
                accessor: 'date'
            },
            {
                Header: 'Off The Market',
                accessor: 'date2'
            },
            {
                Header: 'Days On Market',
                accessor: 'age'
            },

        ],
        []
    );
    const reportColumns = React.useMemo(
        () => [
            {
                Header: 'Date',
                accessor: 'date2'
            },
            {
                Header: 'Zillow Visits',
                accessor: 'num'
            },
            {
                Header: 'Reaches',
                accessor: 'num2'
            },
            {
                Header: 'Home Visits',
                accessor: 'num3'
            },
            {
                Header: 'Applications',
                accessor: 'progress'
            },
            {
                Header: 'Contracts',
                accessor: 'age'
            },

        ],
        []
    );

    const historyData = React.useMemo(() => makeData(3), []);
    const reportData = React.useMemo(() => makeData(4), []);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card.Header>
                        <Card.Title as="h5">Marketing History</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <MarketingHistoryData columns={historyColumns} data={historyData} />
                    </Card.Body>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card.Header>
                        <Card.Title as="h5">Marketing Report</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <MarketingReportData columns={reportColumns} data={reportData} />
                    </Card.Body>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default MarketingTab;
