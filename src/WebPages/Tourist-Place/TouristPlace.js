import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DynamicTourist from './DynamicTourist';

const TouristPlace = () => {
    const [tour, setTour]= useState([])
    useEffect(()=>{
        fetch('./touristData.json')
        .then(res=>res.json())
        .then(data=>setTour(data))

    },[])
    return (
        <div>
            <h1 className="text-center text-primary">We are provide Bangladeshi Best Tourist Place with Proper Guide. Checkout Now !!! </h1>
            <Row xs={1} md={2} xl={3} className="g-4 m-5">
                {
                    tour.map(getTourData=> <DynamicTourist
                    key={getTourData.id}
                    getTourist={getTourData}
                    ></DynamicTourist> )
                }
            </Row>
        </div>
    );
};

export default TouristPlace;