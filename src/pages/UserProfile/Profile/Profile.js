import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../../images/bgi2.jpg'
import './Profile.css';
import { Box } from '@mui/system';
import useAuth from '../../../hooks/useAuth';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Appbar from '../../Shared/Appbar/Appbar';

const Profile = () => {

    const { user, logOut } = useAuth();

    console.log(user.photoURL);

    return (
        <div className='profile'>
            {/* <Appbar></Appbar> */}
            <div>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Link className='dashboard-link' to='/home'><i className='material-icons-sharp'>home</i>
                            <h3>Home</h3>
                        </Link>
                        <Link className='dashboard-link' to='/profile'><i className='material-icons-sharp'>person_outline</i>
                            <h3>Profile</h3>
                        </Link>
                        <Link className='dashboard-link' to='/profile'><i className='material-icons-sharp'>receipt_long</i>
                            <h3>My Orders</h3>
                        </Link>
                        <Link className='dashboard-link' to='/profile/addreview'><i className='material-icons-sharp'>insights</i>
                            <h3>Review</h3>
                        </Link>
                    </Grid>
                    <Grid item xs={10}>
                        <Box>
                            <Card sx={{ maxWidth: 1600, marginTop: 0, marginLeft: 0, marginRight: 0 }}>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={image}
                                    alt="Profile"
                                />
                                <CardContent>
                                    <img className='img' src={user?.photoURL} alt="" />
                                    <Typography gutterBottom variant="h5" component="div">
                                        {user?.displayName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Email: {user?.email}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {user?.email && <Link className='single-link' to="/login">
                                        <button className='logout-btn' onClick={logOut}>Logout</button>
                                    </Link>
                                    }
                                    {/* <Button size="small">Learn More</Button> */}
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>


            </div>
        </div>
    );
};

export default Profile;