import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import googleIcon from '../../logos/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Login = () => {
    const { value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;
    // initializing firebase app
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const {displayName, email} = result.user;
            const signedInUser = {name:displayName, email};
            setLoggedInUser(signedInUser);
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
    }
    return (
        <div className="container text-center page-bg p-5">
            <img className='logo my-3 ' src={logo} alt="" />
            <div className="volunteer-form border bg-white my-5 mx-auto d-flex justify-content-center align-items-center">
                <div>
                    <h3>Login With</h3>
                    <p onClick={handleGoogleSignIn} className='google-sign-in mt-5'><img src={googleIcon} alt="" /><span className='google-text'>Continue with Google</span></p>
                    <p>Don't have an account? <Link>Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;