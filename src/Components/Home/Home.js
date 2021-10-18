
import React, { useEffect, useState } from 'react';
import './Home.css';
import { Carousel, Col, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import Course from '../Course/Course';


//data fetch and state create
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('Homepagedata.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);
    
    //card create dynamically value set.
   
    return (
        <div>
        <div>
        
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://adictosalgym.com/wp-content/uploads/2021/07/caucasian-young-sporty-couple-workout-in-gym-together-1000x667.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Physical Activity</h3>
      <p>Regular physical activity can improve your muscle strength and boost your endurance. Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://adictosalgym.com/wp-content/uploads/2021/07/stronger-young-muscular-caucasian-athlete-practicing-lunges-in-gym-with-barbell-male-model-doing-strength-exercises-training-his-lower-body-wellness-healthy-lifestyle-bodybuilding-concept-1000x667.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Dieting</h3>
      <p>While dieting, a reduced calorie intake will lower your metabolic rate, which can delay weight loss. On the contrary, regular exercise has been shown to increase your metabolic rate, which can burn more calories to help you lose weight.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://vistapointe.net/images/gym-wallpaper-5.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Exercise</h3>
      <p>Exercise can be a real energy booster for many people, including those with various medical conditions exercise can significantly increase energy levels for people with chronic fatigue syndrome (CFS) and other serious illnesses.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
             <h2 className=" pt-5 services-title fw-bold">Learn New</h2>
             <div>
            <div>
            <Row>
            <Col>
               <img className="pt-5" src="https://cdni.iconscout.com/illustration/premium/thumb/mental-exercise-3488549-2922403.png" alt/>
                </Col>
                <Col className="pb-5 text-start me-5 mb-4">
                <h4 className="about-hader-text">Benefits of regular physical activity!!!</h4>
                <p>Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And when your heart and lung health improve, you have more energy to tackle daily chores.</p>
                <p>Winded by grocery shopping or household chores? Regular physical activity can improve your muscle strength and boost your endurance.</p>
                <button className="btn btn-warning rounded-pill px-5 fw-bold">See More</button>

           
                </Col>
            </Row>
            </div>
        </div>
            
        </div>
    );
};

export default Home;