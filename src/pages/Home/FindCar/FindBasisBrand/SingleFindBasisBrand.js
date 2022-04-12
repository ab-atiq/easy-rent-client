import { Grid, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";

const SingleFindBasisBrand = ({ car }) => {
  console.log(car);
  const { imgUrl, name, rent } = car;
  return (
    <Grid
      item
      xs={4}
      // sx={{ border: "2px solid orange" }}
    >
      <Grid item xs={12} sx={{ padding: "25px" }}>
        <img src={imgUrl} alt="" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">{name}</Typography>
      </Grid>
      <Divider />
      <Grid item xs={12} textAlign="right">
        <Typography variant="h5">Cost Per Day: {rent}$</Typography>
      </Grid>
    </Grid>
  );
};

export default SingleFindBasisBrand;
