import React, { useEffect, useState } from 'react';
import VehicleInfo from '../VehicleInfo/VehicleInfo';
import './Home.css'

const Home = () => {
    const [info,setInfo] = useState([]);

    useEffect(() =>{
        const url = "https://api.mocki.io/v1/560b1f2b";
        fetch(url)
        .then(res => res.json())
        .then(data => setInfo(data))
    },[])
    return (
        <div className="container">
                <div className="info-style">
                    { 
                        info.map(vh => <VehicleInfo key={vh.key} vehicle={vh}></VehicleInfo>)
                    }
                </div>
        </div>
  );
};

export default Home;