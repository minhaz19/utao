import React from 'react';
import { Link } from 'react-router-dom';
// import { UserContext } from '../../App';
import './Header.css';
const Header = () => {
    // const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    // let login;
    // if(loggedInUser){
    //     login = <Link className="link style search-btn" to='/login'>{loggedInUser.name}</Link>
    // }
    // else{
    //     login = <Link className="link style search-btn" to='/login'>Login</Link>
    // }
    return (
        
        <div className="link-container">
            <li><Link className="link name-link" to=''>Speed Riders</Link></li>
            <li><Link className="link style search-btn" to='/login'>Login</Link></li>
            <li><Link className="link" to=''>Contact</Link></li>
            <li><Link className="link" to=''>Destination</Link></li>
            <li><Link className="link" to=''>Home</Link></li>
            
        </div>
        
    );
};

export default Header;