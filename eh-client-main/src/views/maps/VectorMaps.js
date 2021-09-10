import React, { useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { VectorMap } from 'react-jvectormap';
import ModuleNotification from '../../components/Widgets/Statistic/Notification';

const VectorMaps = () => {
    const map1 = useRef(null);
    const map2 = useRef(null);
    const map3 = useRef(null);
    const map4 = useRef(null);
    const map5 = useRef(null);
    const map6 = useRef(null);

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-jvectormap"
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Basic Map with Markers</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ height: '400px', width: '100%' }}>
                                <VectorMap
                                    map={'world_mill'}
                                    scaleColors={['#C8EEFF', '#0071A4']}
                                    normalizeFunction="polynomial"
                                    hoverOpacity={0.7}
                                    hoverColor="!1"
                                    regionStyle={{
                                        initial: {
                                            fill: '#FFF'
                                        }
                                    }}
                                    ref={map1}
                                    containerStyle={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    containerClassName="set-map"
                                    markerStyle={{
                                        initial: {
                                            r: 9,
                                            fill: '#F8E23B',
                                            'fill-opacity': 0.9,
                                            stroke: '#383f47',
                                            'stroke-width': 7,
                                            'stroke-opacity': 0.4
                                        },
                                        hover: {
                                            stroke: '#fff',
                                            'fill-opacity': 1,
                                            'stroke-width': 1.5
                                        }
                                    }}
                                    backgroundColor="#383f47"
                                    markers={[
                                        {
                                            latLng: [41.9, 12.45],
                                            name: 'Vatican City'
                                        },
                                        {
                                            latLng: [43.73, 7.41],
                                            name: 'Monaco'
                                        },
                                        {
                                            latLng: [-0.52, 166.93],
                                            name: 'Nauru'
                                        },
                                        {
                                            latLng: [-8.51, 179.21],
                                            name: 'Tuvalu'
                                        },
                                        {
                                            latLng: [43.93, 12.46],
                                            name: 'San Marino'
                                        },
                                        {
                                            latLng: [47.14, 9.52],
                                            name: 'Liechtenstein'
                                        },
                                        {
                                            latLng: [7.11, 171.06],
                                            name: 'Marshall Islands'
                                        },
                                        {
                                            latLng: [17.3, -62.73],
                                            name: 'Saint Kitts and Nevis'
                                        },
                                        {
                                            latLng: [3.2, 73.22],
                                            name: 'Maldives'
                                        },
                                        {
                                            latLng: [35.88, 14.5],
                                            name: 'Malta'
                                        },
                                        {
                                            latLng: [12.05, -61.75],
                                            name: 'Grenada'
                                        },
                                        {
                                            latLng: [13.16, -61.23],
                                            name: 'Saint Vincent and the Grenadines'
                                        },
                                        {
                                            latLng: [13.16, -59.55],
                                            name: 'Barbados'
                                        },
                                        {
                                            latLng: [17.11, -61.85],
                                            name: 'Antigua and Barbuda'
                                        },
                                        {
                                            latLng: [-4.61, 55.45],
                                            name: 'Seychelles'
                                        },
                                        {
                                            latLng: [7.35, 134.46],
                                            name: 'Palau'
                                        },
                                        {
                                            latLng: [42.5, 1.51],
                                            name: 'Andorra'
                                        },
                                        {
                                            latLng: [14.01, -60.98],
                                            name: 'Saint Lucia'
                                        },
                                        {
                                            latLng: [6.91, 158.18],
                                            name: 'Federated States of Micronesia'
                                        },
                                        {
                                            latLng: [1.3, 103.8],
                                            name: 'Singapore'
                                        },
                                        {
                                            latLng: [1.46, 173.03],
                                            name: 'Kiribati'
                                        },
                                        {
                                            latLng: [-21.13, -175.2],
                                            name: 'Tonga'
                                        },
                                        {
                                            latLng: [15.3, -61.38],
                                            name: 'Dominica'
                                        },
                                        {
                                            latLng: [-20.2, 57.5],
                                            name: 'Mauritius'
                                        },
                                        {
                                            latLng: [26.02, 50.55],
                                            name: 'Bahrain'
                                        },
                                        {
                                            latLng: [0.33, 6.73],
                                            name: 'São Tomé and Príncipe'
                                        }
                                    ]}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Brazil Map</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ height: '400px', width: '100%' }}>
                                <VectorMap
                                    map={'brazil'}
                                    scaleColors={['#C8EEFF', '#0071A4']}
                                    ref={map2}
                                    backgroundColor="#383f47"
                                    containerStyle={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    containerClassName="set-map"
                                    regionStyle={{
                                        initial: {
                                            fill: '#73b4ff'
                                        }
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Asia Map</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ height: '400px', width: '100%' }}>
                                <VectorMap
                                    map={'asia_mill'}
                                    scaleColors={['#C8EEFF', '#0071A4']}
                                    ref={map3}
                                    backgroundColor="#383f47"
                                    containerStyle={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    containerClassName="set-map"
                                    regionStyle={{
                                        initial: {
                                            fill: '#4DB6AC'
                                        }
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Canada Map</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ height: '400px', width: '100%' }}>
                                <VectorMap
                                    map={'north_america_mill'}
                                    ref={map5}
                                    backgroundColor="#383f47"
                                    containerStyle={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    containerClassName="set-map"
                                    regionStyle={{
                                        initial: {
                                            fill: '#18FFFF'
                                        }
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">USA Map</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ height: '400px', width: '100%' }}>
                                <VectorMap
                                    map={'us_aea'}
                                    ref={map6}
                                    backgroundColor="#383f47"
                                    containerStyle={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    containerClassName="set-map"
                                    regionStyle={{
                                        initial: {
                                            fill: '#CDDC39'
                                        }
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Europe Map</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ height: '400px', width: '100%' }}>
                                <VectorMap
                                    map={'europe_mill'}
                                    ref={map4}
                                    backgroundColor="#383f47"
                                    containerStyle={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    containerClassName="set-map"
                                    regionStyle={{
                                        initial: {
                                            fill: '#81c868'
                                        }
                                    }}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default VectorMaps;
