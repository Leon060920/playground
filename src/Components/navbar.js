import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import SignInSignupWithLocalStorage from '../SignInSignUp/SignInSignUp';


function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-secondary text-light">
            <Container fluid >
                <Navbar.Brand >Bienvenido: {localStorage.getItem('name')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                </Navbar.Collapse>


                <Nav
                    className="me-auto my-2 my-lg-0 text-light"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>

                    <Nav.Link href="#">Contador</Nav.Link>
                    <Nav.Link href="#">Carrusel</Nav.Link>
                    <Nav.Link href="#">Fetch</Nav.Link>

                    


                </Nav>

            </Container>
            
        </Navbar>

    );
}

export default NavScrollExample;