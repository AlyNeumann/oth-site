import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>Link to BandCamp</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} to='/' href='/'>
                    Home
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} to='/about' href='/about'>
                    About
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} to='/gallery' href='/gallery'>
                    Gallery
                    </NavItem>
                    <NavItem eventKey={4} componentClass={Link} to='/music' href='/music'>
                    Music
                    </NavItem>
                    <NavItem eventKey={5} componentClass={Link} to='/shows' href='/shows'>
                    Shows
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}