import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Carosul from '../Header/Carosul/Carosul';
import DynamicHome from './DynamicHome';

const Home = () => {
const [user, setUser]= useState([])
useEffect(()=>{
    fetch('https://bloodcurdling-hollow-23734.herokuapp.com/home')
    .then(res=>res.json())
    .then(data=>setUser(data))
        },[])
    return (
        <div>
            <Carosul></Carosul>
            {user.length===0 ? <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>:

            <Row xs={1} md={2}xl={3} className="g-4 mb-5 m-2">
            {
                user.map(singleUser=> <DynamicHome
                key={singleUser._id}
                getBooking= {singleUser}
                ></DynamicHome> )
            }
            </Row>

        }
            
        </div>
    );
};

export default Home;