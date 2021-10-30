import React from 'react';
import { useParams } from 'react-router';
import tourisPlace from "../Shared/touristData.json"
const TourPlaceList = () => {
    const {listId}= useParams()
    const listItem= tourisPlace.find(getTourist=> getTourist.id===parseInt(listId) )
    const {img, description}= listItem;
    return (
        <div>
           <h1>This is tour place List</h1> 
           <div className="mb-5 pb-5 service-list">
              <div className="w-100">
                <div className="p-5">
                    <div className="p-1">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="p-4-w-75">
                        <h4>{description}</h4>
                    </div>
                </div>
              </div>
        </div>
        </div>
    );
};

export default TourPlaceList;