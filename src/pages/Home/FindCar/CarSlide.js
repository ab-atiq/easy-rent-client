import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CarSlide = ({ car }) => {
  return (
    <Link to={`/car/${car.brandName}`}>
      <Grid container>
        <Grid item xs="12">
          <img src={car.imgUrl} alt="" />
        </Grid>
        <Grid item xs="12">
          <Typography
            variant="h5"
            sx={{ color: "black", textDecoration: "none" }}
          >
            {car.brandName}
          </Typography>
        </Grid>
      </Grid>
    </Link>
  );
};

export default CarSlide;
