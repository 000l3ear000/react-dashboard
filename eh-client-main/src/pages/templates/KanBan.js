import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Board from 'react-trello';

import axios from '../../../utils/axios';

const TrustTaskBoard = () => {
    const [data, setData] = useState({ lanes: [] });

    const getData = async () => {
        // const response = await axios.get('/api/taskboard');
        const response = await axios.get('/api/taskboard');
        setData(response.data.taskboard);
    };

    useEffect(() => {
        getData();
    }, []);

    const onLaneAdd = () => {
        console.log('Add Task');
    };

    const onCardUpdate = () => {
        console.log('on Card Update');
    };

    const onLaneUpdate = () => {
        console.log('on Lane Update');
    };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <Board
                        data={data}
                        draggable
                        editable
                        canAddLanes
                        collapsibleLanes
                        editLaneTitle
                        className="adv-task-board"
                        addCardLink={
                            <div className="mt-1">
                                {' '}
                                <Button size="sm">Add New Card</Button>
                            </div>
                        }
                        onLaneAdd={onLaneAdd}
                        addLaneTitle="+ Add New Task"
                        onCardUpdate={onCardUpdate}
                        onLaneUpdate={onLaneUpdate}
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default TrustTaskBoard;