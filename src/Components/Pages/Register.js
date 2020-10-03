import { TextField } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';

const Register = () => {
    return (
        <div className="container page-bg p-5">
            <div className="text-center">
                <img className='logo my-3 ' src={logo} alt="" />
            </div>
            <div className="volunteer-form border bg-white my-5 mx-auto p-5">
                <h3 className='mb-5'>Register as a Volunteer</h3>
                <div>
                    <form className=''>
                        <input className='reg-input' type="text" placeholder='Full Name'/>
                        <input className='reg-input' type="text" placeholder='Username or Email'/>
                        <input className='reg-input' type="text" placeholder='Date'/>
                        <input className='reg-input' type="text" placeholder='Description'/>
                        <input className='reg-input' type="text" placeholder='Volunteer title'/>
                        <div className="mt-2">
                        <Link className='reg-btn'>Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;