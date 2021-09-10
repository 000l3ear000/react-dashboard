import React, { useContext, useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';

const Layout42 = () => {
    const configContext = useContext(ConfigContext);
    const { layout, subLayout, configBlock } = configContext.state;
    const { dispatch } = configContext;

    useEffect(() => {
        if (layout !== 'vertical') {
            dispatch({ type: actionType.CHANGE_LAYOUT, layout: 'vertical' });
        }

        dispatch({ type: actionType.CHANGE_SUB_LAYOUT, subLayout: 'layout-4-2' });

        if (configBlock) {
            dispatch({ type: actionType.CONFIG_BLOCK });
        }
    }, [dispatch, layout, subLayout, configBlock]);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pre Build Layout 4-2</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Open <code>constant.js</code> file from directory [ ../src/config/constant.js ] and edit{' '}
                                <mark>highlighted</mark> options in this file.
                            </Card.Text>
                            <Table bordered striped responsive>
                                <thead className="header-table">
                                    <tr>
                                        <th>Configuration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <ul>
                                                <li>
                                                    <mark>
                                                        layout: <code>vertical</code>
                                                    </mark>
                                                </li>
                                                <li>
                                                    <mark>
                                                        subLayout: <code>layout-4-2</code>
                                                    </mark>
                                                </li>
                                                <li>
                                                    collapseMenu: <code>false</code>
                                                </li>
                                                <li>
                                                    layoutType: <code>menu-dark</code>
                                                </li>
                                                <li>
                                                    navIconColor: <code>false</code>
                                                </li>
                                                <li>
                                                    headerBackColor: <code>header-default</code>
                                                </li>
                                                <li>
                                                    navBackColor: <code>navbar-default</code>
                                                </li>
                                                <li>
                                                    navBrandColor: <code>brand-default</code>
                                                </li>
                                                <li>
                                                    navBackImage: <code>false</code>
                                                </li>
                                                <li>
                                                    rtlLayout: <code>false</code>
                                                </li>
                                                <li>
                                                    navFixedLayout: <code>true</code>
                                                </li>
                                                <li>
                                                    headerFixedLayout: <code>false</code>
                                                </li>
                                                <li>
                                                    boxLayout: <code>false</code>
                                                </li>
                                                <li>
                                                    navDropdownIcon: <code>style1</code>
                                                </li>
                                                <li>
                                                    navListIcon: <code>style1</code>
                                                </li>
                                                <li>
                                                    navActiveListColor: <code>active-default</code>
                                                </li>
                                                <li>
                                                    navListTitleColor: <code>title-default</code>
                                                </li>
                                                <li>
                                                    navListTitleHide: <code>false</code>
                                                </li>
                                                <li>
                                                    <mark>
                                                        configBlock: <code>false</code>
                                                    </mark>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Layout42;
