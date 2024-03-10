import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg" className="navbar-custom">
      <Container fluid>
        <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
        <div className="ml-auto">
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "1rem",
            }}
          >
            Home
          </Link>
          <Link
            to="/contact"
            style={{
              color: "white",
              textDecoration: "none",
              marginRight: "1rem",
            }}
          >
            Contacto
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;
