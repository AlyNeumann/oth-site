import React, { Component } from 'react';
import './Gallery.css';
import { Carousel } from 'react-bootstrap';

export default class Gallery extends Component{
    render(){
        return (
        <Carousel pauseOnHover="true" wrap="true" className="carousel">
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel1.jpg" />
              <Carousel.Caption className="carousel-caption">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel2.jpg" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image">
              <img width={900} height={500} alt="900x500" src="Images/carousel3.jpg" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>)
    }
}