import React from 'react';
import { Button, Card, CardGroup, Col, Container, Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
      <h3 className='text-secondary'><b><i>CAR-STORE</i></b></h3>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link as={Link} to="/" href="#features" className='text-white fw-bold'>Home</Nav.Link>
      <Nav.Link as={Link} to="/about" className='text-white fw-bold'>About Us</Nav.Link>
      <Nav.Link as={Link} to="/cars" className='text-white fw-bold'>Our Cars</Nav.Link>
      <Nav.Link as={Link} to="/reviews" className='text-white fw-bold'>Reviews</Nav.Link>
      <Nav.Link as={Link} to="/blogs" className='text-white fw-bold'>Blogs</Nav.Link>
      <Nav.Link as={Link} to="/contact" className='text-white fw-bold'>Contact</Nav.Link>
      
    </Nav>
    <Nav>
    <Nav.Link as={Link} to="/dashboard" className='text-white fw-bold'>Dashboard</Nav.Link>
    <Nav.Link as={Link} to="/" className='bg-secondary text-white px-3 pe-3'>Sign In</Nav.Link>
   
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;