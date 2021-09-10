import React, { useContext, useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';

const Layout6 = () => {
    const configContext = useContext(ConfigContext);
    const { layout, navIconColor, navFixedLayout, headerFixedLayout } = configContext.state;
    const { dispatch } = configContext;

    useEffect(() => {
        if (layout !== 'vertical') {
            dispatch({ type: actionType.CHANGE_LAYOUT, layout: 'vertical' });
        }

        dispatch({ type: actionType.CHANGE_SUB_LAYOUT, subLayout: 'layout-6' });
        dispatch({ type: actionType.LAYOUT_TYPE, layoutType: 'menu-light' });
        dispatch({ type: actionType.NAV_BRAND_COLOR, navBrandColor: 'brand-lightblue' });
        dispatch({ type: actionType.LAYOUT6_BACKGROUND, layout6Background: 'linear-gradient(to right, #23b7e5 0%, #23b7e5 100%)' });

        if (!navIconColor) {
            dispatch({ type: actionType.NAV_ICON_COLOR });
        }

        if (navFixedLayout) {
            dispatch({ type: actionType.NAV_FIXED_LAYOUT });
        }
        if (headerFixedLayout) {
            dispatch({ type: actionType.HEADER_FIXED_LAYOUT });
        }
    }, [dispatch, layout, navIconColor, navFixedLayout, headerFixedLayout]);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pre Build Layout 6</Card.Title>
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
                                                        subLayout: <code>layout-6</code>
                                                    </mark>
                                                </li>
                                                <li>
                                                    collapseMenu: <code>false</code>
                                                </li>
                                                <li>
                                                    <mark>
                                                        layoutType: <code>menu-light</code>
                                                    </mark>
                                                </li>
                                                <li>
                                                    <mark>
                                                        navIconColor: <code>true</code>
                                                    </mark>
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
                                                    <mark>
                                                        navFixedLayout: <code>false</code>
                                                    </mark>
                                                </li>
                                                <li>
                                                    <mark>
                                                        headerFixedLayout: <code>false</code>
                                                    </mark>
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
                                                        layout6Background: <code>linear-gradient(to right, #23b7e5 0%, #23b7e5 100%)</code>
                                                    </mark>
                                                </li>
                                                <li>
                                                    configBlock: <code>true</code>
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

export default Layout6;
