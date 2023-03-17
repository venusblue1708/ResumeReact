import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar>
        <Container className="navbar d-flex justify-content-between">
          <NavbarBrand>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/3917/3917494.svg?token=exp=1678955445~hmac=8f8947294bd16fd6e536f7c0f2a6ed00"
              alt="error"
              width={28}
            />
          </NavbarBrand>
          <h4 id="text">Resume</h4>
          <Nav className="m-auto">
            <Link id="link" to="/">
              <NavbarBrand className="href">About me</NavbarBrand>
            </Link>
            <Link id="link" to="/skill">
              <Link id="link" to="/education">
                <NavbarBrand className="href">Education</NavbarBrand>
              </Link>
              <NavbarBrand className="href">Skill</NavbarBrand>
            </Link>
            <Link id="link" to="/hobby">
              <NavbarBrand className="href">Hobby</NavbarBrand>
            </Link>
            <Link id="link" to="/project">
              <NavbarBrand className="href">Projects</NavbarBrand>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
