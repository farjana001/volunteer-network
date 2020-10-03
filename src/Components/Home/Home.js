import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import RegisterList from '../Pages/RegisterList';
import SingleUserEvents from '../Pages/SingleUserEvents';
import Header from './Header';
import HomeCard from './HomeCard';

const Home = () => {
    const {value1} = useContext(UserContext);
    const [data, setData] = value1;
    console.log(data);
    return (
        <div className="header-bg">
            <Header />
            <div className="container text-center mt-5 pt-5 ">
            <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
            <div className="search my-4">
                <form action="form-control">
                    <input className='input ml-4' type="text" placeholder="Search..." />
                    <button className="search-button rounded-right">Search</button>
                </form>
            </div>
            <div className="row d-flex">
                <div className="col row mt-4">
                    {
                        data.map(dt => <HomeCard key={dt.id} data={dt} />)
                    }
                </div>
            </div>
            </div>
            <Login />
            <Register />
            <SingleUserEvents />
            <RegisterList />
        </div>
    );
};

export default Home;