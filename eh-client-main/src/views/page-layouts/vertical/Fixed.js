import React, { useContext, useEffect } from 'react';
import { Card, Col, Row, Table, ListGroup } from 'react-bootstrap';
import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';
import CommonContent from '../CommonContent';

const Fixed = () => {
    const configContext = useContext(ConfigContext);
    const { layout, navFixedLayout, headerFixedLayout } = configContext.state;
    const { dispatch } = configContext;

    useEffect(() => {
        if (layout !== 'vertical') {
            dispatch({ type: actionType.CHANGE_LAYOUT, layout: 'vertical' });
        }
        if (!navFixedLayout) {
            dispatch({ type: actionType.NAV_FIXED_LAYOUT });
        }
        if (!headerFixedLayout) {
            dispatch({ type: actionType.HEADER_FIXED_LAYOUT });
        }
    }, [layout, navFixedLayout, headerFixedLayout, dispatch]);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Fixed Layout</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>In Fixed Layout - Header & Sidebar being fixed while scrolling the page.</p>
                            <div className="alert alert-info mb-0" role="alert">
                                <p className="mb-0">
                                    It is best suited for those applications where you need the sidebar & header elements easily accessible
                                    every time when you scroll the page.
                                </p>
                            </div>
                            <h5 className="m-15">You can edit this file at [ ../src/app/app-constant.js ] </h5>
                            <Table bordered striped responsive>
                                <thead className="header-table">
                                    <tr>
                                        <th>Configuration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <ListGroup as="ul" bsPrefix="" className="p-l-40">
                                                <ListGroup.Item as="li" bsPrefix=" ">
                                                    layout: <code>vertical</code>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" bsPrefix=" ">
                                                    navFixedLayout: <code>true</code>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" bsPrefix=" ">
                                                    headerFixedLayout: <code>true</code>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <CommonContent />
        </React.Fragment>
    );
};

export default Fixed;
