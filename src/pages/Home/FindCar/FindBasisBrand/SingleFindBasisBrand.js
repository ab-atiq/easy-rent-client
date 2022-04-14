import { Grid, Typography } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { AiFillStar } from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";

const SingleFindBasisBrand = ({ car }) => {
  console.log(car);
  const { imgUrl, name, rent, star, available } = car;
  return (
    <Grid item xs={12} sm={6} lg={4} sx={{ /*border: "2px solid orange",*/ padding: "10px" }}>
      <Grid item xs={12} sx={{ padding: "10px" }}>
        <img
          src={imgUrl}
          style={{ height: "200px", borderRadius: "10px" }}
          alt=""
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" fontWeight="bold">
          {name}
        </Typography>
        <Typography py={1} variant="body1">
          {star} <AiFillStar />({available} trips) <GiAchievement /> All-Star
          Host
        </Typography>
      </Grid>
      <Divider />
      <Grid item xs={12} textAlign="right">
        <Typography variant="h5">Cost: {rent}$/day</Typography>
      </Grid>
      <Typography textAlign="center" sx={{ margin: "0 auto" }}>
        <Button sx={{ backgroundColor: "orange", color: "white", my: 3 }}>
          View Details
        </Button>
      </Typography>
    </Grid>
  );
};

export default SingleFindBasisBrand;
