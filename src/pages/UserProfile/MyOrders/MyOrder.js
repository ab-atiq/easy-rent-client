import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const MyOrder = (props) => {

    const { product_name, product_imgUrl, cus_email, cus_name, date_start, date_end, total_amount } = props.order || {}

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345, textAlign: "center" }}>
                    <CardMedia
                        component="img"
                        width="100%"
                        height="350px"
                        image={product_imgUrl}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            {product_name}
                        </Typography>
                        {/* <Typography gutterBottom variant="h5" component="div">
                            Car Name: {carName}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Email: {email}
                        </Typography> */}
                        <Typography gutterBottom variant="h6" component="div">
                            Rent Price: {total_amount}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rent Date: {date_start}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Return Date: {date_end}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

        </>
    );
};

export default MyOrder;