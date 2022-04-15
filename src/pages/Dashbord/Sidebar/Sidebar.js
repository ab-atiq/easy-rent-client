import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div className='main-side-nav'>
            <Link className='dashbord-link' to='/home'>Home</Link>
            </div>
        </div>
    )
}

export default Sidebar