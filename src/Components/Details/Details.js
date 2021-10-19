import React from 'react';
import { Col, Row } from 'react-bootstrap';


//picture and information set 

const Details = () => {
    return (
        <div>
             <div>
            <div>
            <Row>
            <Col xs={7} md={6}>
               <img className="pt-5" src="https://cdni.iconscout.com/illustration/premium/thumb/mental-exercise-3488549-2922403.png" alt/>
                </Col>
                <Col xs={7} md={5} className="pb-5 text-start me-5 mb-4">
                <h4 className="about-hader-text">Benefits of regular physical activity!!!</h4>
                <p>Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve, you have more energy to tackle daily chores.</p>
                <p>Winded by grocery shopping or household chores? Regular physical activity can improve your muscle strength and boost your endurance.</p>
                <button className="btn btn-warning rounded-pill px-5 fw-bold">See More</button>

           
                </Col>
            </Row>
            </div>
            <div className="p-5">
            <div className="row">
                <Col xs={7} md={5} className="pb-5 text-start ms-5 mb-4">
                <h4 className="about-hader-text">Learn About GYM!!!</h4>
                <p>A gymnasium, also known as a gym, is a covered location for athletics. The word is derived from the ancient Greek gymnasium.They are commonly found in athletic and fitness centres, and as activity and learning spaces in educational institutions. "Gym" is also slang for "fitness centre", which is often an area for indoor recreation. A gym may be open air as well. A gym is a place with a number of equipments and machines used by the people to do exercises.</p>
                <p>Gymnasia apparatuses such as barbells, jumping board, running path, tennis-balls, cricket field, and fencing area are used as exercises. In safe weather, outdoor locations are the most conducive to health.Gyms were popular in ancient Greece. Their curricula included self-defense, gymnastica medica, or physical therapy to help the sick and injured, and for physical fitness and sports, from boxing to dancing to skipping rope.</p>
                <button className="btn btn-warning rounded-pill px-5 fw-bold">See More</button>           
                </Col>
                <Col xs={4} md={6}>
               <img className="pt-5 mt-5" src="https://i.pinimg.com/originals/1e/4f/c0/1e4fc0e9ef304a2396e8c83dd83222f0.png" alt/>
                </Col>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Details;