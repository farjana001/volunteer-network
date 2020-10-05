import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import plusIcon from '../../logos/plus 1.png';
import upload from '../../logos/cloud-upload-outline 1.png'

const Admin = () => {
    const { register, handleSubmit, errors } = useForm();
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
            <div className="container-fluid py-5 page-bg">
                <div className="d-flex align-items-center">
                    <img className='logo mx-5 pr-5' src={logo} alt="" />
                    <h5>Add Event</h5>
                </div>
                <div className="container row my-5">
                    <div className="col-md-3 sidebar mt-5">
                    <Link to="/admin" className='pl-5'><img style={{width:'10px'}} src={plusIcon} alt=""/>  Add Event</Link>
                    </div>
                    <div className="col-md-9 bg-white p-2">
                        <form className='d-flex admin-form' onSubmit={handleSubmit(onSubmit)}>
                            <div className='p-4'>
                                <input name="title" ref={register({ required: true })} placeholder='Enter Title' />
                                {errors.title && <span className='error'>Name is required</span>}

                                <input className="description-input" name="description" ref={register({ required: true })} placeholder='Enter Description' />
                                {errors.description && <span className='error'>Email is required</span>}
                            </div>

                            <div className='p-4'>
                                <input name="date" type="date" ref={register({ required: true })} />
                                {errors.date && <span className='error'>date is required</span>}

                                <input name="banner" type="link" ref={register({ required: true })} placeholder="upload image url" />
                                {errors.banner && <span className='error'>image url is required</span>}
                                <input className='add-event' type="submit" value="Add Event"/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;