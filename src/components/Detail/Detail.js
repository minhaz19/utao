import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './Detail.css';
import image from '../../picture/Map.png'

const Detail = () => {
    const {info} = useParams();
    const [vehicleDetail , setVehicleDetail] = useState([]);

    useEffect(() =>{
        fetch("https://api.mocki.io/v1/560b1f2b")
        .then(res => res.json())
        .then(data => setVehicleDetail(data))
    },[])

    const vehicleInfo = vehicleDetail.find(vh => vh.id == info)
    // console.log(vehicleInfo.id)
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
                <input type="text"/>
                <br/>
                <label for="journey-date">Journey Date:</label>
                <br/>
                <input type="date" id="journey-date" name="journey-date"></input>
                <br/>
                <Link onClick={() =>handleSearch(info)} to={`/detail/${info}`}><button className="search-btn">Search</button></Link>
                
            </div>
            <img className="map-container" src={image} alt=""/>
        </div>
    );
};

export default Detail;