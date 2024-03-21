import { Navbar, Container, Nav, Button } from 'react-bootstrap';
//import Form from 'react-bootstrap/Form';


function NavbarCreator () {
    return (
        <>
            <Navbar className="justify-content-center" style={{ backgroundColor: 'lightblue' }}>
                <Container>
                <Navbar.Brand>Haushaltsbuch</Navbar.Brand>
                <Nav>
                    <Nav.Link href='#Einkommen'><Button variant="outline-secondary">Einkommen</Button>{' '}</Nav.Link>
                    <Nav.Link href='#Ausgabe'><Button variant="outline-primary">Ausgaben</Button>{' '}</Nav.Link>
                    <Nav.Link href='#Zusammenfassung'><Button variant="outline-danger">Zusammenfassung</Button>{' '}</Nav.Link>
                </Nav>
                </Container>
            </Navbar>        
        </>
    )
}

export default NavbarCreator;