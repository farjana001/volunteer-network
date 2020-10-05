import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import trash from '../../logos/trash-2 9.png';
import plusIcon from '../../logos/plus 1.png';

const EventList = () => {

    const history = useHistory();
    const { value3 } = useContext(UserContext);
    const [events, setEvents] = value3;

    useEffect(() => {
        fetch('https://nameless-thicket-49062.herokuapp.com/userEvent')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [])

    const deleteEvent = (id, event) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result > 0){
               history.push('/delete');
            }
        })
        console.log(id);
    }
    return (
        <>
            <div className="container-fluid my-5">
                <div className="d-flex align-items-center">
                    <Link to="/home"><img className='logo mx-5 pr-5' src={logo} alt="" /></Link>
                    <h4 className="ml-5">Volunteer register list</h4>
                </div>

                <div className="row my-5">
                    <div className="col-md-3 sidebar mt-5">
                        <Link to="/admin" className='pl-5'><img style={{width:'10px'}} src={plusIcon} alt=""/>  Add Event</Link>
                    </div>

                    {/* event list heading */}
                    <div className="col-md-9 page-bg p-5">
                        <div className="rounded bg-white p-3">
                            <ul className='list-heading mt-3'>
                                <li>Name</li>
                                <li className='mx-5 px-5'>Email ID</li>
                                <li className='ml-5 px-4'>Registration Date</li>
                                <li className='ml-5 px-4'>Volunteer List</li>
                                <li>Action</li>
                            </ul>
                        </div>

                        {/* event list body */}
                        <div className="list-body bg-white rounded pb-4">
                            {
                                events.map(evt =>
                                    <li key={evt._id}>
                                        <span>{evt.events.name}</span>
                                        <span>{evt.events.email}</span>
                                        <span>{evt.events.date}</span>
                                        <span>{evt.events.title}</span>
                                        <button 
                                        onClick={() => deleteEvent(evt._id)}
                                        className='deleteBtn'>
                                        <img className='bg-danger w-50' src={trash} alt="" />
                                        </button>

                                        {/* <button onClick={() => deleteEvent(props.ev._id)}>Cancel</button> */}
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