import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';

const Register = () => {
    // const {value2} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        
        const volunteerDetails = { ...loggedInUser, events:data, orderTime: new Date()}

        fetch('http://localhost:5000/addEvents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                console.log(data);
                alert('registered successfully')
            }
        })
    }
    return (
        <div className="container page-bg p-5">
            <div className="text-center">
                <img className='logo my-3 ' src={logo} alt="" />
            </div>
            <div className="volunteer-form border bg-white my-5 mx-auto p-5">
                <h3 className='mb-5'>Register as a Volunteer</h3>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name='name' defaultValue={loggedInUser.name} className='reg-input' type="text" placeholder='Full Name'/>
                        <input name='email' defaultValue={loggedInUser.email} className='reg-input' type="text" placeholder='Username or Email'/>
                        <input name='date' className='reg-input' type="date" placeholder='Date'/>
                        <input name='description' className='reg-input' type="text" placeholder='Description'/>
                        <input name='title' className='reg-input' type="text" placeholder='Volunteer title'/>
                        {/* <div className="mt-2">
                        <Link className='reg-btn'></Link>
                        </div> */}
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;