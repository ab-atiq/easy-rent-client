import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../FakeData/FakeData";
import "./Popup.css";
const Popup = () => {
  const { BookingId } = useParams();

  useEffect(() => {
    fetch(`${BookingId}`).then((res) => res.json());
    //   .then((data) => setService(data));
  }, [BookingId]);

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="design_popup">
      <Container>
        <Grid container spacing={2}>
          <Grid className="text_center" item sx={12} sm={6} md={6} lg={6}>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="filled-error"
                  label="FirstName"
                  defaultValue=""
                  variant="filled"
                />
                <TextField
                  id="filled-error-helper-text"
                  label="LastName"
                  defaultValue=""
                  variant="filled"
                />
              </div>
              <div>
                <TextField
                  id="filled-error"
                  label="Address"
                  defaultValue=""
                  variant="filled"
                />
                <TextField
                  id="filled-error-helper-text"
                  label="LastName"
                  defaultValue=""
                  variant="filled"
                />
              </div>
              <Box sx={{ width: 500 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <Button className="button_design" variant="contained">Continew With Pay</Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
     
    </div>
  );
};

export default Popup;
