import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '../../Shared/Appbar/Appbar';
import Grid from '@mui/material/Grid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css';
import Footer from '../../Shared/Footer/Footer';

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
        {/* <h1>
          ABOUT US
        </h1>
        <p>
          Cras eros lorem, rhoncus ac risus sit amet, fringilla ultrices purus.
        </p> */}
      </div>


      <Container>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography className='about-text' data-aos="fade-right">
              <span className='about-banner' style={{ fontSize: '30px', fontWeight: 700, color: 'rgb(255, 79, 90)', letterSpacing: '5px', marginRight: '10px', marginTop: 15 }}>
                ABOUT US <br /> EASY RENT CAR
              </span>
            </Typography>


          </Grid>
          <Grid item xs={7} sx={{ marginTop: 10, ms: 4 }} data-aos="fade-down">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
          </Grid>

        </Grid>
        <Box sx={{ my: 5 }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography className='about-text' data-aos="fade-right">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br />
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.


            </Typography>


          </Grid>
          <Grid item xs={4} sx={{ marginTop: 10, ms: 4 }} data-aos="fade-down" className="about-img">
            <img src="https://rentacar.modeltheme.com/wp-content/uploads/2016/03/about_man.png" alt="" />
          </Grid>

        </Grid>
      </Container >
      <Footer />
    </>
  );
};

export default AboutUs;




