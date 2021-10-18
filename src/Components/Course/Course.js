import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Course = (props) => {
  const{coursetitle,image,duration,fee,description}=props.course;
    return (
        <div>
           <div>
           <CardGroup className="card-group">
                <Card className="card">
                    <Card.Img className="img-size" variant="top" src={image} />
                    <Card.Body className="body-color">
                        <h3 className="fw-bold">{coursetitle}</h3>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <h4>Fee:{fee}</h4>
                        <button className="btn btn-warning rounded-pill px-5 fw-bold">Learn More</button>
                    </Card.Body>
              
                        
                
                
                </Card>
            </CardGroup>
           </div>
    
        </div>
    );
};

export default Course;