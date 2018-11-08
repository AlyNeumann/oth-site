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
                    <Col data-aos="fade-left">
                        <h4>
                            “Old Time Honey is proof that not only can music take a listener to another place, it can even transport them to a different time” - Brian, Bloody Underrated
                        </h4>
                        ◈◈◈
                        <h4>
                            “Old Time Honey interprétait un air enjoué, bien que légèrement rugueux, un air qui n’aurait pas déparé dans le Berlin de Bretch et Dietrich” - Daniel Coté, Ma Presse
                        </h4>
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
                                It took lots of experimentation with several instruments before Tyler finally settled on playing the upright bass. After seeing a local slap-bass player do his thing he was blown away and began the long process of research into the world of the wooden whale before purchasing his first instrument. Ten years later he now finds himself refining his art in a Jazz studies program, building off years of experience playing folk, rockabilly, and bluegrass as a street musician.
                                ◈ Il a fallu beaucoup d'expérimentation avec plusieurs instruments avant que Tyler a décide de jouer de la basse. Après avoir vu un bassiste local faire son travail, il a été stupéfait et a entamé le long processus de recherche sur le monde de la baleine en bois avant d'acheter son premier instrument. Dix ans plus tard, il se retrouve à affiner son art dans un programme d’études de jazz, puisqu’il accumule des années d’expérience en tant que musicien de rue dans les domaines du folk, du rockabilly et du bluegrass.
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
                                From the streets to the circus, Aly's style of romance and raw roots music from times forgotten intertwine intricately to create an original sound that is heavily layered with nostalgia. 
                                Currently the host of the long standing weekly night "Chick Pickin' Mondays" and leader of the band Old Time Honey, 
                                this classicaly trained prairie gal has been shaking up the Montreal folk scene since 2012.
                                ◈ De la rue au cirque, le style de romance et la musique crue d’Aly se mêlent pour créer un son original empreint de nostalgie. L'animatrice de la nuit "Chick Pickin 'Mondays" et leader du groupe Old Time Honey, cette fille de formation classique de Saskatchewan joue dans la scène folklorique montréalaise depuis 2012.
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
                                    Originally from pop rock roots in Brazil (Luna Blu), Valentina now calls Canada home. A classically trained singer,
                                    actor, TV host, photographer and videographer, Val is very tied into the artistic world. Her love for travel now has her
                                    speaking five languages, and she hopes to learn even more.
                                    ◈ Originaire des racines pop rock du Brésil (Luna Blu), Valentina se trouve maintenant au Canada. Une chanteuse classique, actrice, animatrice télé, photographe et vidéaste, Val est très lié au monde artistique. A cause de son amour du voyage, elle parle maintenant cinq langues et elle espère d'apprendre encore plus. http://valentinapiras.com/
                                 </Panel.Body>
                            </Panel.Collapse>
                        </Panel>
                    </Col>
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
                                     ◈ Olive Bestvater a abandonné 13 ans de formation classique pour se lancer dans des projets de folk, de jazz de rue et de doom metal expérimental à travers le pays.
                                      Elle prend occasionnellement une guitare ou un banjo quand personne ne regarde. Elle est originaire de - et reviendra sûrement un jour - les Prairies.
                                      www.blacktremor.bandcamp.com, www.littlecriminals.bandcamp.com, www.zaum.bandcamp.com, and www.mothbone.bandcamp.com
                                    Black Tremor / Sea Witch split, by Black Tremor / Sea Witch
                                    5 track album
                                    blacktremor.bandcamp.com
                                </Panel.Body>
                            </Panel.Collapse>
                        </Panel>
                    </Col>
                    <Clearfix visibleLgBlock visibleMdBlock>
                    </Clearfix>
                    <Col className='band-details' data-aos="fade-up" data-aos-duration="1000">
                    <h4 className='language'>◈  English  ◈</h4>
                    <p>Organic and raw, taking it back to the streets where good music began by defining their own cabaret, jug band and tin pan alley sound. This artistic resurrection is a merry rebellion, 
                            born on the streets of Montreal, in the form of sultry piano and banjo (Aly), upright bass (Tyler), rocking and reeling violin riffs (Olive), layered on top of nostalgic washboard beats (Valentina). 
                            Fans young and old agree, Old Time Honey’s soulful singing and danceable rhythms make for an unforgettable live music experience. Whether playing a large festival stage or an impromptu street corner, 
                            this group knows how to captivate and animate a crowd, They leave in their wake a trail of smiles and scuffed dancing shoes that grows broader every day! Old Time Honey has played a wide variety of 
                            shows in many of Montreal’s swankiest music clubs, on big stages like ‘La Fete Nationale due Quebec a Montreal’, large and prestigious festivals from Quebec to British Columbia and have even composed 
                            music for a two part circus and burlesque cabaret along side Cirquantique entitled “Bang Bang”. Old Time Honey’s perfected and respected live show continues to spread a unique, smile inducing sound, 
                            while keeping the history of their musical ancestry alive. Now with two full length albums (“Ain’t Dead Yet” and “Bang Bang”), a third coming album (Love songs for sick people) out in October 2018, and their first TV appearance on Telequebec’s Belle et Bum, 
                            there is nothing stopping these dedicated musicians from gallivanting around the globe.
        
        
        
                    </p>
                    </Col>
                    <Col className='band-details' data-aos="fade-up" data-aos-duration="1000">
                    <h4 className='language'>◈  Français  ◈</h4>
                    <p>Avec un son organique et nature, le groupe vous ramène aux sources de la bonne musique en définissant leur propre son - un mélange de cabaret, jug band et tin pan alley qu’on trouverais dans les années 1920.
                     Cette résurrection artistique arrive juste au bon moment… une joyeuse rebellion née dans les rues de Montreal, unissant un banjo et piano brulant (Aly), une contrebasse lancinante (Tyler), un violon en feu (Olive), 
                     et des percussions uniques en leur genre avec planche à laver (Valentina) . Les admirateurs de tous ages sont unanimes, le chant émouvant et les rythmes entrainants de Old Time Honey vous font vivre une experience memorable. 
                     Du coin de la rue aux scenes des plus grands festivals, ce group sait animer et captiver une foule grandissante de jours en jours.
                    Cette gang de troubadours se sont produits dans de nombreuses boites Montrealaises ainsi que sur de grandes scenes comme celle de la Fête Nationale du Québec a Montréal, Belle et Bum sur Telequebec, ainsi qu’a de prestigieux 
                    festivals du Quebec à la Colombie -Britannique.  Ils ont aussi composer la musique pour un spectacle de cirque en deux parties avec Cirquantique qui était présente sur plusieurs grands scènes au Québec. Avec un son de plus en plus 
                    raffinneé qui seme la bonne humeur et un tout nouvel album (Love songs for sick people) qui va sortir en octobre 2018, ce band est en route pour une balade autour du monde!
                    

                    </p>
                    </Col>
                </Row>
                <Socialmedia />
                <Email />
            </Grid>
        )
    }
}