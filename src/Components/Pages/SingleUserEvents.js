import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import SingleUserEventDetail from './SingleUserEventDetail';



const SingleUserEvents = () => {

    // getting loggedInUser
    const { value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;
    const userEmail = { ...loggedInUser }

    // loading all events data
    const [userEvents, setUserEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/userEvent')
            .then(res => res.json())
            .then(data => setUserEvents(data));
    }, [])


    // filtering loggedInUsers details
    const selectedEvents = userEvents.filter(evt => evt.events.email === userEmail.email);

    const handleCancelBtn = id => {
        const selectedEvent = userEvents.filter(evt => evt._id !== id);
        setUserEvents(selectedEvent);
    }

    return (
        <div className='container page-bg'>
            <div className="row d-flex">
                <div className="col row">
                    {
                        selectedEvents.map(evt => <SingleUserEventDetail singleUserEvents={evt} handleCancelBtn={handleCancelBtn}></SingleUserEventDetail>)
                    }
                </div>
            </div>

        </div>
    );
};

export default SingleUserEvents;