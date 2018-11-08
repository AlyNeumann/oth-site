import React, { Component } from 'react';
import './Gallery.css';
import { Carousel, Grid } from 'react-bootstrap';
import Socialmedia from './Socialmedia';
import Email from './Email';

export default class Gallery extends Component {
  render() {
    return (
      <Grid>
        <Grid className="carousel-grid">
          <Carousel pauseOnHover="true" wrap="true" className="carousel">
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel1.jpg" />
              <Carousel.Caption className="carousel-caption">
                <h3>The Band with Audrey</h3>
                <p>Spring 2018 by Valentina Piras.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel2.jpg" />
              <Carousel.Caption>
                <h3>O Patro Vys</h3>
                <p>Freaks & Burlesque Cabaret with History of Gun Powder.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel3.jpg" />
              <Carousel.Caption>
                <h3>Spring in Montreal</h3>
                <p>Spring 2018 by Valentina Piras.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel4.jpg" />
              <Carousel.Caption className="carousel-caption">
                <h3>Theatre Saint Catherine</h3>
                <p>Photo by Chloe Laëtitia.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel5.jpg" />
              <Carousel.Caption className="carousel-caption">
                <h3>Theatre Saint Catherine</h3>
                <p>Photo of Esmeralda by Chloe Laëtitia.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel6.jpg" />
              <Carousel.Caption className="carousel-caption">
                <h3>The band</h3>
                <p>By Valentina Piras.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel7.jpg" />
              <Carousel.Caption className="carousel-caption">
                <h3>O Patro Vys</h3>
                <p>Lancement D'album d'Aleksi Campagne.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel8.jpg" />
              <Carousel.Caption className="carousel-caption">
                <h3>Fête Nationale</h3>
                <p>La fête nationale de Quebec à Montréal.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel9.jpg" />
              <Carousel.Caption className="carousel-caption">
                <h3>Shazamfest!</h3>
                <p>Shazamfest main stage.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel10.jpg" />
              <Carousel.Caption className="carousel-caption">
                <h3>Belle et Bum</h3>
                <p>Photo par Claude Dufresne.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel11.jpg" />
              <Carousel.Caption className="carousel-caption">
                <h3>O Patro Vys</h3>
                <p>Freaks & Burlesque Cabaret with History of Gun Powder.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel12.jpg" />
              <Carousel.Caption className="carousel-caption">
                <h3>O Patro Vys</h3>
                <p>Freaks & Burlesque Cabaret with History of Gun Powder.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Grid>
        <Socialmedia />
        <Email />
      </Grid>)
  }
}