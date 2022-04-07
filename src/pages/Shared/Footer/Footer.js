import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from '@mui/system';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'green' }}>
            <Container>
                <Grid container textAlign='left'>
                    <Grid item xs={12} sm={6} md={3} >
                        <Typography variant='h4'>
                            EasyRent
                        </Typography>
                        <br />
                        <Typography variant='body1' sx={{ width: '90%' }}>
                            We are available for your low-cost best service. We hope you will satisfy with our service.
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            <FacebookIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Typography variant='h6'>
                            Info
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            {'>'} About Us
                        </Typography>
                        <Typography variant='body1'>
                            {'>'} Ask Question
                        </Typography>
                        <Typography variant='body1'>
                            {'>'} Contact Us
                        </Typography>
                        <Typography variant='body1'>
                            {'>'} Something
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Typography variant='h6'>
                            Service
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            {'>'} Special Offers
                        </Typography>
                        <Typography variant='body1'>
                            {'>'} Privacy and Policy
                        </Typography>
                        <Typography variant='body1'>
                            {'>'} Customer Service
                        </Typography>
                        <Typography variant='body1'>
                            {'>'} Customer Service
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} >
                        <Typography variant='h6'>
                            Another Info
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;