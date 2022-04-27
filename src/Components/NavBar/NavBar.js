import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.modules.css'


const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src="https://i.ibb.co/YtQCRqL/logo-1.png" alt="brand" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='mx-3' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='mx-3' as={Link} to="/donation">Donation</Nav.Link>
                            <Nav.Link className='mx-3' as={Link} to="/events">Events</Nav.Link>
                            <Nav.Link className='mx-3' as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} className='btn btn-primary mx-2 my-2 my-lg-0 text-white' to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} className='btn btn-dark text-white mx-2 my-2 my-lg-0' to="/admin">Admin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar