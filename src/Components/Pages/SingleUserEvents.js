import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Home/Header';

const SingleUserEvents = () => {
    const [events, setEvents] = useState([]);

    const { value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;

    useEffect(() => {
        fetch('http://localhost:5000/userEvent?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [])
    console.log(events);
    return (
        <div className='container page-bg py-5'>
            <Header />
            <div className="row my-5 text-white d-flex justify-content-center p-3">
                <div className="col-md-8">
                    <div className="single-event rounded bg-danger">
                        <h6>{events.length}</h6>
                        {
                            events.map(evt => <li>{evt.events.title} name: {evt.events.name} Date: {(new Date(evt.events.date).toDateString('dd/MM/yyyy'))}</li>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUserEvents;