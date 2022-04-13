import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { Container } from '@mui/material';

// import './Services.css'

const GetCourses = () => {
    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/course/allCourse')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])



    return (
        <>
            <Container className=' my-5 '>

                <div className='my-5 service-title'>

                    <h1>Our Courses</h1>

                    <h6>Professional Photography Services. If you need photographs for your company website or a new printed sales brochure, our professional photographers will..</h6>

                </div>

                <Box xs={12} md={3} className="g-4 " >

                    {
                        allCourses.map(allCourse => <Box
                            key={allCourse._id}
                            service={allCourse}
                        >

                            <iframe width="560" height="315" src={allCourse.youtube_video_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            <h2>{allCourse.title}</h2>
                            <p>{allCourse.description}</p>
                        </Box>)
                    }
                </Box>

            </Container >
        </>
    );
};

export default GetCourses;