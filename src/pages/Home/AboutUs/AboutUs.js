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



  const background2 = {
    background: `url(${'https://demo.kitthemes.com/html/rentnow/assets/images/about-bg-1.jpg'})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken,luminosity',
    backgroundSize: 'cover',
    marginTop: 50,
    height: "400px",
    backgroundAttachment: 'fixed'
  }



  useEffect(() => {
    AOS.init()
  }, [])

  return (

    <>
      <AppBar />
      <Box sx={{ textAlign: 'center' }}>

        <Typography sx={{ fontWeight: 700, fontSize: '2.21429rem', marginBottom: '15px', }}>Our Vission</Typography>
        <Typography>Inbecilloque elegans errorem concedo etsi electram.
        </Typography>

        <Container >
          <div className='bullet-point'>

            <li>
              <Typography sx={{ fontWeight: 900, marginBottom: '15px', fontSize: '22px' }}>Best Price Guarantee</Typography>
              <Typography sx={{ marginBottom: '15px', color: 'black' }}>Duis placerat tempus odio vel pretium. Vestibulum mattis viverra justo vel consequat.</Typography>
            </li>
            <li>
              <Typography sx={{ fontWeight: 900, marginBottom: '15px', fontSize: '22px' }}>Best Quality Cars</Typography>
              <Typography sx={{ marginBottom: '15px', color: 'black' }}>Duis placerat tempus odio vel pretium. Vestibulum mattis viverra justo vel consequat.</Typography>
            </li>

            <li>
              <Typography sx={{ fontWeight: 900, marginBottom: '15px', fontSize: '22px' }}>City to City</Typography>
              <Typography sx={{ marginBottom: '15px', color: 'black' }}>Duis placerat tempus odio vel pretium. Vestibulum mattis viverra justo vel consequat.</Typography>
            </li>
            <li>
              <Typography sx={{ fontWeight: 900, marginBottom: '15px', fontSize: '22px' }}>Best Quality Cars</Typography>
              <Typography sx={{ marginBottom: '15px', color: 'black' }}>Duis placerat tempus odio vel pretium. Vestibulum mattis viverra justo vel consequat.</Typography>
            </li>
          </div>


        </Container>

      </Box>
      <div style={background2}>

        <Container >


          <Grid container spacing={2} >
            <Grid item xs={4} className='img-hide'>
              <img src="https://demo.kitthemes.com/html/rentnow/assets/images/about-img.jpg" alt="" />
            </Grid>
            <Grid item xs={1} >
            </Grid>

            <Grid item xs={7} >
              <Typography sx={{ color: '#00D231', fontWeight: '500', fontSize: '1.5rem' }}>Make Beauty Things</Typography>
              <Typography sx={{ fontWeight: '800', fontSize: '2.85714rem', color: '#fff' }}>With Passion</Typography>
              <p style={{ lineHeight: '', color: '#fff' }}>Proin euismod mollis mi in finibus. Duis vitae elementum ligula. Cras suscipit feugiat arcu, eu venenatis odio. Vivamus non venenatis urna. Curabitur quis elit ut lorem condimentum dignissim. Nunc ornare massa vel fringilla efficitur. Cras elementum ligula et metus tempor, sit amet convallis neque venenatis. Morbi nisi eros, finibus sit amet ipsum ac, venenatis dignissim leo.</p>
            </Grid>
          </Grid>

        </Container>
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




