import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './Detail.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '500px',
    height: '500px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

const Detail = () => {
    const {info} = useParams();
    const [vehicleDetail , setVehicleDetail] = useState([]);

    useEffect(() =>{
        fetch("https://api.mocki.io/v1/560b1f2b")
        .then(res => res.json())
        .then(data => setVehicleDetail(data))
    },[])

    let history = useHistory();
    
    const handleSearch = (id) =>{
        console.log(id)
        const url =`/detail/${id}`;
        history.push(url);
    }

    return (
        <div className="info-style">
            <div className="detail-container">
                <p>Pick From</p>
                <input type="text"/>
                <br/>
                <p>Pick To</p>
                <input  type="text"/>
                <br/>
                <label for="journey-date">Journey Date:</label>
                <br/>
                <input type="date" id="journey-date" name="journey-date"></input>
                <br/>
                <Link onClick={() =>handleSearch(info)} to={`/detail/${info}`}><button className="search-btn">Search</button></Link>
                
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
export default Detail;
