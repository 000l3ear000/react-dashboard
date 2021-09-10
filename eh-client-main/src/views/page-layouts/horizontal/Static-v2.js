import React, { useContext, useEffect } from 'react';
import { Card, Col, ListGroup, Row, Table } from 'react-bootstrap';
import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';
import CommonContent from '../CommonContent';
import useWindowSize from '../../../hooks/useWindowSize';

const StaticV2 = () => {
    const configContext = useContext(ConfigContext);
    const { layout, navFixedLayout, headerFixedLayout } = configContext.state;
    const { dispatch } = configContext;
    const windowSize = useWindowSize();

    useEffect(() => {
        if (layout !== 'horizontal' && windowSize.width > 991) {
            dispatch({ type: actionType.CHANGE_LAYOUT, layout: 'horizontal' });
        }
        dispatch({ type: actionType.CHANGE_SUB_LAYOUT, subLayout: 'horizontal-2' });
    }, [layout, navFixedLayout, headerFixedLayout, windowSize, dispatch]);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Horizontal Layout V2</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                In Horizontal Layout V2 - Navigation bar is set in a Horizontal way with fixed width container. It also
                                showing/hidden while scrolling up/down.
                            </p>
                            <div className="alert alert-info mb-0" role="alert">
                                <p className="mb-0">
                                    It is best suited for those applications where you required your navigation is set to be a Horizontal
                                    way with fixed width container.
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
                                                    subLayout: <code>horizontal-2</code>
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

export default StaticV2;
