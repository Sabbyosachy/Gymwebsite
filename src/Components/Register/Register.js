import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="py-5">
            <h2>Create Account</h2>
            <form>
               <input className="mt-2" type="email" placeholder="Email" />
               <br />
               <input className="mt-2" type="password" placeholder="Password" />
               <br />
               <input className="mt-2" type="submit" value="Register" />
            </form>
            <p>Already Have An Accoiunt ? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;