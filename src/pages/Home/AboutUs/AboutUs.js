import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const AboutUs = () => {

  return (

    <Container className='about-section' >
      <Grid container spacing={2} sx={{ my: 1 }}>
        <Grid item xs={12} md={6} className='about-banner'>
          <img src="https://png.pngtree.com/png-vector/20200618/ourmid/pngtree-searching-buy-and-rent-car-flat-illustration-png-image_2257832.jpg" alt="" />

        </Grid>

        <Grid item xs={12} md={6} sx={{ lineHeight: "40px" }}>
          <Typography variant="h1" sx={{ my: 3, fontSize: 20, fontWeight: 700, color: 'rgb(255, 79, 90)', letterSpacing: '10px', }}>
            ABOUT US
          </Typography>
          <Typography sx={{ my: 5, fontSize: 50, fontFamily: "" }} className='about-text'>
            Since 1999, we have been providing the best quality of service to our customers.
          </Typography>

          <Typography  >
            Everything and everyone else around you can affect your self esteem. Other people can deliberately or inadvertently damage your self image. Unchecked people and circumstances can ultimately destroy your
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;