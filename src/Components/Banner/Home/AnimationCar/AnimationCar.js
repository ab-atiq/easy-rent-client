import { Box, Grid } from "@mui/material";
import React from "react";
import animationCar from "../../../../Asset/car_img.jpg";
import "./AnimationCar.css";

const AnimationCar = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={5}>
          <Box sx={{ mt: "35%", fontSize: 17, mx: 10 }}>
            <h1>
              <b style={{ color: "#2196f3" }}> Our Apps</b> <br />{" "}
              <span style={{ color: "#FF4F5A" }}>Comming Soon...</span>
            </h1>
            <h3> If You Using App Frist Time 20% Discount </h3>
            <p>
              Earn double Expedia Rewards points when you book on the app. Plus,
              get travel alerts and manage your bookings on the go.
            </p>
            <button className="discover_btn">
            
              Download Now
             
            </button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <img width="100%" height="100%" src={animationCar} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default AnimationCar;
