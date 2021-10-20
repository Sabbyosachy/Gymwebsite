import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Service.css";

const Service = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState([]);
    const [select, setSelect] = useState({});
   
    // load service data
    
    useEffect(()=>{
        fetch('/Fakedata.json')
        .then(res=> res.json())
        .then(data=>setService(data));
    },[])
    // find service via id
    useEffect(()=>{
        setSelect(service.find(item => item.id === parseInt(serviceId)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[service]);
 
    //Display select service info
   
    return (
        <div className="service__container text-center">
            <div className="service__img">
                <img src={select?.img} alt="" />
            </div>
            <h1>{select?.name}</h1>
            <p>{select?.description}</p>
            <h6>{select?.For}</h6>
            <h6>{select?.fee}</h6>
        </div>
    );
};

export default Service;