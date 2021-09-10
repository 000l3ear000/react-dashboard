import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { DropzoneComponent } from 'react-dropzone-component';

const TrustFileTab = () => {

    // Needed for file upload component
    const djsConfig = {
        addRemoveLinks: true,
        acceptedFiles: 'image/jpeg,image/png,image/gif'
        /*autoProcessQueue: false,
        uploadprogress: 100*/
    };

    const config = {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true,
        postUrl: '/'
    };

    const eventHandlers = (file) => {
        //init: dz => this.dropzone = dz,
        //console.log(file);
    };

    return (
        <React.Fragment>

            {/* Document card */}
            <Row>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            {/* This will be the Name of the Document Type */}
                            <Card.Title as="h5">Placeholder for Document Type  </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {/* This needs to be the name of the document that opens a modal? to view/print the document */}
                            document_name.pdf <i className="feather icon-eye text-c-blue " />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* File Upload */}
            <Row>
                <Col>
                    <Card.Header>
                        <Card.Title as="h5">File Upload</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                        <Row className="text-center m-t-10">
                            <Col>
                                <Button>Upload Files</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Col>
            </Row>
        </React.Fragment>


    );
};

export default TrustFileTab;
