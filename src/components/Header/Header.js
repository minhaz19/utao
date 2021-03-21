import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';



const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const name = loggedInUser.name ;
   
    return (
        
        <div className="link-container">
            <li><Link className="link name-link" to='/home'>Speed Riders</Link></li>
            <li><Link className="link login-btn" to='/login'>{name? name : 'Login'}</Link></li>
            <li><Link className="link" to='/home'>Contact</Link></li>
            <li><Link className="link" to='/home'>Destination</Link></li>
            <li><Link className="link" to='/home'>Home</Link></li>
            
        </div>
        
    );
};

export default Header;