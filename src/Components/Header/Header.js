import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Moto-World</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/bikes">Bikes</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        {user?.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                        {
                            user?.email ?
                                <Nav.Link onClick={logOut}>Logout</Nav.Link> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;