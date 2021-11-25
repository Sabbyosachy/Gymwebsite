import React from 'react';
import AllTrainers from '../AllTrainers/AllTrainers';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <AllTrainers/>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;