import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Carosul from '../Header/Carosul/Carosul';
import DynamicHome from './DynamicHome';

const Home = () => {
const [user, setUser]= useState([])
useEffect(()=>{
    fetch('./Data.json')
    .then(res=>res.json())
    .then(data=>setUser(data))
        },[])
    return (
        <div>
            
            <Carosul></Carosul>
            <h1>This is home Route</h1>
          
            <Row xs={1} md={2} xl={4} className="g-4 m-5">
            {
                user.map(singleData=><DynamicHome
                key={singleData.id}
                getData={singleData}
                ></DynamicHome>)
            }
            </Row>
        </div>
    );
};

export default Home;