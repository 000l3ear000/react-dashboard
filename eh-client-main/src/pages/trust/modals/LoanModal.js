import React, { useState } from 'react';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';

const LoanModal = () => {
    const [isLarge, setIsLarge] = useState(false);

    return (
        <React.Fragment>
            <OverlayTrigger overlay={<Tooltip>Create a loan by pressing this button</Tooltip>} style={{ float: "right" }}>
                <Button className="shadow-1 theme-bg border border-0" size="sm" onClick={() => setIsLarge(true)}>
                    Add Loan
                </Button>
            </OverlayTrigger>
            <Modal size="lg" show={isLarge} onHide={() => setIsLarge(false)}>
                <Modal.Header closeButton>
                    {/* <Modal.Title as="h5">Add Loan</Modal.Title> */}
                    <Modal.Title as="h5">This Will Take You To The Loan Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ...
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default LoanModal;