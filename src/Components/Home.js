import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Old Time Honey</h2>
                    <p>New CD called "Love Songs for Sick People" coming out soon!</p>
                    <Link to="/about">
                    <Button bsStyle="primary">Pre-Order the New Album</Button>
                </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper">
                <Image src="Images/albumlaunch.jpg" className="home-pic"/>
                </Col>
                </Row>
            </Grid>
        )
    }
}