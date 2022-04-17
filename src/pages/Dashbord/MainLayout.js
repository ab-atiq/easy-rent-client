import React from 'react'
import Sidebar from './Sidebar/Sidebar';
// import Topnav from './Topnav/Topnav';
import './MainLayout.css';


const MainLayout = () => {
  return (
    <div className='Main-layout'>
        <Sidebar></Sidebar>
        {/* <Topnav></Topnav> */}
              
       
    </div>
  )
}

export default MainLayout