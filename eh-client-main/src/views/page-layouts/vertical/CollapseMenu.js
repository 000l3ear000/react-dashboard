import React, { useContext, useEffect } from 'react';
import { Card, Col, Row, Table, ListGroup } from 'react-bootstrap';
import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';
import CommonContent from '../CommonContent';
import useWindowSize from '../../../hooks/useWindowSize';

const CollapseMenu = () => {
    const windowSize = useWindowSize();

    const configContext = useContext(ConfigContext);
    const { layout, collapseMenu } = configContext.state;
    const { dispatch } = configContext;

    useEffect(() => {
        if (layout !== 'vertical') {
            dispatch({ type: actionType.CHANGE_LAYOUT, layout: 'vertical' });
        }
        if (!collapseMenu && windowSize.width > 991) {
            dispatch({ type: actionType.COLLAPSE_MENU });
        }
    }, [layout, collapseMenu, dispatch, windowSize]);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Collapse Menu Layout</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>In Collapse Sidebar Layout - Sidebar is getting minimal and all menu item is collapsed by default.</p>
                            <div className="alert alert-info mb-0" role="alert">
                                <p className="mb-0">
                                    It is best suited for those applications where you want more focus on page content & having less sidebar
                                    menu items.
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
                                                    collapseMenu: <code>true</code>
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

export default CollapseMenu;
