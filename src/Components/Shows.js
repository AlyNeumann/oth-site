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
                <Grid className="schedule">
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
                </Grid>
                <Socialmedia />
                <Email />
            </Grid>
        )
    }
}
