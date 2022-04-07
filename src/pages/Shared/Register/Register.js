import React, { useState } from 'react';
import image from '../../../images/undraw_press_play_re_85bj.svg';
import { NavLink } from 'react-router-dom';
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import './Register.css';
import { register } from '../../../app/redux/callAPI';


const Register = () => {
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    console.log(error);

    const handleClick = (e) => {
        e.preventDefault();
        register(dispatch, { userName, email, password });
        console.log(userName, email, password);

    };


    return (
        <Box className="container">
            <Box className="forms-container">
                <Box className="signup">
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Please Register</h2>
                        <Box className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="userName" onChange={(e) => setUsername(e.target.value)} />
                        </Box>
                        <Box className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </Box>
                        <Box className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Box>
                        <input type="submit" value="Register" className="btn solid" onClick={handleClick} disabled={isFetching} />

                        <p className="social-text">Or Sign up with social platforms</p>

                        <Box className="social-media">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
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

