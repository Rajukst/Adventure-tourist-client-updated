import React from 'react';
import { Carousel } from 'react-bootstrap';
import sundarban from "../../../Images/sundarban.jpg"
import bandarban from "../../../Images/bandarban.jpg"
import coxesbazar from "../../../Images/coxesBazar.jpg"
const Carosul = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sundarban}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Sundarban Mountain Forest</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bandarban}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Bandarban !! The Nature Beauty of Bangladesh</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={coxesbazar}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Coxes-bazar The Lagest Sea Beach In the World</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Carosul;