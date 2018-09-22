import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import Socialmedia from './Socialmedia';
import Email from './Email';
import TypeWriter from './TypeWriter';

export default class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Grid className="home-page">
                <Jumbotron>
                    <h2>Old Time Honey</h2><Image src="Images/beeClear.png" className="logo"/><Image src="Images/beeClear.png" className="logo"/><Image src="Images/beeClear.png" className="logo"/>
                    <TypeWriter ><h3>New album "Love Songs for Sick People" coming October 12th!</h3></TypeWriter>
                    
                        <Button bsStyle="default" href="https://distrokid.com/hyperfollow/oldtimehoney/eGRR">Pre-Save on Spotify! </Button>
                    
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="Images/albumlaunch.jpg" className="home-pic" />
                    </Col>
                </Row>
                <Socialmedia />
                <Email/>
            </Grid>
        )
    }
}