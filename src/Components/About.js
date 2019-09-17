import React, { Component } from 'react';
import { Grid, Row, Col, Image, Clearfix, Panel } from 'react-bootstrap';
import './About.css';
import Email from './Email';
import TypeWriter from './TypeWriter';
import Socialmedia from './Socialmedia';

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
                <Row className="show-grid text-center"></Row>
                <Row className="show-grid text-center">
                    <Col className="animation-bee">
                        <Image src="Images/beefront.png" className="logo"/><Image src="Images/beefront.png" className="logo"/><Image src="Images/beefront.png" className="logo"/><Image src="Images/beefront.png" className="logo"/><Image src="Images/beefront.png" className="logo"/><Image src="Images/beefront.png" className="logo"/><Image src="Images/beefront.png" className="logo"/>
                    </Col>
                    <Col data-aos="fade-left" className="about-quotes">
                        <h4>
                            “Old Time Honey is proof that not only can music take a listener to another place, it can even transport them to a different time” - Brian, Bloody Underrated
                        </h4>
                        ◈◈◈
                        <h4>
                            “Old Time Honey interprétait un air enjoué, bien que légèrement rugueux, un air qui n’aurait pas déparé dans le Berlin de Bretch et Dietrich” - Daniel Coté, Ma Presse
                        </h4>
                    </Col>
                    <Col data-aos="fade-up" data-aos-duration="2000">
                    <Image src="Images/alywithtextborder.png" className="about-picture"/>
                    </Col>

                    {/* <Clearfix visibleLgBlock visibleMdBlock>
                    </Clearfix> */}
                    <Col className='band-details' data-aos="fade-up" data-aos-duration="1500">
                    <h4 className='language'>◈  English  ◈</h4>
                    <p>
                    From the vibrant streets of Montreal, Old Time Honey is the name of the musical project of Saskatchewan raised folky Aly Marguerite, who comes from a background of classical and punk music. She mixes her love of romantic era classical piano with old time folk, often collaborating with circus performers. 
        
        
                    </p>
                    </Col>
                    <Col className='band-details' data-aos="fade-up" data-aos-duration="1500">
                    <h4 className='language'>◈  Français  ◈</h4>
                    <p>
                    Des rues animées de Montréal, Old Time Honey est le nom du projet musical de la Saskatchewanaise Aly Marguerite, qui vient d'une formation de musique classique et punk. Elle mélange son amour du piano classique de l'époque romantique avec le folk “old time” souvent en collaboration avec des artistes de cirque. 
                    

                    </p>
                    </Col>
                </Row>
                <Socialmedia />
                <Email />
            </Grid>
        )
    }
}