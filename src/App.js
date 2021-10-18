
import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Aboutus from './Components/Aboutus/Aboutus';
import Service from './Components/Service/Service';
import NotFound from './Components/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Context/AuthProvider';

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
          <Route exact path="/service">
            <Service></Service>
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
