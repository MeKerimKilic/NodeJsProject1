import React from "react";
import {Navbar, Nav, Container,Button,NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () =>{
    return(
        <Navbar className='py-4' bg="primary" expand='lg'>
            <Container>
                <Navbar.Brand className='text-white' href="#home">IEU ACM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='text-white' >Anasayfa</Nav.Link>
                        <Nav.Link href="#link"></Nav.Link>
                        <NavDropdown title={
                            <span className='text-white'>
                                Hakkımızda
                            </span>
                        } id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" >ACM Nedir?</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" >Neler Yapıyoruz? </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" >Ekibimiz</NavDropdown.Item>
                            <NavDropdown.Divider />

                        </NavDropdown>
                        <Nav.Link href="#link" className='text-white'>Duyurular</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Blog</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>İletişim</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant='outline-light'>
                    <Link
                        className='text-white text-decoration-none'
                    to='/auth'>Giriş Yap</Link>
                </Button>
            </Container>
        </Navbar>
    )
}

export default Header;