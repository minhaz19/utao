import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './VehicleInfo.css';

const VehicleInfo = (props) => {
    const {vehicle,Image,id} = props.vehicle;
    let history = useHistory();

    const handleClick = (id) =>{
        const url =`/destination/${id}`;
        history.push(url);
    }
    return (
        <div className="vehicle-container">
            <Link onClick={() => handleClick(id)} to={`/destination/${id}`}><img src={Image} alt=""/></Link>
            <h1><Link onClick={() => handleClick(id)} className="text" to={`/destination/${id}`}>{vehicle}</Link></h1>
        </div>
    );
};

export default VehicleInfo;