import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const DisplayGuide = ({guideList}) => {
    const {Name, expert, img}= guideList;
    return (
        <div>
    <Col>
      <Card className="use-card mb-5">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{Name}</Card.Title>
          <Card.Title>{expert}</Card.Title>
          <Button variant="outline-info">Hire {Name} </Button>
        </Card.Body>
        
      </Card>
    </Col>
        </div>
    );
};

export default DisplayGuide;