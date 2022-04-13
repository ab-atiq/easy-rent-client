import { Container, Grid } from "@mui/material";
import React from "react";
import NurServices from "../NurServices/NurServices";
import ButtonNavigation from "./ButtonNavigation";
import "./DetailsCar.css";
import RangeSlider from "./RangeSlider";

const DetailsCar = () => {
  return (
    <div>
      <Container>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <p>Car type</p>
                </Grid>
                <Grid item xs={6}>
                  {/* <Button className="text_right" variant="text">Reset</Button> */}
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={2.4}>
                  <div className="small_box">
                    <img
                      width="40px"
                      height="35px"
                      src="https://i.ibb.co/gjz0t4s/2018-Toyota-Noah-X-facelift-removebg-preview.png"
                      alt=""
                    />
                    <p sx={{ align: "center" }}>Small</p>
                  </div>
                </Grid>
                <Grid item xs={2.4}>
                  <div className="small_box">
                    <img
                      width="40px"
                      height="35px"
                      src="https://th.bing.com/th/id/R.8b54fce0c51f09af18e1ee3d2889287a?rik=Qa4fEblOI8zO7w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffree-png-hd-of-cars-car-png-file-png-image-1312.png&ehk=h4Z6LY0yG3Qx7rvd%2fHmMB6F5UTTb%2fwEWkkzu8Pvcmkg%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                    />
                    <p sx={{ align: "center" }}>Medium</p>
                  </div>
                </Grid>
                <Grid item xs={2.4}>
                  <div className="small_box">
                    <img
                      width="40px"
                      height="35px"
                      src="https://pngimg.com/uploads/mercedes/mercedes_PNG1898.png"
                      alt=""
                    />
                    <p>Large</p>
                  </div>
                </Grid>
                <Grid item xs={2.4}>
                  <div className="small_box">
                    <img
                      width="40px"
                      height="35px"
                      src="https://freepngimg.com/thumb/mercedes/49-mercedes-car-png-image.png"
                      alt=""
                    />
                    <p sx={{ align: "center" }}>SUV</p>
                  </div>
                </Grid>
                <Grid item xs={2.4}>
                  <div className="Range_slider ">
                    <RangeSlider></RangeSlider>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2}></Grid>
            <Grid item xs={5}>
              <ButtonNavigation></ButtonNavigation>
            </Grid>
          </Grid>
          <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>         
              <NurServices></NurServices>
                </Grid>
             </Grid>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default DetailsCar;
