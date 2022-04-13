import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import Appbar from '../../../Shared/Appbar/Appbar';
import Footer from '../../../Shared/Footer/Footer';
import courseImg from '../../../../images/course.png';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const CourseHome = () => {
    return (
        <>
            <Appbar />
            <Container>
                <Typography variant='h4' sx={{ textAlign: "center", margin: "25px auto", fontWeight: "bold", color: "#E78E52" }}>Hello Rider !!</Typography>
                <Typography variant='h6' sx={{ textAlign: "left" }}>Course 1</Typography>

                <Box >
                    <img className="image_Optimize" src={courseImg} alt="" />
                    <h2>How to Drive safely</h2>
                    <h4> Daily Rent $ 500</h4>
                    <br />
                    <Link className="btn_design " to="/GetCourses">
                        <Button className="btn_color" variant="contained">See Course</Button></Link>
                </Box>

            </Container>
            <Footer />
        </>
    );
};

export default CourseHome;