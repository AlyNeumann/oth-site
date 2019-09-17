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
                    {/* <h2>◈Old Time Honey</h2> */}
                    <Row className="logo2-container"> 
                    <Image src="Images/oth_LOGO2018.png" className="logo2"/>
                    </Row>
                    <Row className="pearl-container">
                        
                    {/* <Image src="Images/pearls.png" className="logo3"/>
             */}
                    </Row>
                    
                    {/* <Image src="Images/beeClear.png" className="logo"/><Image src="Images/beeClear.png" className="logo"/><Image src="Images/beeClear.png" className="logo"/>
                    <Image src="Images/beeClear.png" className="logo"/><Image src="Images/beeClear.png" className="logo"/><Image src="Images/beeClear.png" className="logo"/><Image src="Images/beeClear.png" className="logo"/> */}
                    <Row className="home-type-text">
                    <TypeWriter ><h3>New album "Love Songs for Sick People" now available!</h3></TypeWriter>
                    <TypeWriter ><h3>Nouveau album "Love Songs for Sick People" maintenant disponible!</h3></TypeWriter>
                    </Row>
                     <Row className="home-button">
                        <Button bsStyle="default"  href="https://open.spotify.com/album/0EGPdRzJ517sC1o8rMfZ6Y">Spotify</Button>
                        <Button bsStyle="default"  href="https://oldtimehoney.bandcamp.com/">BandCamp</Button>
                        
                        </Row>
                    
                </Jumbotron>
                {/* <Row>
                    <Col xs={6} sm={6}  className="person-wrapper">
                        <Image src="Images/showcase.jpg" className="home-pic" href="https://folkconference.org/"/>   
                    </Col>
                    
                </Row> */}
                <Socialmedia />
                <Email/>
            </Grid>
        )
    }
}