import React, { useRef } from 'react';
import "./AddService.css"
const AddService = () => {
    const tour= useRef()
    const budget= useRef()
    const spot= useRef()
    const img= useRef()
    const description= useRef()

     const addUser=(e)=>{
         e.preventDefault()
         const addTour= tour.current.value;
         const addBudget= budget.current.value;
         const addSpot= spot.current.value;
         const addImg= img.current.value;
         const myDesc= description.current.value;

         const addedBooking= {addTour, addBudget, addSpot, addImg, myDesc};
         console.log(addedBooking);

         fetch('https://bloodcurdling-hollow-23734.herokuapp.com/home',{
             method:"POST",
             headers:{
                'content-type': 'application/json'
             },
             body: JSON.stringify(addedBooking)

         })
         .then(res=>res.json())
         .then(booking=>{
             if(booking.insertedId){
                 alert('Tourist Place Added Successfully')
                 e.target.reset()
             }
         })
     }
    return (
        <div className="booking">
            <h1>This is add Service</h1>
            <form onSubmit={addUser}>
                <input type="text" ref={tour} name="" id="" placeholder="Tour Duration" />
                <br /><br />
                <input type="text" ref={budget} name="" id=""  placeholder="Tour Budget" />
                <br /><br />
                <input type="text" name="" ref={spot} id="" placeholder="Tourist Spot" />
                <br /><br />
                <input type="text" name="" ref={img} id="" placeholder="Tourist Image or Url" />
                <br /><br />
                <input type="text" name="" ref={description} id="" placeholder="Tourist Description" />
                <br /><br />
                <input type="submit" value="Add Your Booking" />
            </form>
        </div>
    );
};

export default AddService;