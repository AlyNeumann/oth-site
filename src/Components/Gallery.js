import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import './Gallery.css';
import Socialmedia from './Socialmedia';
import Email from './Email';
import Instafeed from 'react-instafeed';



const INSTAGRAM_USER_ID = '3281702749';
const INSTAGRAM_CLIENT_ID = '645e60bbdef1435d923316f2dd39b72b';
const INSTAGRAM_ACCESS_TOKEN = '3281702749.1677ed0.cd42cef5e571422496e93a44b17be31b';


export default class Gallery extends Component {
  render() {
    const instafeedTarget = 'instafeed';
    return(<div className="instasocial" data-aos="fade-up" data-aos-duration="1500">
      <div id={instafeedTarget} >
      <Instafeed
          limit='12'
          ref='instafeed'
          resolution='standard_resolution'
          sortBy='most-liked'
          target={instafeedTarget}
          template=' <div class="col-md-3  col-sm-6 service wow animated zoomIn " id="instafeed-gallery-feed">
          <a class="instagram-image" href="{{link}}" target="_blank"><div class="img-featured-container">
          <div class="img-backdrop"></div>         <div class="description-container">
              <p class="caption">{{caption}}</p>
              <span class="likes">
              <ion-icon name="heart"></ion-icon>{{likes}}</span>
              <span class="comments">
              <ion-icon name="chatboxes"></ion-icon>{{comments}}
              </span>
              </div>
              <img src="{{image}}" class="img-responsive">   
     </div>
       </a>
   </div> '
          userId={`${INSTAGRAM_USER_ID}`} 
          clientId={`${INSTAGRAM_CLIENT_ID}`} 
          accessToken={`${INSTAGRAM_ACCESS_TOKEN}`}
          
      />
      </div>
      <div data-aos="fade-up" data-aos-delay="2000">
      <Socialmedia />
      <Row className="gallery-email-container">
      <Email />
      </Row>
      </div>
      </div>)
  }
}




