import React from 'react';
import { Badge, Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DynamicHome.css'

const DynamicHome = ({getData}) => {
  const { id, price, duration, img, spot, description }= getData;
    return (

        <div>
      <Col className="focus-hover mb-5">
      <Card className="use-card mb-5">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Tour Duration:{duration}</Card.Title>
          <Card.Title>Tour Cost: {price}</Card.Title>
          <Card.Title>Spots:{spot}</Card.Title>
          <Card.Text className="description-text">{description}</Card.Text>
          <Link to={`/ServiceList/${id}`}><Button variant="outline-info">Booking Your Tour Place</Button></Link>
        </Card.Body>
        
      </Card>
      
    </Col>
        </div>
    );
};

export default DynamicHome;