import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const auth = getAuth();
    const{user,SignInUsingGoogle}=useFirebase();
    const[error,setError]=useState('');
    const[use,setUse]=useState({});
    const[email,setEmail]=useState('');
    const[pass,setPass]=useState('');


//Login logout email and password handle 

    const handleLogin=event=>{
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        const{email,displayName} = result.user;
        const useInfo={
            Email:email,
            name:displayName,
        };
        setUse(useInfo);
        setError('');
     
      })
      .catch((error) => {
         setError(error.message);
      });
    
    }
    const handleEmail=event=>{
        setEmail(event.target.value);
       }
       const handlePass=event=>{
           setPass(event.target.value);
       }
    
    return (
        <div>
            <div className="py-5">
            <h2>Login</h2>
            <p>{use.Email}</p>
            <p>{use.name}</p>
            <form onSubmit={handleLogin}>
            <input onBlur={handleEmail} className="mt-2" type="email" placeholder="Email" required />
               <br />
               <input onBlur={handlePass} className="mt-2" type="password" placeholder="Password" required />
               <br />
               <input className="mt-2" type="submit" value="Login" />
            </form>
            <p>New to amazon ? <Link to="/register">Create Account</Link></p>
            <button onClick={SignInUsingGoogle} className="btn-warning px-3 py-1 fw-bold">Google Login</button> 
            </div>
        </div>
    );
};

export default Login;