import React, { useState } from "react";
import {
  Button,
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Image,
  Modal,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Homenavbar() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const jaz_email = "joma";
  const jaz_password = 1234;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const add = () => {
    console.log(email, password);
    if (email == jaz_email && password == jaz_password) {
      setShow(false);
      navigate("/admin");
    }
  };
  return (
    <>
      <Navbar bg="primary" expand={false}>
        <Container fluid>
          <Image
            src={"https://priem.oshsu.kg/img/footer-gerb.svg"}
            width="100px"
            height="100px"
          ></Image>
          <Navbar.Brand
            href="#"
            className="d-flex justify-content-center"
            as={Link}
            to="/"
            style={{ fontSize: "40px" }}
          >
            Navbar Offcanvas
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Меню</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link to="/admin" onClick={handleShow}>
                  Admin
                </Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <FormControl
          placeholder="login"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl
          placeholder="password"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => add()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Homenavbar;
