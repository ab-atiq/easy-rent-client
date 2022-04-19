import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '../../Shared/Appbar/Appbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css';

const AboutUs = () => {
  const background = {
    background: `url(${'https://s5.favim.com/orig/71/boy-car-guy-landscape-Favim.com-668156.jpg'})`,
    backgroundColor: 'rgba(45, 58, 74, 0.5)',
    backgroundBlendMode: 'darken,luminosity',
    backgroundSize: 'cover',
    marginTop: 50,
    height: "900px"
  }

  useEffect(() => {
    AOS.init()
  }, [])

  return (

    <>
      <AppBar />
      <div style={background} className='about-title'>
        <h1>
          ABOUT US
        </h1>
        <p>
          Cras eros lorem, rhoncus ac risus sit amet, fringilla ultrices purus.
        </p>
      </div>


      <Container>
        {/* <img src="https://png.pngtree.com/png-vector/20200618/ourmid/pngtree-searching-buy-and-rent-car-flat-illustration-png-image_2257832.jpg" alt="" /> */}
        <Box className='about-section' >


          <Box sx={{ lineHeight: "20px" }}>




            <Typography sx={{ my: 5, fontSize: 50, fontFamily: "", color: 'black' }} className='about-text'>
              <span className='about-banner' style={{ fontSize: 20, fontWeight: 700, color: 'rgb(255, 79, 90)', letterSpacing: '10px' }}>
                ABOUT US <br /> EASY RENT CAR
              </span>

              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione. Ut enim ad minima eniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quas.
            </Typography>

            <Typography  >
              Everything and everyone else around you can affect your self esteem. Other people can deliberately or inadvertently damage your self image. Unchecked people and circumstances can ultimately destroy your
            </Typography>
          </Box>
        </Box>
      </Container >
    </>
  );
};

export default AboutUs;




