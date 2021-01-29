import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const NavbarObj = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/event">Events</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarObj;