import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import Email from './Email';
import Socialmedia from './Socialmedia';
import './Shows.css'

export default class Shows extends Component {
    render() {
        return (
            <Grid>
                <Grid className="schedule" data-aos="fade-left">
                    <Row className="show-row">
                        <Col xs={12} sm={6} md={3}>Old Time Honey's Album Launch</Col>
                        <Col xs={12} sm={6} md={3}>Thursday October 11th, 2018</Col>
                        <Col xs={12} sm={6} md={3}>Coop Katacombs, 1635 St Laurent Blvd, Montreal</Col>
                        <Col xs={12} sm={6} md={3}>
                            <Link to="https://www.facebook.com/events/191449174843350/">
                                <Button bsStyle="default btn-xs">Event Info</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="show-row">
                        <Col xs={12} sm={6} md={3}>Old Time Honey, Weep and Bloom, & Alex Charbonneau</Col>
                        <Col xs={12} sm={6} md={3}>Tuesday September 11th, 2018</Col>
                        <Col xs={12} sm={6} md={3}>Traxide, Fattal, Montreal</Col>
                        <Col xs={12} sm={6} md={3}><Link to="https://www.facebook.com/events/949198781919566/">
                            <Button bsStyle="default btn-xs">Event Info</Button>
                        </Link></Col>
                    </Row>
                    <Row className="show-row">
                        <Col xs={12} sm={6} md={3}>Kickdrum Presents Old Time Honey, Eva Foot, Róża</Col>
                        <Col xs={12} sm={6} md={3}>Wednesday September 5th, 2018</Col>
                        <Col xs={12} sm={6} md={3}>Backyard Sessions, Cafe Bland de Blanc 248 rue Villeneuve Ouest
                    Montreal</Col>
                        <Col xs={12} sm={6} md={3}>
                            <Link to="https://www.facebook.com/events/234095787326463/">
                                <Button bsStyle="default btn-xs">Event Info</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="show-row">
                        <Col xs={12} sm={6} md={3}>Members of Old Time Honey host Chick Pickin' Monday!</Col>
                        <Col xs={12} sm={6} md={3}>Every Monday night</Col>
                        <Col xs={12} sm={6} md={3}>Grumpy's Bar, 1242 Bishop Street, Montreal</Col>
                        <Col xs={12} sm={6} md={3}>
                            <Link to="https://www.facebook.com/ChickPickinMondays/?ref=bookmarks">
                                <Button bsStyle="default btn-xs">Event Info</Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="show-row">
                        <Col xs={12} sm={6} md={3}>Canadian tour with Ghostly Hounds "Land of Ghosts and Honey"</Col>
                        <Col xs={12} sm={6} md={3}>July 18th to August 18th, 2018</Col>
                        <Col xs={12} sm={6} md={3}>All over Canada</Col>
                        <Col xs={12} sm={6} md={3}>
                            <Link to="https://www.facebook.com/photo.php?fbid=10155355282311761&set=basw.Abpj4ken5IwrQDxhmwk1t_bOUI8dWA26fb_umVOxn5eud87urVwEEPEKs9a-3wj_NRF5bbFoVJzb2WUlZEKQ2r0ecWKwV6eY0I3YiFWAwVBQrG1XF67_RZSuCMTnRWhI9bRb-ilNPK_rzqMEc7VzOthpZYYXhYDBxwKgo9hpF4_DIA.10155355282311761.792722370751024.396229124059820.925919630834047.1069875946370368.2129590253975691&type=1&opaqueCursor=AbpIkN0_z6C7R35EZ2kWURPtEmWEtMtVv_F_pow5iDXdFOqwS4Y6TWJ0rAp7UC8lJ7Zr3uoANrHmW4v1ZPAXs19eKY1NtLSegLQEaLqb-qvEoLj4UtKg45tX4S8499C1KVrK3UU9yPMELZYH9RDuSY2FC6ceHHEfre51bnEm6YhqNTekmbEpJ1v_1-48mg5IYXYjbVMzCr-GlXJ_UoVQ34JcMCsvGk5qDyAPyfZHIylgBx-XxVRTDC8Zo7HICwEB1g6vXjk3rgRJohXjEbDEvSW9kGrGgAw_QM_JyPi8NuAMr2L3KoHkoC-phznokXjfsJWfjUKiHNjt3UCwFlnkUbynHSMboYcQjIjlOAEODrHyVlwnb-ypse-maOrReGwzdncJkD9DfYu6NH-nxV7rR4z8q2ImV9xwfl4KbfNdXFWLs2J4WzS8SNIpNwVkD6a7hAVkxdlS_pDdtEynkNtv9gIXzXrUgnQSc5JiLHblAlGUD4smjH169zsdY788uKhU99TQHtr5G98K57XsBqzOo6c3r5J8pOh792pBfTA1FC-W77Fk4686tZRi08P04JbRItuf0Bavr1UFiih3nJ81Un-ky9tKlTxzSP2FxQJxu-uOUC6V9c0vsokCyYwbRpON3DL-nhqdtz3_1b4u5rTwX5g8W26BEKd1oXqR6bVefns7HOy67njnzuf1rnPyGvFWi86yGdGCU9cs-gL-NkoJc7Y-gzWXy_2TZ20R8uW24AQPTy4gTOewLMrGG1q2X8hB-lmTSKPodKagIc_rTalopjIRjuKPUqnc6UX4PR0KF05bC9fviUTKP01UFSGh_60JN2sbofgRA25Q4iG4Fp75PwHCYk-RM81CRRC3NxtC90RFFw&theater">
                                <Button bsStyle="default btn-xs">Event Info</Button>
                            </Link>
                        </Col>
                    </Row>
                </Grid>
                <Socialmedia />
                <Email />
            </Grid>
        )
    }
}
