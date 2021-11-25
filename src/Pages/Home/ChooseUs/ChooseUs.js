import React from 'react';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <div  className=" choose__us mt-2 grid md:grid-cols-2 sm:grid-cols-1 py-5 px-5 mb-5 mb-5 pb-5" id="about-us">
            <div className="px-5">
                <img id="chooseus" className="p-5" src="https://images.unsplash.com/photo-1591089627083-d9d049d833f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym9keWJ1aWxkZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
            </div>
            <div className="choose__us__container">
                <div>
                    <span  className="text-left">Why Choose Us</span>
                    <h1>We Always Provide The Best <br /> Services</h1>
                    <h5>To be a renowned organization at the leading edge of Fitness and gym <br /> providing quality healthcare.</h5>
                </div>
                <div className="grid gap-8 md:grid-cols-2 sm:grid-cols-1 ml-8">
                    <div>
                        <h2>Best Trainers</h2>
                        <p>Trainers and instructors lead, instruct, and motivate individuals or groups in exercise activities, including cardiovascular workouts (for the heart and blood circulation), strength training, and stretching.</p>
                    </div>
                    <div>
                        <h2>Best fitness diet plan</h2>
                        <p>In order to maximize your results from the gym, you must focus on your diet, as eating the wrong foods can be detrimental to your bodybuilding goals.</p>
                    </div>
                    <div>
                        <h2>Services</h2>
                        <p>Providing your members with high-quality and consistent service.offer a variety of additional programs and services, such as nutrition advice, weight loss challenges, lifestyle seminars.</p>
                    </div>
                    <div>
                        <h2>Gyms Offers</h2>
                        <p>In general, most gyms have cardio equipment, free weights, resistance training machines, stretching areas, and locker rooms or changing rooms. Many offer group exercise classes and personal training.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;