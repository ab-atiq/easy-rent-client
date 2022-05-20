import React, { useState } from 'react';
import image from '../../../images/undraw_press_play_re_85bj.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import './Register.css';
import { register } from '../../../app/redux/callAPI';
import useAuth from '../../../hooks/useAuth';


// import { useForm } from "react-hook-form";




const Register = () => {
    // const { register, handleSubmit } = useForm();
    const { registerUser, signInWithGoogle } = useAuth()

    const { currentUser } = useSelector((state) => state.user);

    const [userName, setUsername] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");


    const dispatch = useDispatch();
    const navigate = useNavigate()





    const handleClick = (e) => {
        // register(data.email, data.password, data.name)
        // console.log(data)
        register(dispatch, { userName, userEmail, password });
        e.preventDefault();
    };
<<<<<<< HEAD
=======

>>>>>>> development



    return (
        <Box className="container">
            <Box className="forms-container">
                <Box className="signup">
                    <form className="sign-up-form">
                        <h2 className="title">Please Register</h2>
                        <Box className="input-field">
                            <i className="fas fa-user"></i>
                            <input
                                placeholder='Enter you name'
                                type='text'
                                name='text'
                                onChange={(e) => setUsername(e.target.value)}
                                className='border-0 '

                            />
                        </Box>
                        <Box className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter your email'
                                onChange={(e) => setUserEmail(e.target.value)}
                            />
                        </Box>

                        <Box className="input-field">
                            <i className="fas fa-lock"></i>
                            <input
                                placeholder='Enter your password'
                                name='password'
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Box>
                        <input onClick={handleClick} type="submit" value="Register" className="btn solid" />

                        <p className="social-text">Or Sign up with social platforms</p>

                        <Box className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon" onClick={signInWithGoogle}>
                                <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </Box>
                    </form>
                </Box>
            </Box>


            <Box className="panels-container">
                <Box className="panel left-panel">
                    <Box className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <button className="btn transparent" id="sign-up-btn">
                                Login
                            </button>
                        </NavLink>
                    </Box>
                    <img src={image} className="image" alt="" />
                </Box>
            </Box>
        </Box>
    );
};

export default Register;

