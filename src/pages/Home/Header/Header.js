import { Container } from '@mui/material'
import React from 'react'
import banner from '../../../images/easyrent-home-car-img.png';
import './Header.css';

const Header = () => {
    return (
        <div className='img-box'>
            <Container>
                <div className="main-box">
                    <div className='banner-text'>
                        <div>
                            <h1 className='banner-heading'>Car Rental <br />
                                in Bangladesh.</h1>
                            <p>Don’t deny yourself the pleasur of<br />
                                driveng the best premium cars from <br />
                                around the  world here  now.</p>
                        </div>
                    </div>

                    <div className='banner-img'>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header