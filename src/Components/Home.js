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
                    <h2>◈Old Time Honey</h2>
                    <Image src="Images/beeClear.png" className="logo"/><Image src="Images/beeClear.png" className="logo"/><Image src="Images/beeClear.png" className="logo"/>
                    
                    <TypeWriter ><h3>New album "Love Songs for Sick People" now available!</h3></TypeWriter>
                    <TypeWriter ><h3>Nouveau album "Love Songs for Sick People" maintenant disponible!</h3></TypeWriter>
                    
                        <Button bsStyle="default" href="https://open.spotify.com/album/0EGPdRzJ517sC1o8rMfZ6Y">Listen on Spotify</Button>
                        <Button bsStyle="default" href="https://oldtimehoney.bandcamp.com/">Purchase on BandCamp</Button>
                    
                </Jumbotron>
                {/* <Row>
                    <Col xs={6} sm={6}  className="person-wrapper">
                        <Image src="Images/home.jpg" className="home-pic" href="https://oldtimehoney.bandcamp.com/"/>   
                    </Col>
                    
                </Row> */}
                <Socialmedia />
                <Email/>
            </Grid>
        )
    }
}