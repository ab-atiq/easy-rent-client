import { Container } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../images/easyrent.png'
import './Appbar.css';

const Appbar = () => {
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
          <Link className='single-link' to='/home'>Services</Link>
          <Link className='single-link' to='/about'>About Us</Link>
          <Link className='single-link' to='/login'>Login</Link>
        </div>
        <div onClick={handleClick} className='menu-icon'>
          <i className={click ? 'bx bxs-message-square-x icon-style' : 'bx bx-menu icon-style'}></i>
        </div>
      </nav>

    </Container>
  )
}

export default Appbar