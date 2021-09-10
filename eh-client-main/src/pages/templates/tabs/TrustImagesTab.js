import React from 'react';
import {Row, Col, Card, Button, Tab, Tabs, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { DropzoneComponent } from 'react-dropzone-component';
import Gallery from '../../../../components/Gallery/SimpleGallery';


// Temporary images
import thumb1 from '../../../../assets/images/gallery-grid/img-grd-gal-1.jpg';
import thumb2 from '../../../../assets/images/gallery-grid/img-grd-gal-2.jpg';
import thumb3 from '../../../../assets/images/gallery-grid/img-grd-gal-3.jpg';
import thumb4 from '../../../../assets/images/gallery-grid/img-grd-gal-4.jpg';
import thumb5 from '../../../../assets/images/gallery-grid/img-grd-gal-5.jpg';
import thumb6 from '../../../../assets/images/gallery-grid/img-grd-gal-6.jpg';

const TrustImagesTab = () => {

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

            {/* Images go here */}
            {/* Will be a for loop for each image */}
            <Row>
                <Col>
                    <Card.Header>
                        <Card.Title as="h5">Trust Images</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Tabs defaultActiveKey="all" style={{backgroundColor: "#F4F7FA"}} >
                            {/* This shows all photos related to this property */}
                            <Tab eventKey="all" title="ALL" >
                                <Row>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb1, thumbnail: thumb1, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb2, thumbnail: thumb2, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb3, thumbnail: thumb3, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb4, thumbnail: thumb4, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb5, thumbnail: thumb5, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb6, thumbnail: thumb6, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb1, thumbnail: thumb1, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb2, thumbnail: thumb2, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb3, thumbnail: thumb3, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb4, thumbnail: thumb4, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb5, thumbnail: thumb5, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb6, thumbnail: thumb6, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                </Row>
                            </Tab>
                            {/* This shows all photos with the marketing boolean active */}
                            <Tab eventKey="marketing" title="MARKETING">
                                <Row>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb1, thumbnail: thumb1, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', top: 11, left: 22}}>
                                            {/*Images Should be Movable.*/}
                                            <OverlayTrigger overlay={<Tooltip>Drag Me!</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-arrows-alt fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-c-blue fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb2, thumbnail: thumb2, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', top: 11, left: 22}}>
                                            {/*Images Should be Movable.*/}
                                            <OverlayTrigger overlay={<Tooltip>Drag Me!</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-arrows-alt fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-c-blue fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb3, thumbnail: thumb3, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', top: 11, left: 22}}>
                                            {/*Images Should be Movable.*/}
                                            <OverlayTrigger overlay={<Tooltip>Drag Me!</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-arrows-alt fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-c-blue fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb4, thumbnail: thumb4, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', top: 11, left: 22}}>
                                            {/*Images Should be Movable.*/}
                                            <OverlayTrigger overlay={<Tooltip>Drag Me!</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-arrows-alt fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-c-blue fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                </Row>
                            </Tab>
                            {/* This shows all photos with the damage Boolean Active */}
                            <Tab eventKey="damage" title="DAMAGE">
                                <Row>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb1, thumbnail: thumb1, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-c-blue fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb2, thumbnail: thumb2, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-c-blue fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb3, thumbnail: thumb3, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-c-blue fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                    <Col xl={3} md={4} className="mb-4">
                                        <Gallery
                                            images={[{ src: thumb4, thumbnail: thumb4, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                            </OverlayTrigger>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                <i className="fa fa-fw text-white fa-laptop fa-2x" />
                                            </OverlayTrigger>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className="fa fa-fw text-c-blue fa-house-damage fa-2x" />
                                            </OverlayTrigger>
                                        </p>
                                    </Col>
                                </Row>
                            </Tab>
                        </Tabs>

                    </Card.Body>
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

export default TrustImagesTab;