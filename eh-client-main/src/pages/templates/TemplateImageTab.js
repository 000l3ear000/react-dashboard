import React from 'react';
import { Row, Col, Card, Button, Tab, Tabs, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { DropzoneComponent } from 'react-dropzone-component';
import Gallery from '../../../components/Gallery/SimpleGallery';


// Temporary images
import thumb1 from '../../../assets/images/gallery-grid/img-grd-gal-1.jpg';

const TemplateImagesTab = () => {

    // Image Data Here
    // This will be a method to get images

    // Needed for file upload component
    const djsConfig = {
        addRemoveLinks: true,
        acceptedFiles: 'image/jpeg,image/png,image/gif'
        /*autoProcessQueue: false,
        uploadprogress: 100*/
    };

    // Icon File Types
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

            {/* -------------------- Image Board Section -------------------- */}
            {/* Will be a for loop for each image */}
            <Row>
                <Col>

                    {/* -------------------- Image Board Title -------------------- */}
                    <Card.Header>
                        <Card.Title as="h5">Trust Images</Card.Title>
                    </Card.Header>
                    
                    <Card.Body>
                        {/* -------------------- Image Board Tabs -------------------- */}
                        <Tabs defaultActiveKey="all" style={{ backgroundColor: "#F4F7FA" }} >

                            {/* -------------------- Default Tab -------------------- */}
                            <Tab eventKey="tab-name" title="TAB NAME" >
                                <Row>

                                    {/* -------------------- Image Card -------------------- */}
                                    {/* -------------------- Four Cards Per Row -------------------- */}
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb1, thumbnail: thumb1, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />

                                        {/* -------------------- Image Options -------------------- */}
                                        <p style={{ position: 'absolute', bottom: 0, right: 26 }}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                </Row>
                            </Tab>

                            {/* -------------------- Extra Tab -------------------- */}
                            <Tab eventKey="extra-tab" title="EXTRA TAB">
                                <Row>

                                    {/* -------------------- Image Card -------------------- */}
                                    {/* -------------------- Four Cards Per Row -------------------- */}
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb1, thumbnail: thumb1, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />

                                        {/* -------------------- Image Options -------------------- */}
                                        <p style={{ position: 'absolute', bottom: 0, right: 26 }}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                </Row>
                            </Tab> 
                        </Tabs>
                    </Card.Body>
                </Col>
            </Row>

            {/* -------------------- Image Upload Section -------------------- */}
            <Row>
                <Col>
                {/* -------------------- Image Upload Title -------------------- */}
                    <Card.Header>
                        <Card.Title as="h5">File Upload</Card.Title>
                    </Card.Header>

                    {/* -------------------- Image Upload Widget -------------------- */}
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

export default TemplateImagesTab;