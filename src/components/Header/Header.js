import React from 'react';
import { Button, Container, Nav, Navbar  } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
 
import logo from '../../images/logo.png';
 
import './Header.css';

/* Header component */
const Header = () => {
   const {user, logOut } = useAuth();
    
    return (
       
              <>
  <Navbar bg="dark" sticky="top" collapseOnSelect expand="lg"  variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img className="logo" src={logo} alt="" /> </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link className="home text-white"  as={Link}  to="/home">Home</Nav.Link>
      {
        user.email ? <Button   onClick={logOut} className="log-out"  >Log out</Button>
        :
        <Nav.Link className="home text-white"  as={Link}  to="/login">Log in</Nav.Link>}
      <Nav.Link  className="home text-white" as={Link}  to="/aboutbgh">About BGH</Nav.Link>
      <Nav.Link  className="home text-white" as={Link}  to="/latestnews">Latest News</Nav.Link>
      <Navbar.Text className=" text-white">
        Signed in as:  {user.displayName}  
      </Navbar.Text>
    </Navbar.Collapse>
     
    </Container>
  </Navbar>
  

  
</>  
                 
        
     
        
    );
};

export default Header;