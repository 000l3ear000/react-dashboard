import React, { useContext, useEffect } from 'react';
import { Card, Col, ListGroup, Row, Table } from 'react-bootstrap';
import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';
import CommonContent from '../CommonContent';

const Dark = () => {
    const configContext = useContext(ConfigContext);
    const { layoutType } = configContext.state;
    const { dispatch } = configContext;

    useEffect(() => {
        dispatch({ type: actionType.LAYOUT_TYPE, layoutType: 'dark', navBackColor: 'navbar-dark', navBrandColor: 'brand-dark' });
        dispatch({ type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-dark' });
    }, [layoutType, dispatch]);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Dark Layout</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>
                                In Dark Layout - Your entire layout will be set to Dark colors. You can also change different colors using
                                live customizer.
                            </p>
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
                                                    layout: <code>vertical/horizontal</code>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" bsPrefix=" ">
                                                    layoutType: <code>dark</code>
                                                </ListGroup.Item>
                                                <ListGroup.Item as="li" bsPrefix=" ">
                                                    headerBackColor: <code>header-dark</code>
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

export default Dark;
