import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css';

const Login = () => {
    const{user,SignInUsingGoogle}=useFirebase();
    return (
        <div>
            <div className="py-5">
            <h2>Login</h2>
            <form>
               <input className="mt-2" type="email" placeholder="Email" />
               <br />
               <input className="mt-2" type="password" placeholder="Password" />
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