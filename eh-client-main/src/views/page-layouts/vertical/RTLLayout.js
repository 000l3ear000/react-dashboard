import React, { useContext, useEffect } from 'react';
import { Card, Col, Row, Table, ListGroup } from 'react-bootstrap';
import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';
import CommonContent from '../CommonContent';

const RTLLayout = () => {
    const configContext = useContext(ConfigContext);
    const { layout, rtlLayout } = configContext.state;
    const { dispatch } = configContext;

    useEffect(() => {
        if (layout !== 'vertical') {
            dispatch({ type: actionType.CHANGE_LAYOUT, layout: 'vertical' });
        }
        if (!rtlLayout) {
            dispatch({ type: actionType.RTL_LAYOUT });
        }
    }, [layout, rtlLayout, dispatch]);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">RTL Layout</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                In RTL Layout - The entire layout looks like Right-To-Left alignment. The entire page content starts from
                                the right side of the page.
                            </p>
                            <div className="alert alert-info mb-0" role="alert">
                                <p className="mb-0">
                                    RTL Layout is mostly preferred by Arabic, Hebrew, Persian, and Urdu languages which are written from
                                    right to left.
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
                                                    layout: <code>vertical</code>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" bsPrefix=" ">
                                                    rtlLayout: <code>true</code>
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
