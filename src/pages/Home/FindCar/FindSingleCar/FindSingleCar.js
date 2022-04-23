import { Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiFillCar } from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";

const FindSingleCar = () => {
  const { carName } = useParams();
  return (
    <div>
      <h2>This is {carName} car</h2>
      <Grid container>
        <Grid item>
          <Typography variant="h6">
            5 <AiFillStar /> (50 trips)
          </Typography>
          <Grid container>
            <Grid item>
              <AiFillCar /> 28MPG
              <br />
              <AiFillCar /> 4 Doors
            </Grid>
            <Grid item>
              <AiFillCar /> Gas(Premium)
              <br />
              <AiFillCar /> 4 seats
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <Typography>Hosted By</Typography>
          <img
            src="https://images.turo.com/media/driver/HxO8KM_gSE2MTn-PK00LCw.160x160.jpg"
            alt=""
          />
        </Grid>
        <Grid item>
          <Typography>Oleg</Typography>
          <br />
          <GiAchievement /> All-Star Host
          <br /> 200 trips, Join Oct 2018 Host
        </Grid>
        <Grid item>
          <Typography variant="body1">
            All-Star Hosts All-Star Hosts are the most experienced and
            responsive hosts on Turo. These outstanding hosts have completed at
            least 10 trips in the last year, and consistently go the extra mile,
            earning excellent reviews from guests.
          </Typography>
          <Typography variant="body1">
            All-Star Hosts All-Star Hosts are the most experienced and
            responsive hosts on Turo. These outstanding hosts have completed at
            least 10 trips in the last year, and consistently go the extra mile,
            earning excellent reviews from guests.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Typography>Description</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eaque
          corporis dignissimos perferendis cupiditate dolor doloremque at modi
          libero quidem pariatur ad ratione corrupti et sit natus necessitatibus
          dicta fugit animi quam voluptatum vel. Temporibus nemo veniam mollitia
          hic, ratione reprehenderit iusto nulla, quibusdam dolorem ipsam eaque
          asperiores facere illum assumenda deleniti culpa consequatur similique
          corrupti eveniet exercitationem autem voluptatem accusamus laboriosam?
          Modi numquam vero laudantium eius sunt obcaecati ratione, porro quia
          recusandae esse error architecto dignissimos voluptas! Explicabo
          labore omnis iusto iste eligendi porro adipisci consequuntur ratione
          repudiandae, dolorum odit incidunt esse est error repellendus magni ut
          voluptatem. Iure.
        </Typography>
        <Typography>Features</Typography>
        <Grid item>
          <AiFillCar /> 4 Doors
        </Grid>
        <Grid item>
          <AiFillCar /> 4 Doors
        </Grid>
        <Grid item>
          <AiFillCar /> 4 Doors
        </Grid>
        <Grid item>
          <AiFillCar /> 4 Doors
        </Grid>
        <Grid item>
          <AiFillCar /> 4 Doors
        </Grid>
        <Grid item>
          <AiFillCar /> 4 Doors
        </Grid>
        <Grid item>
          <AiFillCar /> 4 Doors
        </Grid>
        <Grid item>
          <AiFillCar /> 4 Doors
        </Grid>
        <Grid item>
          <AiFillCar /> 4 Doors
        </Grid>
        <Grid item>
          <AiFillCar /> 4 Doors
        </Grid>
        <Grid item>
          <AiFillCar /> 4 Doors
        </Grid>
      </Grid>
      <Grid container>
        <Typography>Guidelines</Typography>
        <Typography>
          Please note, all of our vehicles are not pet-friendly. A violation fee
          will be applied if you transport a pet without permission.
        </Typography>
      </Grid>
      <Grid>
        <Typography>Rating and Reviews</Typography>
        <Grid container>
          <Grid item>
            <img
              src="https://images.turo.com/media/driver/HxO8KM_gSE2MTn-PK00LCw.160x160.jpg"
              alt=""
            />
          </Grid>
          <Grid item>
            <AiFillStar /> chaitanya apr 12, 2022
            <br /> Great host and great car!
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FindSingleCar;
