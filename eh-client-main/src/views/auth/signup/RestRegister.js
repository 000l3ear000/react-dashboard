import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Row, Col, Button, Alert } from 'react-bootstrap';

import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import useScriptRef from '../../../hooks/useScriptRef';
import { API_SERVER } from './../../../config/constant';

const RestRegister = ({ className, ...rest }) => {
    let history = useHistory();
    const scriptedRef = useScriptRef();

    return (
        <React.Fragment>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    password2: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).min(8).required('Password is required'),
                    password2: Yup.string().oneOf([Yup.ref('password'), null], "Passwords don't match").required('Confirm your password'),
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        axios
                            .post(API_SERVER + 'api/account/register/', {
                                password: values.password,
                                email: values.email,
                            })
                            .then(function (response) {
                                console.log("The response", response)
                                if (response.status===201) {
                                    setStatus({ success: true });
                                    history.push('/auth/signin');
                                } else {
                                    setStatus({ success: false });
                                    setErrors({ submit: response.data });
                                    setSubmitting(false);
                                }
                            })
                            .catch(function (error) {
                                console.log("The error", error)
                                setStatus({ success: false });
                                setErrors({ submit: error.response.data });
                                setSubmitting(false);
                            });
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} className={className} {...rest}>

                        <div className="form-group mb-3">
                            <input
                                className="form-control"
                                error={touched.email && errors.email}
                                label="Email Address"
                                placeholder="Email Address"
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="email"
                                value={values.email}
                            />
                            {touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>}
                        </div>
                        <div className="form-group mb-4">
                            <input
                                className="form-control"
                                error={touched.password && errors.password}
                                label="Password"
                                placeholder="Password"
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="password"
                                value={values.password}
                            />
                            {touched.password && errors.password && <small className="text-danger form-text">{errors.password}</small>}
                        </div>
                        <div className="form-group mb-4">
                            <input
                                className="form-control"
                                error={touched.password2 && errors.password2}
                                label="Password"
                                placeholder="Confirm Password"
                                name="password2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="password"
                                value={values.password2}
                            />
                            {touched.password2 && errors.password2 && <small className="text-danger form-text">{errors.password2}</small>}
                        </div>

                        {errors.submit && (
                            <Col sm={12}>
                              
                                    <Alert variant="danger">{errors.submit.email[0]}</Alert>
                                
                            </Col>
                        )}

                        <Row>
                            <Col mt={2}>
                                <Button
                                    className="btn-block"
                                    color="primary"
                                    disabled={isSubmitting}
                                    size="large"
                                    type="submit"
                                    variant="primary"
                                >
                                    Register
                                </Button>
                            </Col>
                        </Row>
                    </form>
                )}
            </Formik>
            <hr />
        </React.Fragment>
    );
};

export default RestRegister;
