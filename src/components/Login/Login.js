import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    let history = useHistory();
    let location = useLocation();

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
    });
   


    const handleBlur =(e) =>{
        let isFieldValid =true;
        if(e.target.name === 'name'){
            isFieldValid = e.target.value;
        }
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const passwordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = passwordValid && passwordHasNumber;
            
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        if(newUser && user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            const newUserInfo = {...user};
            newUserInfo.error = '';
            setUser(newUserInfo);
            updateUserName(user.name)
            const {displayName, email} = res.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch((error) => {
            const newUserInfo = {...user};
            newUserInfo.error = error.message;
            setUser(newUserInfo);  
        });
    }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                setUser(newUserInfo);
                const {displayName, email} = res.user;
                const signedInUser = {name: displayName, email} 
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                const newUserInfo = {...user};
                        newUserInfo.error = error.message;
                        setUser(newUserInfo);  
            });
        }
    }
    const updateUserName = (name) =>{
        const user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name
        }).then(function() {
            console.log("update Successfuly")
        })
        .catch(function(error) {
        console.log(error);
        });
    }

    return (
        <div className ="info-style">
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    { newUser &&<h5>Name</h5>}
                    { newUser && <input type="text" onBlur={handleBlur} name="name" placeholder="enter your name" required/>}
                    <br/>
                    <h5>Email</h5>
                    <input type="text" onBlur={handleBlur} name="email" placeholder="Enter your email" required/>
                    <br/>
                    <h5>Password</h5> 
                    <input type="password" onBlur={handleBlur} name="password" id="1" placeholder="Enter your password" required/>
                    <br/>
                    {/* <h5>Confirm Password</h5>
                    <input type="password" onBlur={handleBlur} name="confirm-password" id="2" placeholder="Confirm your password"/>
                    <br/> */}
                    <input type="submit" className="search-btn" value={newUser ? 'Create new account' : 'Login'}/>
                    <br/>
                    <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} id="" />
                    <label htmlFor="newUser">already have an account</label>
                </form>
                <p style={{color:"red"}}>{user.error}</p>
                <p>or</p>
                <hr/>
                <button onClick={handleGoogleSignIn} className="search-btn">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;