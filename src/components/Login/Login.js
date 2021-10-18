import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, sendEmailVerification,sendPasswordResetEmail } from "firebase/auth";
 

 import './Login.css';

const Login = ( ) => {
  const auth = getAuth();
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
 const [email,setEmail] = useState('');
 const [password, setPassword] =useState('');
 const [error, setError] = useState('');
 const [isLogin, setIsLogin] = useState(false);

const toggleLogin = e => {
  setIsLogin(e.target.checked)
}

 const handleEmailChange = e => {
   setEmail(e.target.value);
 }
 const halePassWordChange = e => {
  setPassword(e.target.value);
 }

 const handleRegistration =  e => {
    e.preventDefault();
     console.log( email, password);
     if(password.length < 6 ){
       setError('Password Must be 6 Characters long')
       return ;
     }
     if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
              setError('Password Must contain two upper case');
              return;
     }
    isLogin?processlogin(email, password) : regiterNewUser(email, password);
     

 }
const processlogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then(result => {
    const user = result.user;
    console.log(user);
    setError('');
   
  })
  .catch(error => {
    setError(error.message);
  })
}



const regiterNewUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
    const user = result.user;
    console.log(user);
    setError('');
    verifyEmail();
  })
  .catch(error => {
    setError(error.message);
  })
}
const verifyEmail = () =>{
  sendEmailVerification(auth.currentUser)
  .then( result => {
    console.log(result);
  })
}

const handleResetPassword = () => {
 
  sendPasswordResetEmail(auth, email)
   .then(result => {
           
  })
}

    return (
        <div className="mx-5">
            <div >   
            <h2>Please {isLogin ? 'Login' :'Register'}</h2>
               <div className=" " /* className="login-form" */>
               <form onSubmit={handleRegistration}>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} required type="email" className="form-control" id="inputEmail3" placeholder="Your Email"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input  onChange={halePassWordChange}  type="password" className="form-control" id="inputPassword3" placeholder="Your password"/>
    </div>
  </div>
    
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check d-flex">
        <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Already Register?
        </label>
      </div>
    </div>
  </div>
  <div className="row mb-3 text-danger">
    {error}
  </div>
  <button type="submit" className="btn  btn-primary">{isLogin ? 'Log in' :'Register'}</button>
  <button onClick={handleResetPassword} type="button" class="btn btn-secondary  "> Reset Password</button>

</form>
                  
                 
              
               
               </div>
           

            
                <div>------------or-------------</div>
                <Button   onClick = {handleGoogleLogin}
                 className="btn"
                 >Google Sign in</Button >

            </div>
        </div>
    );
};

export default Login;