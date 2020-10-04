import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Home/Header';
import SingleUserEventDetail from '../SingleUserEventDetail';


const SingleUserEvents = () => {


    const { value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;
    const userEmail = { ...loggedInUser }
    // console.log('loggedInUser', userEmail.email);

    const [userEvents, setUserEvents] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/userEvent')
            .then(res => res.json())
            .then(data => setUserEvents(data));
    }, [])
    const selectedEvents = userEvents.filter(evt => evt.events.email === userEmail.email);
    // console.log(selectedEvents);
    return (
        <div className='container page-bg'>
            <Header />
            <div className="row d-flex">
                <div className="col row">
                    {
                        selectedEvents.map(evt => <SingleUserEventDetail singleUserEvents={evt}></SingleUserEventDetail>)
                    }
                </div>
            </div>

        </div>
    );
};

export default SingleUserEvents;