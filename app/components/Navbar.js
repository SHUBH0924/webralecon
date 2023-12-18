"use client";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarSection() {
  return (
    <Navbar expand="lg" className='bg-body-tertiary shadow fixed-top'>
      <Container>
        <Navbar.Brand href="#home" className='me-5 ms-5'><img src='https://www.webralecon.com/images/logo/header_logo.png' alt='logo' width={180}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="px-auto fs-6 fw-semibold me-5 ">
            <Nav.Link href="#home" className='me-2'>Home</Nav.Link>
            <Nav.Link href="#link" className='me-2'>About Us</Nav.Link>
            <NavDropdown className='me-2'  title="Digital Marketing" id="basic-nav-dropdown">
              <NavDropdown.Item className='fs-6 fw-semibold' href="#action/3.1">SEO Services</NavDropdown.Item>
              <NavDropdown.Item className='fs-6 fw-semibold' href="#action/3.2">
                Social Media Marketing
              </NavDropdown.Item>
              <NavDropdown.Item className='fs-6 fw-semibold' href="#action/3.3">PPC Management</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='me-2' title="Interactive Web Solution" id="basic-nav-dropdown">
              <NavDropdown.Item className='fs-6 fw-semibold' href="#action/3.1">Responsive Web Design</NavDropdown.Item>
              <NavDropdown.Item className='fs-6 fw-semibold' href="#action/3.2">
              Wordpress Development
              </NavDropdown.Item>
              <NavDropdown.Item className='fs-6 fw-semibold' href="#action/3.3">Web Maintenance</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='me-2' href="#link">Marketing Packages</Nav.Link>
          
          <Button className='rounded ms-5 shadow rounded border-0' style={{backgroundColor:"#fc0b04"}}>Appointment</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;