import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';

const Register = () => {
    const history = useHistory();
    const { cardTitle } = useParams();
    console.log(cardTitle);
    const { value1 } = useContext(UserContext);
    const [data, setData] = value1;
    
    const { value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const volunteerDetails = { ...loggedInUser, events: data, orderTime: new Date() }
        console.log(volunteerDetails.events)
        
        fetch('http://localhost:5000/addEvents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    alert('registered successfully')
                }
            })

            history.push('/userEvents')
    };

    return (
        <div className="container page-bg p-5">
            <div className="text-center">
                <img className='logo my-3 ' src={logo} alt="" />
            </div>
            <div className="volunteer-form border bg-white my-5 mx-auto p-5">
                <h3 className='mb-5'>Register as a Volunteer</h3>
                <div>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <input className='reg-input' name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder='Full Name' /> <br/>
                        {errors.name && <span className='error'>Name is required</span>}


                        <input className='reg-input' name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder='email' /> <br/>
                        {errors.email && <span className='error'>Email is required</span>}


                        <input className='reg-input' name="date" type="date" ref={register({ required: true })} placeholder='Select Date' /> <br/>
                        {errors.date && <span className='error'>Date is required</span>}


                        <input className='reg-input' name="description" ref={register({ required: true })} placeholder='Description' /> <br/>
                        {errors.description && <span className='error'>This field is required</span>}

                        <input className='reg-input' name="title" defaultValue={cardTitle} ref={register({ required: true })} placeholder='volunteer title' />
                        {/* {errors.phone && <span className='error'>This field is required</span>} */}


                        <input type="submit" />
                        <Link to='/home'>Go to Home</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;