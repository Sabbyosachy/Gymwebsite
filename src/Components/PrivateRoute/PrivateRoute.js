import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

//Private nroute set 

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading} =useAuth();
    if(isLoading){
     return <Spinner animation="border" variant="dark" />
    }
    
    return (
        <div>
           <Route
      {...rest}
      render={({ location }) =>
    user.email ? 
          children
        : 
        <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          > </Redirect>
        
      }
    ></Route> 
        </div>
    );
};

export default PrivateRoute;