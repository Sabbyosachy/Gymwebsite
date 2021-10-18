import React from 'react';
import './Footer.css';

//Footer create and sociloa icon add
const Footer = () => {
    return (
        <div className="footer">
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1 className="head">Center of Strength</h1>
                <div className="icons-container d-flex">
                  <div className="icon">
                  <i className="fab fa-facebook"></i>
                  </div>
                  <div className="icon">
                  <i className="fab fa-youtube"></i>
                  </div>
                  <div className="icon">
                  <i className="fab fa-twitter-square"></i>
                  </div>
                </div>
                <p className="mt-4 ">Here You can improve your muscle strength and boost your endurance..</p>
                <p className="mt-2">Copywrite © 2021 Center of Strength</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="menu-container">
              
                  <p className="menu">Home</p>
                  <p className="menu">Service</p>
                  <p className="menu"> About Us</p>
                  <p className="menu">Contact</p>
                  
              </div>
            </div>
            <div className="col-md-5">
              <div className="text-start ms-5 ps-5 iteams">
              <p><i className="fas fa-map-marker-alt"></i>  New York,US</p>
             <p> <i className="fas fa-envelope"></i> Center of Strength@example.com</p>
              <p><i className="fas fa-phone-square-alt"></i>  +55 324 908 76</p>
              <p><i className="fas fa-phone-square-alt"></i>  +01 456 789 10</p>
                         
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
    );
};

export default Footer;