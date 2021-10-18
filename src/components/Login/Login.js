import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
 

 import './Login.css';

const Login = ( ) => {
    
 const { singnInUsingGoogle} =  useAuth();
 const location = useLocation();
 const history = useHistory();
 const redirect_uri = location.state?.form || `/home`;
/*  console.log('came from',location.state?.form); */
 const handleGoogleLogin = () => {
     singnInUsingGoogle()
     .then(result => {
            history.push(redirect_uri);
     })

 }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form  >
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="your password"/>
                    <br />
                    <input type="submit" value="Login" />

                </form>

            
                <div>------------or-------------</div>
                <button  onClick = {handleGoogleLogin}
                 className="btn-primary"
                 >Google Sign in</button>

            </div>
        </div>
    );
};

export default Login;