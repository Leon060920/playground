import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Home from '../SignInSignUp/Home';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavScrollExample() {

    const logout=()=> {
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }

    return (
        <Navbar expand="lg" className="bg-secondary text-light">
            <Container fluid >
                <Navbar.Brand>Bienvenido: {localStorage.getItem('name')}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    

                </Navbar.Collapse>


                <Nav
                    className="me-auto my-2 my-lg-0 text-light"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>

                    <Nav.Link href="/contador">Contador</Nav.Link>
                    <Nav.Link href="/carrusel">Carrusel</Nav.Link>
                    <Nav.Link href="/fetch">Fetch</Nav.Link>

                    <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" onClick={logout}>Salir</NavDropdown.Item>
             
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={deleteAccount}>
                Borrar
              </NavDropdown.Item>
            </NavDropdown>


                </Nav>

            </Container>
            
        </Navbar>

    );
}

export default NavScrollExample;