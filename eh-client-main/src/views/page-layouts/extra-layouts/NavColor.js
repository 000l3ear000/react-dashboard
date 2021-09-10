import React, { useContext, useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';

const NavColor = () => {
    const configContext = useContext(ConfigContext);
    const { layout, layoutType, navIconColor, headerBackColor, navBrandColor, navFixedLayout, headerFixedLayout } = configContext.state;
    const { dispatch } = configContext;

    useEffect(() => {
        if (layout !== 'vertical') {
            dispatch({ type: actionType.CHANGE_LAYOUT, layout: 'vertical' });
        }

        dispatch({ type: actionType.LAYOUT_TYPE, layoutType: 'menu-light' });
        dispatch({ type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-lightblue' });
        dispatch({ type: actionType.NAV_BRAND_COLOR, navBrandColor: 'brand-lightblue' });

        if (!navIconColor) {
            dispatch({ type: actionType.NAV_ICON_COLOR });
        }

        if (!navFixedLayout) {
            dispatch({ type: actionType.NAV_FIXED_LAYOUT });
        }
        if (!headerFixedLayout) {
            dispatch({ type: actionType.HEADER_FIXED_LAYOUT });
        }
    }, [dispatch, layout, layoutType, navIconColor, headerBackColor, navBrandColor, navFixedLayout, headerFixedLayout]);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Nav Color Layout</Card.Title>
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
                                                    subLayout: <code>null</code>
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
                                                    <mark>
                                                        headerBackColor: <code>header-lightblue</code>
                                                    </mark>
                                                </li>
                                                <li>
                                                    navBackColor: <code>navbar-default</code>
                                                </li>
                                                <li>
                                                    <mark>
                                                        navBrandColor: <code>brand-lightblue</code>
                                                    </mark>
                                                </li>
                                                <li>
                                                    navBackImage: <code>false</code>
                                                </li>
                                                <li>
                                                    rtlLayout: <code>false</code>
                                                </li>
                                                <li>
                                                    <mark>
                                                        navFixedLayout: <code>true</code>
                                                    </mark>
                                                </li>
                                                <li>
                                                    <mark>
                                                        headerFixedLayout: <code>true</code>
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

export default NavColor;
