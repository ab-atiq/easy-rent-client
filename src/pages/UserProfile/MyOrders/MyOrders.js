import { useState, useEffect } from "react";
import React from 'react';
import MyOrder from "./MyOrder";
import { Container, Grid, Typography } from "@mui/material";

const MyOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://guarded-taiga-13015.herokuapp.com/api/find/singleCarRent')
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    // console.log(myOrder);

    return (
        <Container>
            <Typography gutterBottom variant="h4" component="div">

            </Typography>
            <Grid container spacing={2}>
                {
                    orders.map(order =>
                        <MyOrder
                            key={order._id}
                            order={order}
                        ></MyOrder>)
                }
            </Grid>
        </Container>
    );
};

export default MyOrders;