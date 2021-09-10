import React, {useState, useEffect} from 'react';
import {Row, Col, Card, Button, Tab, Tabs, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { DropzoneComponent } from 'react-dropzone-component';
import Gallery from '../../../components/Gallery/SimpleGallery';

import NoImages from '../../../assets/images/No-Image.png';

import { API_SERVER } from '../../../config/constant';
import axios from 'axios';

const TrustImagesTab = props => {

    const [imageSate, setImageState] = useState([]);
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
        postUrl: `${API_SERVER}api/trust/images/`
    };

    const eventHandlers = (file) => {
        console.log(file)
    };

    const getImages = id => {
        axios.get(`${API_SERVER}api/trust/images/?trust_id=${id}`)
        .then(res => {
            setImageState(res.data)
            
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect((id) => {
        getImages(props.id)
            
    }, []);

    let marketingSate = []
    let damageSate = []


    if(imageSate.length > 0){
        imageSate.map(data => {
            if(data.marketing_photo){
                marketingSate.push(data)
            }else if(data.damage_photo){
                damageSate.push(data)
            }
        }    
        )
    }
    

    const tokenConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    

    const handleUpdate = (body, id) => {
        console.log("Update", JSON.stringify(body))
        
        axios.put(`${API_SERVER}api/trust/images/${id}/`, JSON.stringify(body), tokenConfig)
            .then(res => {
                getImages(props.id)
                console.log("Response", res.data)
            }).catch(err => {
                console.log(err)
            }
            )

    }

    const handlePost = (body, id) => {
        
    }

  
    console.log("Marketing", marketingSate)

    return (
        <React.Fragment>
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
                                    {imageSate.length > 0 ? imageSate.map((data, index) => (
                                        <Col xl={3} md={4} className="mb-4" key={index}>
                                        <Gallery
                                            images={[{ src: data.photo, thumbnail: data.photo, caption: '', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        <p style={{position: 'absolute', bottom: 0, right: 26}}>
                                            {/*This launches the crop function in a modal so the user can crop the photo, when marking crop as done the image will be replaced with the cropped version.*/}
                                            <button className="btn btn-icon">
                                                <OverlayTrigger overlay={<Tooltip>Crop this image</Tooltip>}>
                                                    <i className="fa fa-fw text-white fa-crop-alt fa-2x" />
                                                </OverlayTrigger>
                                            </button>
                                            {/*this marks a boolean stored in relation to the photo that this is a marketing photo*/}
                                            <button className="btn btn-icon" onClick={() => handleUpdate({"marketing_photo": !data.marketing_photo}, data.id)}>
                                                <OverlayTrigger overlay={<Tooltip>Mark as marketing photo</Tooltip>}>
                                                    <i className={data.marketing_photo ? "fa fa-fw text-c-blue fa-laptop fa-2x" : "fa fa-fw text-white fa-laptop fa-2x"}/>
                                                </OverlayTrigger>
                                            </button>
                                            {/*This marks a boolean in relation to the photo called "Shows Damage"*/}
                                            <button className="btn btn-icon" onClick={() => handleUpdate({"damage_photo": !data.damage_photo}, data.id)}>
                                                <OverlayTrigger overlay={<Tooltip>Mark as showing damage</Tooltip>}>
                                                <i className={data.damage_photo ? "fa fa-fw text-c-blue fa-house-damage fa-2x" : "fa fa-fw text-white fa-house-damage fa-2x"}/>
                                                </OverlayTrigger>
                                            </button>
                                        </p>
                                    </Col>
                                    ))

                                    :
                                    <img src={NoImages} alt="No image found" width="200" height="300" />
                                    }
                                    
                                </Row>
                            </Tab>
                            {/* This shows all photos with the marketing boolean active */}
                            <Tab eventKey="marketing" title="MARKETING">
                                <Row>
                                {marketingSate.length > 0 ? marketingSate.map((data, index) => (
                                    <Col xl={3} md={4} className="mb-4" key={index}>
                                        <Gallery
                                            images={[{ src: data.photo, thumbnail: data.photo, caption: '', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                    </Col>
                                    ))
                                    :
                                    <img src={NoImages} alt="No image found" width="200" height="300" />
                                }
                                </Row>
                            </Tab>
                            {/* This shows all photos with the damage Boolean Active */}
                            <Tab eventKey="damage" title="DAMAGE">
                                <Row>
                                {damageSate.length > 0 ? damageSate.map((data, index) => (
                                    <Col xl={3} md={4} className="mb-4" key={index}>
                                        <Gallery
                                            images={[{ src: data.photo, thumbnail: data.photo, caption: '', useForDemo: true }]}
                                            backdropClosesModal
                                            singleItem
                                        />
                                        
                                    </Col>
                                    ))
                                    :
                                    <img src={NoImages} alt="No image found" width="200" height="300" />
                                }
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