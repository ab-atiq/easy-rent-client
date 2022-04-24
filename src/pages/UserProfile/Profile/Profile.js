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

const Profile = () => {

    const { user, logOut } = useAuth();

    console.log(user.photoURL);

    return (
        <div className='profile'>
            <div>
                <Box>
                    <Card sx={{ maxWidth: 1600, marginTop: 18, marginLeft: 16, marginRight: 16 }}>
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
                            {user?.email && <Button onClick={logOut} variant="contained">LogOut</Button>
                            }
                            {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                    </Card>
                </Box>

            </div>
        </div>
    );
};

export default Profile;