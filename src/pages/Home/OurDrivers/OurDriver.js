import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const OurDriver = (props) => {

    const { name, email, experience, phone, address, picture, price } = props.item || {}

    return (
        <>
            <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ maxWidth: 345, textAlign: "center" }}>
                    <CardMedia
                        component="img"
                        width="100%"
                        height="100%"
                        image={picture}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Email: {email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Experience: {experience}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Address: {address}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Phone: {phone}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: {price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button className="service-button">Rent Now</button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};

export default OurDriver;