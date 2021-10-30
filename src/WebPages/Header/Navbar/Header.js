import React from 'react';
import { Container, Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navbar.css'
const Header = () => {
  const {user, logOut}= useAuth();
    return (
        <div>
            <Navbar bg="primary" expand="lg">
     <Container fluid>
     <Navbar.Toggle aria-controls="navbarScroll" />
     <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll>
        <Link className="header-panel" to="/home">Home</Link>
        <Link className="header-panel" to="/tourist-place">Tour</Link>
        <Link className="header-panel" to="/travel">Travel Guide</Link>
        
        <Link className="header-panel" to="/contact">Contact US</Link>
      </Nav>
    </Navbar.Collapse>
    <div className="me-2 text-light">Logged As: {user.email}
            </div>
            <div className="imgage-div me-1">
            <img src={user.photoURL} alt="" />
            </div>
    {
      user.email ? <Button className="btn btn-warning" onClick={logOut} >Log Out</Button>
      :
<Link className="header-panel" to="/login">Login</Link>
    }
  </Container>
  
</Navbar>
        </div>
    );
};

export default Header;