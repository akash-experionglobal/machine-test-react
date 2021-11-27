import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container fluid>
          <Image src={Logo} roundedCircle style={{ width: 80 }} />
          <Navbar.Brand>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Sales Management
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link><Link to="/" style={{ color: "black", textDecoration: "none", marginLeft:100, fontSize:18}}>Login</Link></Nav.Link>
            <Nav.Link><Link to="/register" style={{ color: "black", textDecoration: "none", marginLeft:50, fontSize:18 }}>Register</Link></Nav.Link>  
            <Nav.Link><Link to="/visitcustomerdetails" style={{ color: "black", textDecoration: "none", marginLeft:50, fontSize:18 }}>Customer Details</Link></Nav.Link>  
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
