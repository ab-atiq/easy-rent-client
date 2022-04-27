import { Grid, Typography } from "@mui/material";
import React from "react";
import { AiFillStar } from "react-icons/ai";
const ViewSingleReview = ({ review }) => {
  const { name, image, carName, description, star } = review;
  return (
    <div>
      <Grid container alignItems="center">
        <Grid item>
          <img
            style={{ borderRadius: "50%" }}
            src={image}
            alt="user"
          />
        </Grid>
        <Grid item pl={3}>
          <Typography variant="h4">{carName}</Typography>
          <Typography variant="h5">
            {star} <AiFillStar /> {name} apr 12, 2022
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewSingleReview;
