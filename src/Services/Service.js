import { Grid } from "@mui/material";
import React from "react";

const Service = ({ service }) => {
  const { _id, name, price, image } = service;
  return (
    <div>
      <Grid spacing={2}>
        <Grid item md={3} xs={12}>
          {name}
        </Grid>
      </Grid>
    </div>
  );
};

export default Service;
