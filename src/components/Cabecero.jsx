import {
  IoIosPerson,
  IoIosBuild,
  IoIosContact,
  IoMdBusiness,
} from "react-icons/io";
import { Navbar, Nav, Container } from "react-bootstrap";

export const Cabecero = () => {
  const gradientBackground = {
    background: 'white'
  };

  const linkStyles = {
    color: 'black',
    transition: 'color 0.3s', // Añadir transición para suavizar el cambio de color al pasar el cursor
  };

  return (
    <Container fluid>
      <Navbar style={gradientBackground} variant="black" className="justify-content-end">
        <Nav className="justify-content-end">
          <Nav.Link href="/aboutMe" style={linkStyles}>
            Sobre Mí <IoIosPerson />
          </Nav.Link>
          <Nav.Link href="/productos" style={linkStyles}>
            Servicios <IoIosBuild />
          </Nav.Link>
          <Nav.Link href="/servicios" style={linkStyles}>
            Contacto <IoIosContact />
          </Nav.Link>
          <Nav.Link href="/contacto" style={linkStyles}>
            Proyectos <IoMdBusiness/>
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};