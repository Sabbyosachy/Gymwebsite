import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Aboutus.css';

//Picture and information set 

const Aboutus = () => {
    return (
        <div className="p-3">
            <div>
            <Row>
            <Col xs={8} md={7}>
               <img className="w-75 mt-5 pt-5" src="https://physiopal.com.au/wp-content/uploads/2021/08/undraw_Stability_ball_b4ia.svg"/>
                </Col>
                <Col xs={7} md={4} className="text-start me-5">
                <h4 className="about-hader-text">Body Light!!!</h4>
                <p>Yoga is a mind and body practice. Various styles of yoga combine physical postures, breathing techniques, and meditation or relaxation. Yoga is an ancient practice that may have originated in India. It involves movement, meditation, and breathing techniques to promote mental and physical well-being</p>
                <button className="btn btn-warning rounded-pill px-5 fw-bold">See More</button>

           
                </Col>
            </Row>
            </div>
          
          {/* Pictue and information set  */}
          
          <div className="pt-5 mt-5">
            <h3 className="aboutmore pt-5 mt-5">About More</h3>
            <div className="aboutmore-text">
            <Row>
                <Col xs={7} md={6} className="text-start ms-1">
                <h3 className=" mt-5 pb-3 handline">Why is gym so important?</h3>
                  <p className="textline">Regular exercise and physical activity promotes strong muscles and bones. It improves respiratory, cardiovascular health, and overall health. Staying active can also help you maintain a healthy weight, reduce your risk for type 2 diabetes, heart disease, and reduce your risk for some cancers.</p>
                  <p className="textline">Going to the gym every day can help improve your cardiovascular system, strengthen your muscles, help you maintain your weight, boost your mental health and decrease the odds that you'll develop other health conditions. Exercising daily strengthens your heart and allows it to pump more efficiently with less strain.</p>
                </Col>
                <Col xs={8} md={5} className="pb-5">
               <img className="w-75" src="http://royaltech.com.eg/wp-content/uploads/2020/09/undraw_indoor_bike_pwa4.png"/>
                </Col>
            </Row>
            </div>
          </div>
        </div>
    );
};

export default Aboutus;