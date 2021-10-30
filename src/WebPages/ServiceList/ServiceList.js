import React from 'react';
import { useParams } from 'react-router';
import homeData from "../Shared/Data.json"
import "./ServiceList.css"
const ServiceList = () => {
    const {listId}= useParams()
    console.log(listId)
    const getId= homeData.find(getSingleData=>getSingleData.id===parseInt(listId))
    const {img, description} = getId;
    return (
        <div>
            <h1>This is service List {listId} </h1>
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

export default ServiceList;