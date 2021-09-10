import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Form, OverlayTrigger, Row, Tab, Badge, Tabs, Tooltip } from 'react-bootstrap';


import {GET_CHATTER} from '../../store/actions';

import {store} from '../../store/index';
import { API_SERVER } from '../../config/constant';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Chatter = props => {

    const [chatterState, setChatterState] = useState([])
    const [postState, setPostState] = useState({})

    const dispatch = useDispatch();
    


    const tokenConfig = () => {
        const token = store.getState().account.token
        
    
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        return config
    }

    const getList = (id) =>  {
    
        axios.get(`${API_SERVER}api/trust/chatter/?trust_id=${id}`, tokenConfig())
            .then(res => {
                setChatterState(res.data)
                console.log("Chatter GET", res)
                dispatch({
                    type: GET_CHATTER,
                    payload: res.data
                });
            }).catch(err => {
                console.log(err)
            }
        )
    }

    useEffect(() => {
        getList(props.id)  
    }, [props.id])

    const postChatter = (body) =>  {
    
        axios.post(`${API_SERVER}api/trust/chatter/`, body, tokenConfig())
            .then(res => {
                setChatterState([
                    ...chatterState,
                    res.data
                ])
                console.log("Chatter POST", res)
            }).catch(err => {
                console.log(err)
            }
        )
    }

    const handleEdit = (event) => {
        const { name, value } = event.target
        setPostState({
            ...postState,
            [name]: value,
            "trust_id": props.id,
        })
    }

    const onSubmit = () => {
        postChatter(postState)
    }


    console.log("Chatter", postState)

    return(
        <Col md={12} lg={3} xl={3}>
        <Card>
            <Card.Body>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3" placeholder="Write your message"
                        onChange={handleEdit}
                        name="message_text"    
                    />
                </Form.Group>
                <div className="float-right mb-2">
                    <OverlayTrigger overlay={<Tooltip>Attach a File</Tooltip>} style={{ float: "right" }}>
                            <i  className="fa fa-paperclip f-20 mr-2" 
                            />
                        </OverlayTrigger>
                    <OverlayTrigger overlay={<Tooltip>Send</Tooltip>} style={{ float: "right" }}>
                            <i className="fa fa-paper-plane text-c-blue f-20 mr-2" 
                                onClick={onSubmit}
                            />
                        </OverlayTrigger>
                </div>
            <br/>
            {chatterState &&
                <ul className="task-list">
                 {chatterState.map(data => (
                    <li key={data.id}>
                        <i className="task-icon bg-c-green" />
                        <h6>
                            <p className="text-muted">Date Here<Badge className="float-right text-white f-11 theme-bg2">Username</Badge></p>
                        </h6>
                        <p>{data.message_text}</p>
                    </li>
                ))}
                </ul>
                }
            </Card.Body>
        </Card>
    </Col>
    )
}

export default Chatter;