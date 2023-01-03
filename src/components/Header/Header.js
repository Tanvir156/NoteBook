import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { logout } from "../../action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function CollapsibleExample() {
  const his = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const logoutHandeler = () => {
    dispatch(logout());
    his("/account");
  };

  useEffect(() => {}, [userInfo]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ position: "fixed", zIndex: "1", width: "100%" }}
    >
      <Container>
        <Navbar.Brand href="/">Feel Free To Post</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {userInfo ? (
          <>
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link href="/mynotes">MY-Notes</Nav.Link>
                <Nav.Link href="/createpublicnote">Status</Nav.Link>
                <Nav.Link href="/announcment">Announcment</Nav.Link>
                <Nav.Link href="/announcmentforsession">Class Shedule</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/chat">messages</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <NavDropdown
              title={`${userInfo.name}`}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item onClick={logoutHandeler}>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
          </>
        ) : (
          <Nav.Link href="/login">Login</Nav.Link>
        )}
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
