import React from 'react';
import useFirebase from '../../hooks/useFirebase';
 import './Login.css';

const Login = () => {
 const {user, singnInUsingGoogle} = useFirebase();

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <input type="password" name="" id="" placeholder="your password"/>
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