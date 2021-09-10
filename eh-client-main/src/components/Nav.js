import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

const style = {
    container: {
        display: 'flex',
    },
    navContainer: {
    },
    content: {
        width: 'calc(100% - 264px)',
    }
}

const CustomNavigation = (props) => {
    return (
        <>
            <Row className="d-lg-none">
                <Col sm={12}>
                    <header  className="navbar pcoded-header navbar-expand-lg navbar-light">
                        <div className="m-header">
                            <a className="mobile-menu" id="mobile-collapse1" href="#!"><span></span></a>
                            <a href="/" className="b-brand">
                                <div className="b-bg">
                                    <i className="feather icon-trending-up"></i>
                                </div>
                                <span className="b-title">Equity & Help Inc<h6 className="text-light font-weight-light"><small></small> </h6></span>
                            </a>
                        </div>
                        <a className="mobile-menu" id="mobile-header" href="#!">
                            <i className="feather icon-more-horizontal"></i>
                        </a>

                    </header>
                </Col>

            </Row>

            <Row style={style.container}>
                <Col style={style.navContainer} >
                    <nav  className="pcoded-navbar">
                        <div className="navbar-wrapper">
                            <div className="navbar-brand header-logo">
                                <a target="_blank" href="#!" className="b-brand">
                                    <div className="b-bg">
                                        <i className="feather icon-trending-up"></i>
                                    </div>
                                    <span className="b-title">Equity & Help Inc <h6 className="text-light font-weight-light"><small></small></h6></span>

                                </a>
                                <a className="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
                            </div>
                            <div className="navbar-content scroll-div">

                                <ul className="pcoded-inner-navbar">
                                    <li className="nav-item pcoded-menu-caption">
                                        <label>Navigation</label>
                                    </li>
                                    <li class="nav-item ">
                                        <NavLink exact to="/" className="nav-link">
                                            <span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span>
                                        </NavLink>
                                    </li>
                                    <li class="nav-item ">
                                        <NavLink to="/trust/list" className="nav-link">
                                            <span className="pcoded-micon"><i className="feather icon-clipboard"></i></span><span className="pcoded-mtext">Trust List</span>
                                        </NavLink>
                                    </li>
                                    <li class="nav-item ">
                                        <NavLink to="/trust/form" className="nav-link">
                                            <span className="pcoded-micon"><i className="feather icon-edit"></i></span><span className="pcoded-mtext">Trust Form</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink to="/trust/kanban" className="nav-link">
                                            <span className="pcoded-micon"><i className="feather icon-layers"></i></span><span
                                            className="pcoded-mtext">Trust Kanban</span>
                                        </NavLink>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </Col>
                <Col style={style.content} lg="auto" sm={12} xs={12}>

                    {props.children}

                </Col>
            </Row>
        </>


    );
};

export default CustomNavigation;