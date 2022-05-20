import { useState, useEffect } from "react";
import React from 'react';
import MyOrder from "./MyOrder";
import { Container, Grid, Typography } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {

    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/find/singleCarRentemail/${user.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    // console.log(Orders);

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