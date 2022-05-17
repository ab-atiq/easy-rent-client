import {  Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const MyOrder = (props) => {

    const { name, email, carName, startDate, endDate, rent } = props.order || {}

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Car Name: {carName}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Email: {email}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Rent Price: {rent}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rent Date: {startDate}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Return Date: {endDate}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

        </>
    );
};

export default MyOrder;