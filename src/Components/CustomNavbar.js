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
                    Home <Link to='/'></Link>
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} to='/about' href='/about'>
                    About <Link to='/about'></Link>
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} to='/gallery' href='/gallery'>
                    Gallery <Link to='/gallery'></Link>
                    </NavItem>
                    <NavItem eventKey={4} componentClass={Link} to='/music' href='/music'>
                    Music <Link to='/music'></Link>
                    </NavItem>
                    <NavItem eventKey={5} componentClass={Link} to='/shows' href='/shows'>
                    Shows <Link to='/shows'></Link>
                    </NavItem>
                    <NavItem eventKey={6} componentClass={Link} to='/epk' href='/epk'>
                    EPK <Link to='/epk'></Link>
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}