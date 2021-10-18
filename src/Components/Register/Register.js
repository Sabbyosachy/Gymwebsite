import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const auth = getAuth();
    const{user,SignInUsingGoogle}=useFirebase();
    const[email,setEmail]=useState('');
    const[use,setUse]=useState({});
    const[pass,setPass]=useState('');
    const[error,setError]=useState('');
    
    const handleRegistration=event=>{
        event.preventDefault();
        console.log(email,pass);
        if(pass.length<6){
            setError('Password Must Be At Least Six Charecter');
            return;
        }
        
   createUserWithEmailAndPassword(auth, email, pass)
  .then((result) => {
    const{email,displayName} = result.user;
        const useInfo={
            Email:email,
            name:displayName,
        };
        setUse(useInfo);
        setError('');
     
      }).catch((error) => {
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
            <h2>Create Account</h2>
            <p>{use.Email}</p>
            <p>{use.name}</p>
            <form onSubmit={handleRegistration}>
               <input onBlur={handleEmail} className="mt-2" type="email" placeholder="Email" required />
               <br />
               <input onBlur={handlePass} className="mt-2" type="password" placeholder="Password" required />
               <br />
               <input className="mt-2" type="submit" value="Register" />
            </form>
            <p>Already Have An Accoiunt ? <Link to="/login">Login</Link></p>
            <p className="text-danger">{error}</p>
            <button onClick={SignInUsingGoogle} className="btn-warning px-3 py-1 fw-bold">Google Login</button> 
            </div>
        </div>
    );
};

export default Register;