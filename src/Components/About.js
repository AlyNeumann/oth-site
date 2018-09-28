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
                    <Col>
                        <h3>
                            “Old Time Honey is proof that not only can music take a listener to another place, it can even transport them to a different time” - Brian, Bloody Underrated
                        </h3>
                        <h3>
                            “Old Time Honey interprétait un air enjoué, bien que légèrement rugueux, un air qui n’aurait pas déparé dans le Berlin de Bretch et Dietrich” - Daniel Coté, Ma Presse
                        </h3>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="about-person-wrapper">
                        <Image src="Images/tyler.jpg" circle className="about-profile-pic" />
                        <TypeWriter><h3>Tyler Parent</h3></TypeWriter>
                        <Panel id="collapsible-panel" expanded={this.state.closed}>
                            <Panel.Heading>
                                <Panel.Title className="panel-title">Upright Bass & Voice</Panel.Title>
                                <Panel.Toggle componentClass="a" className="bio" >Biography</Panel.Toggle>
                            </Panel.Heading>
                            <Panel.Collapse >
                                <Panel.Body >
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
                                <Panel.Toggle componentClass="a" className="bio">Biography</Panel.Toggle>
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
                                <Panel.Toggle componentClass="a" className="bio">Biography</Panel.Toggle>
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
                        <TypeWriter><h3>Olive Bestvater</h3></TypeWriter>
                        <Panel id="collapsible-panel" expanded={this.state.closed}>
                            <Panel.Heading>
                                <Panel.Title> Violin, Loop & Voice </Panel.Title>
                                <Panel.Toggle componentClass="a" className="bio">Biography</Panel.Toggle>
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
                    <Clearfix visibleLgBlock visibleMdBlock>
                    </Clearfix>
                    <Col className='band-details'>
                    <h4>◈  English  ◈</h4>
                    <p>Organic and raw, taking it back to the streets where good music began by defining their own cabaret, jug band and tin pan alley sound. This artistic resurrection is a merry rebellion, 
                            born on the streets of Montreal, in the form of sultry piano and banjo (Aly), upright bass (Tyler), rocking and reeling violin riffs (Olive), layered on top of nostalgic washboard beats (Valentina). 
                            Fans young and old agree, Old Time Honey’s soulful singing and danceable rhythms make for an unforgettable live music experience. Whether playing a large festival stage or an impromptu street corner, 
                            this group knows how to captivate and animate a crowd, They leave in their wake a trail of smiles and scuffed dancing shoes that grows broader every day! Old Time Honey has played a wide variety of 
                            shows in many of Montreal’s swankiest music clubs, on big stages like ‘La Fete Nationale due Quebec a Montreal’, large and prestigious festivals from Quebec to British Columbia and have even composed 
                            music for a two part circus and burlesque cabaret along side Cirquantique entitled “Bang Bang”. Old Time Honey’s perfected and respected live show continues to spread a unique, smile inducing sound, 
                            while keeping the history of their musical ancestry alive. Now with two full length albums (“Ain’t Dead Yet” and “Bang Bang”), a third coming out in October 2018, and their first TV appearance on Telequebec’s Belle et Bum, 
                            there is nothing stopping these dedicated musicians from gallivanting around the globe.
        
        
        
                    </p>
                    <h4>◈  Français  ◈</h4>
                    <p>Avec un son organique et nature, le groupe vous ramène aux sources de la bonne musique en définissant leur propre son - un mélange de cabaret, jug band et tin pan alley qu’on trouverais dans les années 1920.
                     Cette résurrection artistique arrive juste au bon moment… une joyeuse rebellion née dans les rues de Montreal, unissant un banjo et piano brulant (Aly), une contrebasse lancinante (Tyler), un violon en feu (Olive), 
                     et des percussions uniques en leur genre avec planche à laver (Valentina) . Les admirateurs de tous ages sont unanimes, le chant émouvant et les rythmes entrainants de Old Time Honey vous font vivre une experience memorable. 
                     Du coin de la rue aux scenes des plus grands festivals, ce group sait animer et captiver une foule grandissante de jours en jours.
                    Cette gang de troubadours se sont produits dans de nombreuses boites Montrealaises ainsi que sur de grandes scenes comme celle de la Fête Nationale du Québec a Montréal, Belle et Bum sur Telequebec, ainsi qu’a de prestigieux 
                    festivals du Quebec à la Colombie -Britannique.  Ils ont aussi composer la musique pour un spectacle de cirque en deux parties avec Cirquantique qui était présente sur plusieurs grands scènes au Québec. Avec un son de plus en plus 
                    raffinneé qui seme la bonne humeur et un tout nouvel album qui va sortir en octobre 2018, ce band est en route pour une balade autour du monde!
                    

                    </p>
                    </Col>
                </Row>
                <Socialmedia />
                <Email />
            </Grid>
        )
    }
}