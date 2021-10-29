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
      <h3>Sundarban!! The Largest Mangrove Forest In the World</h3>
      <p>Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.</p>
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
      <p>Nilgiri is a collection of multiple variable sizes hill area in Bandarban. Bandarban itself is a hill district in Bangladesh.</p>
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
      <p>Cox's Bazar Beach, located at Cox's Bazar, Bangladesh, is the longest natural sea beach in the world and 3rd longest beach after Praia do Cassino of Brazil.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Carosul;