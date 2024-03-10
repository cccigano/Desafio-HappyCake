import { Container, Form, Button, Navbar } from "react-bootstrap";

const Contacto = () => {
  return (
    <>
      <Container className="pt-5">
        <h2 className="text-center">
          Cuentanos, ¿En qué te podemos ayudar? 🧑🏾‍💻
        </h2>
        <Form className="text-center">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu correo electrónico"
            />
          </Form.Group>

          <Form.Group controlId="formBasicDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ingresa una descripción"
            />
          </Form.Group>

          <Button variant="danger" type="submit" className="mt-3">
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Contacto;
