import React from 'react';
import { Container, Nav,Navbar as Appbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Navbar.css';

//Navbar create
const Navbar = () => {
  const {user,logOut}=useFirebase();
    return (
        <Appbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Appbar.Brand to="/"><i className="fas fa-dumbbell"></i> Center Of Strength</Appbar.Brand>
  <Appbar.Toggle aria-controls="responsive-navbar-nav" />
  <Appbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
   
    </Nav>
    <Nav className="navlinks">
        <NavLink className="home" to="/">Home</NavLink>
        <NavLink className="service" to="/service">Service</NavLink>
        <NavLink className="service" to="/details">Details</NavLink>
        <NavLink className="aboutus" to="/aboutus">About us</NavLink>
        {user.email && <span className="text-light mt-2 me-2">{user.displayName} </span>}
        {
          user.email?
          <button onClick={logOut}>Logout</button>
          :
          <NavLink className="login" to="/login">Login</NavLink>}
        
    </Nav>
  </Appbar.Collapse>
  </Container>
</Appbar>
    );
};

export default Navbar;