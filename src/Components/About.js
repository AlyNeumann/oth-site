import React, { Component } from 'react';
import { Grid, Row, Col, Image, Clearfix, Panel } from 'react-bootstrap';
import './About.css';
import Email from './Email';

export default class About extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: false
        };
    }
    render() {
        return (
            <Grid>
                <Row className="show-grid text-center">Band bio blah blah blah</Row>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={6} md={3} className="about-person-wrapper">
                        <Image src="Images/tyler.jpg" circle className="about-profile-pic" />
                        <h3>Tyler Parent</h3>
                        <Panel id="collapsible-panel" expanded={this.state.closed}>
                            <Panel.Heading>
                                <Panel.Title>Upright bass & Voice</Panel.Title>
                                <Panel.Toggle componentClass="a">Biography</Panel.Toggle>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea proident.
                                 </Panel.Body>
                            </Panel.Collapse>
                        </Panel>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="about-person-wrapper">
                        <Image src="Images/aly3.jpg" circle className="about-profile-pic" />
                        <h3>Aly Marguerite</h3>
                        <Panel id="collapsible-panel" expanded={this.state.closed}>
                            <Panel.Heading>
                                <Panel.Title>Piano, Banjo & Voice</Panel.Title>
                                <Panel.Toggle componentClass="a">Biography</Panel.Toggle>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea proident.
                                 </Panel.Body>
                            </Panel.Collapse>
                        </Panel>
                    </Col>
                    <Clearfix visibleSmBlock>
                    </Clearfix>
                    <Col xs={12} sm={6} md={3} className="about-person-wrapper">
                        <Image src="Images/val.jpeg" circle className="about-profile-pic" />
                        <h3>Valentina Piras</h3>
                        <Panel id="collapsible-panel" expanded={this.state.closed}>
                            <Panel.Heading>
                                <Panel.Title>Washboard & Voice</Panel.Title>
                                <Panel.Toggle componentClass="a">Biography</Panel.Toggle>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea proident.
                                 </Panel.Body>
                            </Panel.Collapse>
                        </Panel>
                    </Col>
                    {/* <Clearfix visible-md-block></Clearfix> */}
                    <Col xs={12} sm={6} md={3} className="about-person-wrapper">
                        <Image src="Images/olive.jpg" circle className="about-profile-pic" />
                        <h3>Olive Bestvader</h3>
                        <Panel id="collapsible-panel" expanded={this.state.closed}>
                            <Panel.Heading>
                                <Panel.Title>Violin & Voice</Panel.Title>
                                <Panel.Toggle componentClass="a">Biography</Panel.Toggle>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea proident.
                                 </Panel.Body>
                            </Panel.Collapse>
                        </Panel>
                    </Col>
                </Row>
                <Email />
            </Grid>
        )
    }
}