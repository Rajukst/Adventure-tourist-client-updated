import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import "./Booking.css"
const Booking = () => {
    const [booking, setBooking]= useState({})
    const {serviceId}= useParams()
    useEffect(()=>{
        const url= `http://localhost:5000/myBooking/${serviceId}`
       fetch(url)
       .then(res=>res.json())
       .then(data=>setBooking(data))
    },[])
    

  

    return (
        <div className="my-div">
            
            <img src={booking.addImg} alt="" />
            <h1> Tour Duration: {booking.addTour}</h1>
            <h4>Tour Description: {booking.myDesc} </h4>
            
            
            <form>
                <input type="text"  name="" id="" placeholder="name" />
                <br /><br />
                <input type="text" name="" id=""  placeholder="Phone Number" />
                <br /><br />
                <input type="date" name="" id="" />
                <br /><br />
                <input type="submit" value="Confirm Booking" />
            </form>
            
        </div>
    );
};

export default Booking;