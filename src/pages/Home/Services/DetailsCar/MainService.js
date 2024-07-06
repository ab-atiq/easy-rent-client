import { Container, Grid } from "@mui/material";
import React from "react";
import NurServices from "../NurServices/NurServices";
import DetailsCar from "./DetailsCar";
import Appbar from "../../../Shared/Appbar/Appbar";
import NurFooter from "../../../Shared/Footer/NurFooter";

const MainService = () => {
  return (
    <div>
      <Appbar></Appbar>
      <DetailsCar></DetailsCar>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <NurServices></NurServices>
          </Grid>
        </Grid>
      </Container>
      <NurFooter/>
    </div>
  );
};

export default MainService;
