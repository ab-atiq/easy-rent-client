import { faCar, faBriefcaseMedical, faCircleInfo, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaceSharp } from '@mui/icons-material';

import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

import './Facilities.css';

const Facilities = () => {

    // font awesome
    const Car = <FontAwesomeIcon icon={faCar} />
    const support = <FontAwesomeIcon icon={faBriefcaseMedical} />
    const user = <FontAwesomeIcon icon={faUser} />
    const info = <FontAwesomeIcon icon={faCircleInfo} />

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={12} md={3}>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'white.main' }} variant="h3" component="div">
                        {Car}
                    </Typography>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'white.main' }} variant="h5" component="div">
                        50
                    </Typography>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'white.main' }} variant="h6" component="div">
                        Car Available
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={12} md={3}>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'white.main' }} variant="h3" component="div">
                        {user}
                    </Typography>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'white.main' }} variant="h5" component="div">
                        15+
                    </Typography>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'white.main' }} variant="h6" component="div">
                        Happy Client
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={12} md={3}>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'white.main' }} variant="h3" component="div">
                        {info}
                    </Typography>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'white.main' }} variant="h5" component="div">
                        Get 10% off 1 Item
                    </Typography>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'white.main' }} variant="h6" component="div">
                        When you sign up
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={12} md={3}>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'white.main' }} variant="h3" component="div">
                        {support}
                    </Typography>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'white.main' }} variant="h5" component="div">
                        24/7
                    </Typography>
                    <Typography sx={{ fontWeight: 500, m: 2, color: 'white.main' }} variant="h6" component="div">
                        Our Support
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Facilities;