import React from 'react';
import Grid from '@mui/material/Grid';
import loginImage from '../../../img/login.jpg';
import Typography from '@mui/material/Typography';
import './Login.css';
import { Button, TextField } from '@mui/material';
import {AiOutlineMail} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Login = () => {
    
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
                        <Link to='/registration'>New here? Please Sign up </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <form >
                            <TextField className='login-input' type="email" placeholder="Email" label="Email" variant="outlined" required /> <br />
                            <TextField className='login-input' type="password" placeholder="Password" label="Password" variant="outlined" required /> <br />
                            <Button type="submit" variant="contained" color="primary">Login</Button>
                        </form>
                    </Grid>
                    <Typography> or Log in with <AiOutlineMail className='login google'></AiOutlineMail> </Typography>
                </Grid>
            </div>
        </div>
    );
};

export default Login;