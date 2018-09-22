import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>Old Time Honey<Image src="Images/beeClear.png" style={{ width: 50 }}/></Link>
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
                    <NavItem eventKey={6} componentClass={Link} to='/epk' href='/epk'>
                    EPK
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}