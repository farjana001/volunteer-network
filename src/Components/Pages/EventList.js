import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import trash from '../../logos/trash-2 9.png';

const EventList = () => {

    const { value3 } = useContext(UserContext);
    const [events, setEvents] = value3;

    useEffect(() => {
        fetch('http://localhost:5000/userEvent')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [])

    const deleteEvent = id => {
        console.log(id);
    }
    return (
        <>
            <div className="container-fluid my-5">

                <div className="d-flex align-items-center">
                    <img className='logo mx-5 pr-5' src={logo} alt="" />
                    <h4 >Volunteer register list</h4>
                </div>

                <div className="row my-5">

                    <div className="col-md-3 sidebar">
                        <p className='pl-5'>Add Event</p>
                    </div>

                    {/* event list heading */}
                    <div className="col-md-9 bg-info p-2">
                        <div className="rounded bg-white p-3">
                            <ul className='list-heading mt-3'>
                                <li>Name</li>
                                <li className='mx-5 px-5'>Email ID</li>
                                <li className='ml-5 px-5'>Registration Date</li>
                                <li className='ml-5 px-5'>Volunteer List</li>
                                <li>Action</li>
                            </ul>
                        </div>

                        {/* event list body */}
                        <div className="list-body bg-white rounded pb-4">
                            {
                                events.map(evt =>
                                    <li>
                                        <span>{evt.events.name}</span>
                                        <span>{evt.events.email}</span>
                                        <span>{evt.events.date}</span>
                                        <span>{evt.events.title}</span>
                                        <button onClick={() => deleteEvent(`${evt._id}`)}
                                            className='deleteBtn'><img className='bg-danger w-50' src={trash} alt="" /></button>
                                    </li>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventList;