import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dynamic.css'

const DynamicTourist = ({getTourist}) => {
    const {id,price,duration,img,spot,description}= getTourist;
    return (
        <div>
      <Col>
                <Card className="use-card mb-5">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> <span>Tour Cost:</span> {price}</Card.Title>
          <Card.Title> <span>Tour Spot:</span> {spot}</Card.Title>
          <Card.Title><span>Tour Duration:</span> {duration}</Card.Title>
          <Card.Text><span className="description" >Short Description:</span> {description}</Card.Text>
         <Link to={`/TourList/${id}`}> <Button variant="outline-primary">Booking {spot} Tour</Button></Link>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default DynamicTourist;