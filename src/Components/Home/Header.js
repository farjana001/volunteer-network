import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';

const Header = () => {
    const {value2} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;
    return (
        <div className='container'>
            <div className="row d-flex align-items-center pt-3">
                <div className="col-md-4 py-3">
                    <Link to='/home'><img className='logo' src={logo} alt="" /></Link>
                </div>
                <div className="col-md-8 pt-3 d-flex justify-content-end">
                    <NavLink className='nav-link' to='/home'>Home</NavLink>
                    <NavLink className='nav-link text-muted' to='/donation'>Donation</NavLink>
                    <NavLink className='nav-link text-muted' to='/events'>Events</NavLink>
                    <NavLink className='nav-link text-muted' to='/blog'>Blog</NavLink>
                    {
                        loggedInUser && <h6 className='px-3 mt-2'>{loggedInUser.name}</h6>
                    }
                    <NavLink className='mr-2' to='/register'><button className='register btn btn-primary'>Register</button></NavLink>
                    <NavLink className=' ' to='/admin'><button className='admin btn btn-dark'>Admin</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;