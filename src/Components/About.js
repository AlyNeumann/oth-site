import React, { Component } from 'react';
import { Grid, Row, Col, Image, Clearfix, Panel } from 'react-bootstrap';
import './About.css';
import Email from './Email';
import TypeWriter from './TypeWriter';

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
                        <TypeWriter><h3>Tyler Parent</h3></TypeWriter>
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
                        <TypeWriter><h3>Aly Marguerite</h3></TypeWriter>
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
                        <TypeWriter><h3>Valentina Piras</h3></TypeWriter>
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
                        <TypeWriter><h3>Olive Bestvader</h3></TypeWriter>
                        <Panel id="collapsible-panel" expanded={this.state.closed}>
                            <Panel.Heading>
                                <Panel.Title>Violin & Voice</Panel.Title>
                                <Panel.Toggle componentClass="a">Biography</Panel.Toggle>
                            </Panel.Heading>
                            <Panel.Collapse>
                                <Panel.Body>
                                    Olive Bestvater abandoned 13 years of classical training to poked her nose into folk, street jazz, and experimental doom metal projects across the country.
                                     She occassionally picks up a guitar or a banjo when nobody's looking. She is from - and will surely one day return to -  the prairies.
                                      {/* www.blacktremor.bandcamp.com, www.littlecriminals.bandcamp.com, www.zaum.bandcamp.com, and www.mothbone.bandcamp.com
                                    Black Tremor / Sea Witch split, by Black Tremor / Sea Witch
                                    5 track album
                                    blacktremor.bandcamp.com */}
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