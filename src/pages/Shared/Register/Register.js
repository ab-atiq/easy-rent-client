import React from 'react';
import image from '../../../images/undraw_press_play_re_85bj.svg';
import { NavLink } from 'react-router-dom';
import './Register.css';

const Register = () => {


    return (
        <div class="container">
            <div class="forms-container">
                <div class="signup">
                    <form action="#" class="sign-up-form">
                        <h2 class="title">Please Register</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Register" class="btn solid" />
                        <p class="social-text">Or Sign up with social platforms</p>
                        <div class="social-media">
                            <a href="#" class="social-icon">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="social-icon">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <button class="btn transparent" id="sign-up-btn">
                                Login
                            </button>
                        </NavLink>
                    </div>
                    <img src={image} class="image" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;