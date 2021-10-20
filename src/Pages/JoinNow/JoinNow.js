import React from 'react';
import './JoinNow.css';

const JoinNow = () => {
    return (
        <div className="appointment__container pt-5 pb-10">
            {/* appointment form */}
            <div className="container">
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.."/>

                <label htmlFor="number">Mobile No.</label>
                <input type="text" id="number" name="number" placeholder="Your Mobile No.."/>
                
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="text" placeholder="Your Address.."/>


                <input type="submit" value="Submit"/>
            </form>
            </div>
        </div>
    );
};

export default JoinNow;