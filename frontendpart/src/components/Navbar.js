import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PeopleIcon from '@mui/icons-material/People';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

function NavbarMenu() {
  return (
    <Navbar className="navbody container" expand="lg">
      <Container className="d-flex navhead">
      <Link
              to="/userlist"
              className="navlogo"
            >
             <PeopleIcon sx={{fontSize:40}}/>UserList
            </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className="navmeanu"
            >
              <GroupAddIcon fontSize="large" />User
            </Link>
            <Link
              to="/contactus"
              className="navmeanu"
            >
              Contact Us
            </Link>
            <Link
              to="/aboutus"
              className="navmeanu"
            >
              About Us
            </Link>
            <Link
              to="/logout"
              className="navmeanu"
            >
              LogOut
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
