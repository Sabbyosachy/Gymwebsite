import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//data set dynimaccly 

const Course = (props) => {
  const{id,coursetitle,For,image,fee,description}=props.course;
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
                        <p>Gender : {For}</p>
                        <h4>Fee:{fee}</h4>
                        <Link to={`/service/${id}`}>
                        <button className="btn btn-warning rounded-pill px-5 fw-bold"><i class="fas fa-user"></i> Join {coursetitle.toLowerCase()}</button>
                        </Link>
                    </Card.Body>                
                
                </Card>
            </CardGroup>
           </div>
    
        </div>
    );
};

export default Course;