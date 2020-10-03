import React from 'react';
import logo from '../../logos/Group 1329.png';

const RegisterList = () => {
    return (
        <div>
            <div className="container-fluid my-5">
                <div className="d-flex align-items-center">
                    <img className='logo mx-5 pr-5' src={logo} alt=""/>
                    <h4 >Volunteer register list</h4>
                </div>
                <div className="row my-5">
                    <div className="col-md-3 sidebar">
                        <p className='pl-5'>Add Event</p>
                    </div>
                    <div className="col-md-9 bg-info p-2">
                        <div className="list-body rounded bg-white p-3">
                            <ul className='list-heading mt-3'>
                                <li>Name</li>
                                <li>Email ID</li>
                                <li>Registration Date</li>
                                <li>Volunteer List</li>
                                <li>Action</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterList;