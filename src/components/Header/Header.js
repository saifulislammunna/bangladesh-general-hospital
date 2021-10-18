import React from 'react';
import {  NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
  const {user} = useFirebase();
    return (
        <div>
             
                 <nav>
                   <NavLink to="/home">Home</NavLink>
                   <NavLink to="login">Login</NavLink>
                   <NavLink to="/aboutbgh">Aboutbgh</NavLink>
                 </nav>
        </div>
    );
};

export default Header;