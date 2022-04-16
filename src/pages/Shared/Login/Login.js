import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import loginImage from '../../../images/login.jpg';
import Typography from '@mui/material/Typography';
import './Login.css';
import { Button, TextField } from '@mui/material';
import { AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { login } from '../../../app/redux/callAPI';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    // const [userName, setUserName] = useState("");
    // const [password, setPassword] = useState("");
    const { register, handleSubmit } = useForm();
    const { signInWithGoogle, logInUser, error } = useAuth()


    const dispatch = useDispatch();
    // const { isFetching, error } = useSelector((state) => state.login);
    const navigate = useNavigate()

    const onSubmit = data => {
        logInUser(data.email, data.password)
        console.log(data)
        navigate('/home')
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(navigate)
        navigate('/home')

    }


    // const handleClick = (e) => {
    //     e.preventDefault();
    //     login(dispatch, { userName, password });
    //     console.log(userName, password);
    //     navigate('/home')

    // };


    return (
        <div className='login-container'>
            <Typography className='login-header' variant="h4" gutterBottom component="div">
                Please Log in
            </Typography>
            <div className='login-grid'>
                <Grid container spacing={3} maxWidth="lg" justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img className='login-img' src={loginImage} alt="" /> <br />
                        <Link to='/register'>New here? Please Sign up </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("email")} className='login-input' type="email" placeholder="Email" label="Email" variant="outlined" required /> <br />
                            <input className='login-input' type="password" placeholder="Password" label="Password" variant="outlined" required {...register("password")} /> <br />
                            {/* <Button type="submit" variant="contained" color="primary" onClick={handleClick} disabled={isFetching}>Login</Button> */}
                            <input type="submit" className="btn solid" />
                        </form>
                        {error && <TextField>Something went wrong...</TextField>}
                    </Grid>
                    <Typography> or Log in with <AiOutlineMail onClick={handleGoogleSignIn} className='login google'></AiOutlineMail> </Typography>
                </Grid>
            </div>
        </div>
    );
};

export default Login;