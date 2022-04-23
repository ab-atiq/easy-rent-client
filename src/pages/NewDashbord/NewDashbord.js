import React, { useState } from 'react'
import './NewDashbord.css'
import { Link } from 'react-router-dom';
import logo from '../../images/easyrent.png'
import profile from '../../images/download.jpg'
import { Outlet } from 'react-router-dom'
// import DashboardHome from './DashbordHome/DashboardHome';


const NewDashbord = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
    setClick(!click)
  }
  return (
    <div className='dashboard-backround'>
        <div className="dashboard-container">
        <div>
        <aside className={click ? 'display-block' : 'display-active' }>
            
            <div className="top">
                <div className="dashbord-logo">
                    <img src={logo} alt="" />
                </div>
                <div onClick={handleClick} className="close">
                    <span class="material-icons-sharp">
                        close
                    </span>
                </div>
            </div>

            
            <div className="sidebar">
            
                <Link className='dashboard-link' to='/home'><i className='material-icons-sharp'>home</i>
                    <h3>Home</h3>
                </Link>

                <Link className='dashboard-link' to='/newDashbord/'><i className='material-icons-sharp'>dashboard</i>
                    <h3>Dashboard</h3>
                </Link>

                <Link className='dashboard-link' to='/newDashbord/user'><i className='material-icons-sharp'>person_outline</i>
                     <h3>Customers</h3>
                </Link>

                <Link className='dashboard-link' to='/home'><i className='material-icons-sharp'>receipt_long</i>
                    <h3>Orders</h3>
                </Link>

                <Link className='dashboard-link' to='/home'><i className='material-icons-sharp'>insights</i>
                    <h3>Analytics</h3>
                </Link>

                <Link className='dashboard-link' to='/home'><i className='material-icons-sharp'>mail_outline</i>
                    <h3>Messages</h3>
                </Link>

                <Link className='dashboard-link' to='/home'><i className='material-icons-sharp'>inventory</i>
                    <h3>Products</h3>
                </Link>

                <Link className='dashboard-link' to='/home'><i className='material-icons-sharp'>report_gmailerrorred</i>
                    <h3>Report</h3>
                </Link>

                <Link className='dashboard-link' to='/home'><i className='material-icons-sharp'>settings</i>
                    <h3>Setting</h3>
                </Link>

                <Link className='dashboard-link' to='/home'><i className='material-icons-sharp'>add</i>
                    <h3>AddProduct</h3>
                </Link>

                <Link className='dashboard-link' to='/home'><i className='material-icons-sharp'>logout</i>
                    <h3>Logout</h3>
                </Link>
        
                
            </div>
        </aside>        
        {/* =================== nav bar =========== */}
        <div className="d-right">
        <div className="top">           
                <button onClick={handleClick} className="menu-btn">
                <span class="material-icons-sharp">menu</span>                   
                </button>
                {/* <div className="theme-toggle">
                <span class="material-icons-sharp active">light_mode</span>
                <span class="material-icons-sharp">dark_mode</span>
                </div> */}
                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Nur</b></p>
                        <small className='text-muted'>Admin</small>
                    </div>
                    <div className="profile-photo">
                        <img src={profile} alt="" />
                    </div>
                </div>
        </div>
        </div>
        </div>
        {/* =================== nav bar =========== */}
         
        <div className='dashbord-outlet'>
            <Outlet />
            {/* <DashboardHome /> */}
        </div>
              
    </div>          
    </div>                   
  )
}

export default NewDashbord