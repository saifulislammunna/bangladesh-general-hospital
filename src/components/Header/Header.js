import React from 'react';
import { Button  } from 'react-bootstrap';
import {  Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
 
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
   const {user, logOut } = useAuth();
    return (
      <div className="topbar">
          <div className="wrapper">
               <div className="left">
                  <Link to="/home"><img className="logo" src={logo} alt="" /></Link>
               </div>
              <div className="right">
             
                <div className="item-container">
                 
           
                 <nav>
                   <NavLink className="home" to="/home">Home</NavLink>
                   <span style={{color:'black'}}>{user.displayName}</span>
                   {
                   user.email ? <Button   onClick={logOut} className="log-out"  >Log out</Button>
                    :
                   <NavLink className="log-in" to ="/login">Log in</NavLink>}
                   <NavLink className="log-in p-5" to="/aboutbgh">Aboutbgh</NavLink>
                   <NavLink className="home" to="/latestnews">Latest News</NavLink>
                 </nav>
             
                    
                    
                     
                </div>
             </div>
        </div>
     </div>
             
        
    );
};

export default Header;