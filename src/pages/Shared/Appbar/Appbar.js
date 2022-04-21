import { Container } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../images/easyrent.png'
import useAuth from '../../../hooks/useAuth';

// import { useDispatch, useSelector } from 'react-redux';
import './Appbar.css';

const Appbar = () => {
  const { user, logOut } = useAuth()
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }


  return (
    <Container>
      <nav className='all-items'>
        <div className='logo-img'>
          <img styel={{ width: '100px' }} src={logo} alt="" />
        </div>
        <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <Link className='single-link' to='/home'>Home</Link>
          <Link className='single-link' to='/services'>Services</Link>
          <Link className='single-link' to='/CourseHome'>Courses</Link>
          <Link className='single-link' to='/contactUs'>Contact Us</Link>
          <Link className='single-link' to='/newDashbord'>NewDashbord</Link>

          {!user.email &&
            <Link as={Link} to="/login" className='single-link'>Login</Link>
          }

          {
            user?.email &&           
              <Link className='single-link' to='/Dashbord'>Dashboard</Link>                        
          }
          {
            user?.email &&             
              <Link to="/login" className='single-link'>
                Hi {user?.displayName}
              </Link>            
          }
          {
            user?.email &&                       
              <Link className='single-link' to="/login">
                <button className='logout-btn' onClick={logOut}>Logout</button>
              </Link>           
          }

        </div>

        <div onClick={handleClick} className='menu-icon'>
          <i className={click ? 'bx bxs-message-square-x icon-style' : 'bx bx-menu icon-style'}></i>
        </div>
      </nav>

    </Container>
  )
}

export default Appbar;