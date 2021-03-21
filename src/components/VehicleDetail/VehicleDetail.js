import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './VehicleDetail.css';
import people from "../../picture/peopleicon.png";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '500px',
    height: '500px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

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
            <LoadScript
                googleMapsApiKey="AIzaSyBhO4gpgSmI0VXnEMfyYLK9A2lqc8N7CIA"
                >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                </GoogleMap>
            </LoadScript> 
        </div>
    );
};

export default VehicleDetail;