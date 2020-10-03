import React from 'react';
import fakeData from '../../fakeData/fakeData';

const Admin = () => {
    const handleAddEvents = () => {
        fetch('http://localhost:5000/addData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }

    return (
        <div>
            <button className="btn btn-primary"onClick={handleAddEvents}>add event</button>
        </div>
    );
};

export default Admin;