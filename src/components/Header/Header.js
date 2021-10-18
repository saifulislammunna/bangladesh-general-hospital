import React from 'react';
import {  Link, NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
  const {user,logOut} = useFirebase();
    return (
      <div className="topbar">
          <div className="wrapper">
               <div className="left">
                  <Link to="/home"><img className="logo" src={logo} alt="" /></Link>
               </div>
              <div className="right">
             
                <div className="item-container">
                 
           
                 <nav>
                   <NavLink to="/home">Home</NavLink>
                   {
                   user.email ? <button onClick={logOut} className="cart w-25">Log out</button>
                    :
                   <NavLink className="log-in" to ="/login">Log in</NavLink>}
                   <NavLink to="/aboutbgh">Aboutbgh</NavLink>
                   <NavLink to="/latestnews">Latest News</NavLink>
                 </nav>
             
                    
                    
                     
                </div>
             </div>
        </div>
     </div>
             
        
    );
};

export default Header;