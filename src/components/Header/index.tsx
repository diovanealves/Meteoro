import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import Logo from '../../assets/Logo.png'

export default function Header() {
  return (
    <>
      <Navbar expand="md" className="bg-black navbar-dark">
        <Container fluid>
          <Navbar.Brand href="#" className="m-0">
            <img className="d-block" src={Logo} alt="Logo da loja Meteoro" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2" navbarScroll>
              <Nav.Link href="#" className="active" aria-current="page">
                Home
              </Nav.Link>
              <Nav.Link href="#">Nossas Lojas</Nav.Link>
              <Nav.Link href="#">Novidades</Nav.Link>
              <Nav.Link href="#">Promoções</Nav.Link>
            </Nav>
            <Form
              className="d-none d-md-flex"
              style={{ maxWidth: '350px', width: '40%' }}
            >
              <Form.Control
                type="search"
                placeholder="Digite o Produto"
                className="me-2 rounded-0"
                aria-label="Pesquisar"
              />
              <Button type="button" variant="outline-light rounded-0">
                Buscar
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Form className="d-flex d-md-none my-3">
          <Form.Control
            type="search"
            placeholder="Digite o Produto"
            className="me-2 rounded-0 border-black"
            aria-label="Pesquisar"
          />
          <Button type="button" variant="outline-black border-black rounded-0">
            Buscar
          </Button>
        </Form>
      </Container>
    </>
  )
}
