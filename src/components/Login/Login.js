import React from 'react';
 

const Login = () => {
    return (
        <div>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <input type="password" name="" id="" placeholder="your password"/>
                    <input type="submit" value="Submit" />

                </form>

              {/*   <p>new to bgh <Link to="/register">Create accout</Link></p> */}
                <div>------------or-------------</div>
                <button className="btn-primary">Google Sign in</button>

            </div>
        </div>
    );
};

export default Login;