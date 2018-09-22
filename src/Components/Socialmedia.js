import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export default class Socialmedia extends Component {
    render(){
        return(
            <Grid>
                 <SocialIcon url="https://www.facebook.com/OldTimeHoney/?ref=bookmarks" color="#616566" style={{ height: 35, width: 35 }}/>
                 <SocialIcon url="https://www.instagram.com/oldtimehoney/" color="#616566" style={{ height: 35, width: 35 }}/>
                 <SocialIcon url="https://twitter.com/OldTimeHoney" color="#616566" style={{ height: 35, width: 35 }}/>
                 <SocialIcon url="https://www.youtube.com/channel/UCOafGNU1EZOFla2IXy8MsOg" color="#616566" style={{ height: 35, width: 35 }}/>
            </Grid>
        )
    }
}