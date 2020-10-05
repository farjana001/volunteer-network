import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../logos/Group 1329.png';

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const addNewEvent = { data }

        fetch('http://localhost:5000/addedEvents', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addNewEvent)
        })
            .then(res => res.json())
            .then(data => {
               alert('Event added successfully')
            })
            
    };

    return (
        <>
            <div className="container-fluid my-5 page-bg">
                <div className="d-flex align-items-center">
                    <img className='logo mx-5 pr-5' src={logo} alt="" />
                    <h4 >Add Event</h4>
                </div>
                <div className="container row my-5">
                    <div className="col-md-3 sidebar">
                        <p className='pl-5'>Add Event</p>
                    </div>
                    <div className="col-md-9 bg-white p-2">
                        <form className='d-flex admin-form' onSubmit={handleSubmit(onSubmit)}>
                            <div className='p-4'>
                                <input name="title" ref={register({ required: true })} placeholder='Enter Title' />
                                {errors.name && <span className='error'>Name is required</span>}

                                <input className="description-input" name="description" ref={register({ required: true })} placeholder='Enter Description' />
                                {errors.description && <span className='error'>Email is required</span>}
                            </div>

                            <div className='p-4'>
                                <input name="date" type="date" ref={register({ required: true })} />
                                {errors.date && <span className='error'>Address is required</span>}

                                <input name="banner" type="link" ref={register({ required: true })} placeholder='Upload image' />
                                {errors.banner && <span className='error'>Phone Number is required</span>}
                                <input type="submit" value="Add Event"/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;