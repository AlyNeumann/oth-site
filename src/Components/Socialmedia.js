import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './Socialmedia.css';

export default class Socialmedia extends Component {
    render(){
        return(
            <Grid>
                 <SocialIcon url="https://www.facebook.com/OldTimeHoney/?ref=bookmarks" color="black" style={{ height: 35, width: 35 }} className="icon"/>
                 <SocialIcon url="https://www.instagram.com/oldtimehoney/" color="black" style={{ height: 35, width: 35 }} className="icon"/>
                 <SocialIcon url="https://twitter.com/OldTimeHoney" color="black" style={{ height: 35, width: 35 }} className="icon"/>
                 <SocialIcon url="https://www.youtube.com/channel/UCOafGNU1EZOFla2IXy8MsOg" color="black" style={{ height: 35, width: 35 }} className="icon"/>
                 <SocialIcon url="https://artists.spotify.com/c/artist/0G2Nfk3Z3xCW3dP3NrHca8/profile#about" color="black" style={{ height: 35, width: 35 }} className="icon"/>
            </Grid>
        )
    }
}