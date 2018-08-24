import React, { Component } from 'react';
import { Grid, Row, Col, Image, Clearfix } from 'react-bootstrap';
import './About.css';
import Email from './Email';

export default class About extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={6} md={3} className="about-person-wrapper">
                        <Image src="Images/tyler.jpg" circle className="about-profile-pic" />
                        <h3>Tyler Parent</h3>
                        <p>Upright bass & Voice</p>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="about-person-wrapper">
                        <Image src="Images/aly3.jpg" circle className="about-profile-pic" />
                        <h3>Aly Marguerite</h3>
                        <p>Piano, Banjo & Voice</p>
                    </Col>
                    <Clearfix visibleSmBlock>
                    </Clearfix>
                    <Col xs={12} sm={6} md={3} className="about-person-wrapper">
                        <Image src="Images/val.jpeg" circle className="about-profile-pic" />
                        <h3>Valentina Piras</h3>
                        <p>Washboard & Voice</p>
                    </Col>
                    {/* <Clearfix visible-md-block></Clearfix> */}
                    <Col xs={12} sm={6} md={3} className="about-person-wrapper">
                        <Image src="Images/olive.jpg" circle className="about-profile-pic" />
                        <h3>Olive Bestvader</h3>
                        <p>Violin & Voice</p>
                    </Col>
                </Row>
                <Email/>
            </Grid>
        )
    }
}