import React, { useContext, useEffect } from 'react';
import { Card, Col, ListGroup, Row, Table } from 'react-bootstrap';
import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';
import CommonContent from '../CommonContent';
import useWindowSize from '../../../hooks/useWindowSize';

const RTLLayout = () => {
    const configContext = useContext(ConfigContext);
    const { layout, navFixedLayout, headerFixedLayout, rtlLayout } = configContext.state;
    const { dispatch } = configContext;
    const windowSize = useWindowSize();

    useEffect(() => {
        if (layout !== 'horizontal' && windowSize.width > 991) {
            dispatch({ type: actionType.CHANGE_LAYOUT, layout: 'horizontal' });
        }
        if (!rtlLayout) {
            dispatch({ type: actionType.RTL_LAYOUT });
        }
        if (navFixedLayout) {
            dispatch({ type: actionType.NAV_FIXED_LAYOUT });
        }
        if (headerFixedLayout) {
            dispatch({ type: actionType.HEADER_FIXED_LAYOUT });
        }
    }, [layout, navFixedLayout, headerFixedLayout, rtlLayout, windowSize, dispatch]);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Horizontal RTL Layout</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                In RTL Horizontal Layout - Navigation bar is set to be in Right-To-Left direction as a Horizontal way. It
                                also showing/hidden while scrolling up/down.
                            </p>
                            <div className="alert alert-info mb-0" role="alert">
                                <p className="mb-0">
                                    RTL Horizontal Layout is mostly preferred by Arabic, Hebrew, Persian, and Urdu languages which are
                                    written from right to left.
                                </p>
                            </div>
                            <h5 className="m-15">You can edit this file at [ ../src/config/constant.js ] </h5>
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
                                                    layout: <code>horizontal</code>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" bsPrefix=" ">
                                                    rtlLayout: <code>true</code>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" bsPrefix=" ">
                                                    navFixedLayout: <code>false</code>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" bsPrefix=" ">
                                                    headerFixedLayout: <code>false</code>
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

export default RTLLayout;
