import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import '../styles/homenavbar.css';
import { MdOutlineShoppingBag } from "react-icons/md";
import Heropage from './Heropage';
import About from './About';
import Footer from './Footer';

function HomeNavbar() {
  return (
    <>
    <Navbar bg="light" expand="lg" className="home-header">
      <div className="container-fluid">
        <Navbar.Brand href="#home" className="me-auto">
          <img src={logo} alt='logo' width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-items nav-size ">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item href="#team">Team</NavDropdown.Item>
              <NavDropdown.Item href="#history">History</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Menu" id="menu-dropdown">
              <NavDropdown.Item href="#breakfast">Breakfast</NavDropdown.Item>
              <NavDropdown.Item href="#lunch">Lunch</NavDropdown.Item>
              <NavDropdown.Item href="#dinner">Dinner</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#reserve">Reserve</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex">
            <Button  className="reservation-button">Reservation</Button>
            <MdOutlineShoppingBag className='shop-icon ms-3' />
          </div>
        </Navbar.Collapse>
      </div>
      </Navbar>
    <Heropage />
    <About />
    </>
  );
}

export default HomeNavbar;
