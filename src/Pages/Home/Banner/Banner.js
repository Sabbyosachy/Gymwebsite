import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <div className="title">
               <h1>Center Of Strength <br /> GYM</h1>
               <p className="subtitle">In Home, Outdoors & Online</p>
                <button className="btn__regular mx-auto">
                    Book A Trail Sesson
                </button>
            </div>
        </div>
    );
};

export default Banner;