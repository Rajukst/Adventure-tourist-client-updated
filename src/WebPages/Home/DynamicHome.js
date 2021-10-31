import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DynamicHome = ({getBooking}) => {
  const {_id, addTour,addBudget, addSpot,addImg, myDesc}= getBooking
  return (
    <div className="">
    <Col>
      <Card className="mb-5">
        <Card.Img variant="top" src={addImg} />
        <Card.Body>
          <Card.Title>Tour Duration:{addTour}</Card.Title>
          <Card.Title>Tour Budget:{addBudget}</Card.Title>
          <Card.Title>Tourist Spot:{addSpot}</Card.Title>
          <Card.Text>
           {myDesc}
          </Card.Text>
         <Link to={`/booking/${_id}`}><Button>Book</Button></Link>
        </Card.Body>
      </Card>
    
    </Col>
 

    </div>
  );
};

export default DynamicHome;