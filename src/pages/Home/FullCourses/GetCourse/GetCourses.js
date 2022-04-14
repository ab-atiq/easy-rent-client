import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import Swal from 'sweetalert2'
import Appbar from '../../../Shared/Appbar/Appbar';
import Footer from '../../../Shared/Footer/Footer';
// import './Services.css'

const GetCourses = () => {
    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/course/allCourse')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])


    const handleAlert = (id) => {
        Swal.fire(
            'Good job!',
            'You successfully completed this course!',
            'success'
        )

    }

    return (
        <>
        <Appbar />
            <Container className=' my-5 '>

                <div className='my-5 service-title'>

                    <h1>Become A Safer</h1>

                    <h6>Professional Photography Services. If you need photographs for your company website or a new printed sales brochure, our professional photographers will..</h6>

                </div>

                <Grid container spacing={2} sx={{ my: "20px" }} >

                    {
                        allCourses.map(allCourse => <Grid xs={12} md={3} sx={{ mx: '20px', my: '10px' }}
                            key={allCourse._id}
                            service={allCourse}
                        >

                            <iframe width="300" height="200" src={allCourse.youtube_video_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  ></iframe>

                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{allCourse.title}</Typography>

                            <Typography>{allCourse.description}</Typography>
                            <Button onClick={handleAlert} className="btn-color" variant="contained">Complete Course</Button>
                        </Grid>)
                    }
                </Grid>

            </Container >
            <Footer />
        </>
    );
};

export default GetCourses;