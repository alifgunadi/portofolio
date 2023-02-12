import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav ,Navbar } from "react-bootstrap";

export default class Atas extends React.Component {
    render() {
        return(
          <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Alif Portofolio</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Biograph</Nav.Link>
              <Nav.Link href="https://www.instagram.com/alifgunadi/">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        )
    }
}