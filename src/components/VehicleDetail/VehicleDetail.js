import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './VehicleDetail.css';
import people from "../../picture/peopleicon.png";
import image from '../../picture/Map.png'

const VehicleDetail = () => {
    const {id} = useParams();
    const [vehicleDetail , setVehicleDetail] = useState([]);

    useEffect(() =>{
        fetch("https://api.mocki.io/v1/560b1f2b")
        .then(res => res.json())
        .then(data => {
            const vehicleId = data.find(vh => vh.id == id)
            setVehicleDetail(vehicleId)
        })
    },[id])
        
    const {vehicle,Image,passenger,money} = vehicleDetail;
    
    return (
        <div className="info-style">
            <div className="detail-container">
                <div className = "container-header">
                    <h3>Mirpur 1</h3>
                    <h3>Sylhet</h3>
                </div>
                <div className="vehicle-details">
                    <img className="vh vehicle-img" src={Image} alt=""/>
                    <h5 className="vh">{vehicle}</h5>
                    <img className="vehicle-img" src={people} alt=""/>
                    <h5 className="vh ps">{passenger}</h5>
                    <h5>{money}</h5>
                </div>
                <div className="vehicle-details">
                    <img className="vh vehicle-img" src={Image} alt=""/>
                    <h5 className="vh">{vehicle}</h5>
                    <img className="vehicle-img" src={people} alt=""/>
                    <h5 className="vh ps">{passenger}</h5>
                    <h5>{money}</h5>
                </div>
                <div className="vehicle-details">
                    <img className="vh vehicle-img" src={Image} alt=""/>
                    <h5 className="vh">{vehicle}</h5>
                    <img className="vehicle-img" src={people} alt=""/>
                    <h5 className="vh ps">{passenger}</h5>
                    <h5>{money}</h5>
                </div>
            </div>
            <img className="map-container" src={image} alt=""/>
            
        </div>
    );
};

export default VehicleDetail;<h1>This Vehicle Detail</h1>