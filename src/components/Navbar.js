import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBlog, faMap, faUser, faSignInAlt, faUserPlus, faDashboard } from '@fortawesome/free-solid-svg-icons';
import './NavbarComponent.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          Namma Kudla       
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto nav-links">
            <Nav.Link>
              <Link to="home" smooth duration={500}>
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="blog" smooth duration={500}>
                <FontAwesomeIcon icon={faBlog} /> Blog
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="destinations" smooth duration={500}>
                <FontAwesomeIcon icon={faMap} /> Destinations
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="guideProfile" smooth duration={500}>
                <FontAwesomeIcon icon={faUser} /> Guide Profile
              </Link>
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard">
              <FontAwesomeIcon icon={faDashboard} /> Dashboard
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto nav-auth">
            <Nav.Link>
              <Link to="login" smooth duration={500}>
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="register" smooth duration={500}>
                <FontAwesomeIcon icon={faUserPlus} /> Register
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
