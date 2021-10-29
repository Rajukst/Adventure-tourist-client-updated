import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import DisplayGuide from './DisplayGuide';

const TravelGuide = () => {
    const[guide, setGuide]= useState([])
    useEffect(()=>{
        fetch('./guideData.json')
        .then(res=>res.json())
        .then(data=>setGuide(data))
    },[])
    return (
        <div>
            <h1>This is Travel Guide Page</h1>
            <Row xs={1} md={2} xl={3} className="g-4 m-5">
            {
                guide.map(getGuideList=><DisplayGuide
                key={getGuideList.id}
                guideList={getGuideList}
                ></DisplayGuide>)
            }
        </Row>
        </div>
    );
};

export default TravelGuide;