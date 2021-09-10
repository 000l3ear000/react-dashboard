import React from 'react';
import { Row, Col, Card, Table, Tooltip, Button, OverlayTrigger } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';

import makeData from '../../data/tableData';


// Data for Tab Table Goes Here
export function TemplateTableData({ columns, data }) {
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

// Tab Export Function
function TemplateTabView() {

    // Form Data Goes Here
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

                {/* -------------------- Fields Section -------------------- */}
                <Card.Body>
                    <Row>

                        {/* -------------------- Left Column Fields -------------------- */}
                        <Col md={6}>
                            <Form>

                                {/* -------------------- Read Only Mode Fields -------------------- */}
                                <Table hover className="table-columned" >
                                    <tbody>

                                        {/* -------------------- Endpoint Details -------------------- */}
                                        <tr>
                                            <th scope="row" width='30%'>Field Name</th>
                                            <td>Field Data</td>
                                        </tr>

                                        {/* -------------------- Endpoint Details -------------------- */}
                                        <tr>
                                            <th scope="row" width='30%'>Field Name</th>
                                            <td>Field Data</td>
                                        </tr>

                                        {/* -------------------- Endpoint Details -------------------- */}
                                        <tr>
                                            <th scope="row" width='30%'>Field Name</th>
                                            <td>Field Data</td>
                                        </tr>

                                    </tbody>
                                </Table>



                            </Form>
                        </Col>
                        {/* -------------------- Right Column Fields -------------------- */}
                        <Col md={6}>
                            <Form>

                                {/* -------------------- Edit Mode Fields -------------------- */}

                                {/* -------------------- Address Field -------------------- */}
                                <Form.Group as={Row}>
                                    <Form.Label className={"mb-n5"} column sm={4}>Address Field Name</Form.Label>
                                    <Col sm={8}>
                                        {/* -------------------- Endpoint Details -------------------- */}
                                        <Form.Control type="address" placeholder="address field placeholder" />
                                    </Col>
                                </Form.Group>

                                {/* -------------------- Readonly Field -------------------- */}
                                <Form.Group as={Row}>
                                    <Form.Label className={"mb-n5"} column sm={4}>Read Only Field Name</Form.Label>
                                    <Col sm={8}>
                                        {/* -------------------- Endpoint Details -------------------- */}
                                        <Form.Control readOnly defaultValue="Default Value" />
                                    </Col>
                                </Form.Group>

                                {/* -------------------- Selection Field -------------------- */}
                                <Form.Group as={Row}>
                                    <Form.Label className={"mb-n5"} column sm={4}>Selection Field Name</Form.Label>
                                    <Col sm={8}>
                                        {/* -------------------- Endpoint Details -------------------- */}
                                        <Form.Control as="select">
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>

                                {/* -------------------- Formatted Date Field -------------------- */}
                                <Form.Group as={Row}>
                                    {/* -------------------- Endpoint Details -------------------- */}
                                    <Form.Label className={"mb-n5"} column sm={4}>Formatted Date Field Name</Form.Label>
                                    <Col sm={8}>
                                        {/* -------------------- Date Data and Format Details -------------------- */}
                                        <DatePicker selected={startDate} onChange={handleChange} dateFormat="MMMM d, yyyy" className="form-control" />
                                    </Col>
                                </Form.Group>

                            </Form>
                        </Col>
                    </Row>
                </Card.Body>

            </Row>
            <hr />

            {/* -------------------- Table Section -------------------- */}
            <Card.Header>
                <Card.Title as="h5">Table Label</Card.Title>

                {/* -------------------- Action Button Section -------------------- */}
                <OverlayTrigger overlay={<Tooltip>Sell To Investor, Buy Back, Purchase, etc</Tooltip>} style={{ float: "right" }}>
                    <Button className="shadow-1 theme-bg border">Action Button</Button>
                </OverlayTrigger>

            </Card.Header>

            {/* -------------------- Table -------------------- */}
            <Card.Body>
                <OwnershipTableData columns={columns} data={data} />
            </Card.Body>

        </React.Fragment>
    );
}

export default TemplateTabView;
