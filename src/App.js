
import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Aboutus from './Components/Aboutus/Aboutus';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Details from './Components/Details/Details';
import Service from './Components/Service/Service';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

//All route set 

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
       <Navbar></Navbar>
       <Switch>
         <Route exact path="/">
         <Home></Home>
         </Route>
          <Route exact path="/aboutus">
          <Aboutus></Aboutus>
          </Route>
          <PrivateRoute exact path="/service/:courseId">
          <Service></Service>
          </PrivateRoute>
          <Route exact path="/service">
          <Service></Service>
          </Route>
          <Route path="/details">
            <Details></Details>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
