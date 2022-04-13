import { Container, Typography } from '@mui/material';
import React from 'react';
import Appbar from '../../../Shared/Appbar/Appbar';

const CourseHome = () => {
    return (
        <>
            <Appbar />
            <Container>
                <Typography variant='h4' sx={{ textAlign: "center", margin: "25px auto", fontWeight: "bold", color: "#E78E52" }}>Hello Rider !!</Typography>
                <Typography variant='h6' sx={{ textAlign: "left" }}>Course 1</Typography>
                
            
            </Container>
        </>
    );
};

export default CourseHome;