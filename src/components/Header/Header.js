import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
  const {user} = useFirebase();
    return (
        <div>
             
                 <Link to="/home">Home</Link>
               <Link to="/login">Login</Link>  
                  
                  
                 <Link to="/aboutbgh">About Bgh</Link>
            
        </div>
    );
};

export default Header;