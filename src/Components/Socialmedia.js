import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

export default class Socialmedia extends Component {
    render(){
        return(
            <ButtonToolbar>
                 <Button bsStyle="link" href="https://www.facebook.com/OldTimeHoney/?ref=bookmarks">Facebook</Button>
                 <Button bsStyle="link" href="https://www.instagram.com/oldtimehoney/">Instagram</Button>
                 <Button bsStyle="link" href="https://twitter.com/OldTimeHoney">Twitter</Button>
                 <Button bsStyle="link" href="https://www.youtube.com/channel/UCOafGNU1EZOFla2IXy8MsOg">Youtube</Button>
            </ButtonToolbar>
        )
    }
}