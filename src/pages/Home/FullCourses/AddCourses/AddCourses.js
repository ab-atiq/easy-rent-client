import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';

const AddCourses = () => {
    const [Courses, setCourses] = useState([])
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        return (dispatch) => {
            axios.post('http://localhost:5000/courseAdd', data)
                .then(res => {
                    dispatch(setCourses(res.data))
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
    }
    return (
        <div>
            <h2>Courses</h2>

            <div className='mx-auto'>
                <h2>Give your review here</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='input-area'>
                    <input
                        {...register("title",
                            { required: true })}
                        required
                        placeholder='Enter your name'
                    />


                    <textarea
                        {...register("description",
                            { required: true })}
                        required
                        placeholder='Write description '
                        className='mx-auto'

                    />

                    <input
                        {...register("youtube_video_link",
                            { required: true })}
                        required
                        placeholder='enter img link'
                    />

                    <input className='submit' type="submit" />
                </form>
            </div>
        </div>
    );
}
export default AddCourses;