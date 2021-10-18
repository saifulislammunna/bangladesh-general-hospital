import React from 'react';
import useAuth from '../../hooks/useAuth';
 
 import './Login.css';

const Login = () => {
 const { singnInUsingGoogle} =  useAuth();

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="your password"/>
                    <br />
                    <input type="submit" value="Submit" />

                </form>

            
                <div>------------or-------------</div>
                <button onClick = {singnInUsingGoogle}
                 className="btn-primary"
                 >Google Sign in</button>

            </div>
        </div>
    );
};

export default Login;