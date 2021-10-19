
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Service.css';

const Service = () => {
    const{courseId}=useParams();
    const [service, setService] = useState([]);
    const [filtered, setFiltered] = useState({});
    // load service data
    useEffect(()=>{
        fetch('/Fakedata.json')
        .then(res=> res.json())
        .then(data=>setService(data));
    },[])
    useEffect(()=>{
      setFiltered(service.find(item => item.id === parseInt(courseId)))
  },[service]);

    return (
        <div>
          <h1>{courseId}</h1>
          <h1>{filtered?.name}</h1>
            <p>{filtered?.description}</p> 
         
        </div>
    );
};

export default Service;