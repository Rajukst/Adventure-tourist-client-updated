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
          <div>
            <span className="header-panel text-warning">Adventure <span className="text-dark">Tourist</span> </span> 
          </div>
        <div>
        <Link className="header-panel" to="/home">Home</Link>
        </div>
      
        {
          user.email && <div>
            <Link className="header-panel" to="/my-booking">Your Booking</Link>
          <Link className="header-panel" to="/manage-booking">Manage Your Booking</Link>
          <Link className="header-panel" to="/add-service">Add A New Booking</Link>
          </div>
        }
      </Nav>
    </Navbar.Collapse>
    <div className="me-2 text-light">Logged As: {user.email}
            </div>
            <div className="imgage-div me-1">
            <img className="image-link" src={user.photoURL} alt="" />
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