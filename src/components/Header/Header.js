import React from 'react';
import { Button, Container, Nav, Navbar  } from 'react-bootstrap';
import {  Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
 
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
   const {user, logOut } = useAuth();
    return (
      /* <div className="topbar">
          <div className="wrapper">
               <div className="left">
                  <Link to="/home"><img className="logo" src={logo} alt="" /></Link>
               </div>
              <div className="right"> */
             
  



              <>
  <Navbar bg="dark" sticky="top" collapseOnSelect expand="lg"  variant="dark">
    <Container>
    <Navbar.Brand href="#home">Bangladesh General Hospital</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link className="home text-white"  as={Link}  to="/home">Home</Nav.Link>
      <Nav.Link className="home text-white"  as={Link}  to="/login">Log in</Nav.Link>
      <Nav.Link  className="home text-white" as={Link}  to="/aboutbgh">Aboutbgh</Nav.Link>
      <Nav.Link  className="home text-white" as={Link}  to="/latestnews">Latest News</Nav.Link>
      <Navbar.Text className=" text-white">
        Signed in as:  {user.displayName} 
      </Navbar.Text>
    </Navbar.Collapse>
     
    </Container>
  </Navbar>
  

  
</>  
                 
           
         /*          <nav >
                   <NavLink className="home" to="/home">Home</NavLink>
                   <span style={{color:'black'}}>{user.displayName} </span>
                   {
                   user.email ? <Button   onClick={logOut} className="log-out"  >Log out</Button>
                    :
                   <NavLink className="log-in" to ="/login">Log in</NavLink>}
                   <NavLink className="log-in p-5" to="/aboutbgh">Aboutbgh</NavLink>
                   <NavLink className="home" to="/latestnews">Latest News</NavLink>
                 </nav>
              
                    
                    
                     
               </div>
             </div>
        </div> */
     
        
    );
};

export default Header;