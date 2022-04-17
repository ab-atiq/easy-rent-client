import React from 'react'
import './Sidebar.css';
import logo from '../../../images/easyrent.png'


const Sidebar = () => {
    return (
        <div>
            <div className='main-side-nav'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='dash-link-parents'> 
                <span className='dash-link'><i class='bx bxs-dashboard'></i><h3>Dashbord</h3></span>
                <span className='dash-link'><i class='bx bxs-user'></i><h3>Customers</h3></span>
                <span className='dash-link'><i class='bx bx-signal-4'></i><h3>Analytics</h3></span>
                <span className='dash-link'><i class='bx bx-message-dots'></i><h3>Messages</h3></span>
                <span className='dash-link'><i class='bx bx-list-check'></i><h3>Procucts</h3></span>
                <span className='dash-link'><i class='bx bxs-report'></i><h3>Report</h3></span>
                <span className='dash-link'><i class='bx bx-plus-circle'></i><h3>Add Product</h3></span>
                <div>
                <span className='dash-link'><i class='bx bx-log-out'></i><h3>Logout</h3></span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Sidebar