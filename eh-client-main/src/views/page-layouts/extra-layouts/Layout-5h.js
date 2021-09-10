import React, { useContext, useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import useWindowSize from '../../../hooks/useWindowSize';
import { ConfigContext } from '../../../contexts/ConfigContext';
import * as actionType from '../../../store/actions';

const Layout5h = () => {
    const windowSize = useWindowSize();
    const configContext = useContext(ConfigContext);
    const { layout, collapseMenu, layoutType, navIconColor } = configContext.state;
    const { dispatch } = configContext;

    useEffect(() => {
        if (layout !== 'horizontal' && windowSize.width > 991) {
            dispatch({ type: actionType.CHANGE_LAYOUT, layout: 'horizontal' });
        }

        dispatch({ type: actionType.LAYOUT_TYPE, layoutType: 'menu-light' });
        dispatch({ type: actionType.HEADER_BACK_COLOR, headerBackColor: 'header-blue' });
        dispatch({ type: actionType.NAV_ACTIVE_LIST_COLOR, navActiveListColor: 'active-lightblue' });

        if (!navIconColor) {
            dispatch({ type: actionType.NAV_ICON_COLOR });
        }

        if (collapseMenu && windowSize.width > 991) {
            dispatch({ type: actionType.COLLAPSE_MENU });
        }
    }, [dispatch, windowSize, layout, collapseMenu, layoutType, navIconColor]);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pre Build Layout 5h</Card.Title>
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
                                                        layout: <code>horizontal</code>
                                                    </mark>
                                                </li>
                                                <li>
                                                    subLayout: <code>null</code>
                                                </li>
                                                <li>
                                                    <mark>
                                                        collapseMenu: <code>false</code>
                                                    </mark>
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
                                                        headerBackColor: <code>header-blue</code>
                                                    </mark>
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

export default Layout5h;
