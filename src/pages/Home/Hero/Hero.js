import React from "react";
import { useForm } from "react-hook-form";
import "./Hero.css";
import {
  Button,
  Grid,
  TextField,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { Box } from "@mui/system";

const Hero = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="hero">
      <Typography className="title" gutterBottom variant="h3">
        Car Rental - Search, Compare and Save
      </Typography>
      <Grid container>
        <Grid item md={6} style={{ margin: "0 auto" }}>
          <Box sx={{ fontSize: 18 }}>
         

            <Card className="background_color">
              <CardContent className="from_design">
                <form className="from_control" onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} className="input_group">
                      <TextField
                        {...register("pickup")}
                        type="text"
                        placeholder="Enter Pickup Location"
                        label="Pickup Location"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        {...register("number")}
                        type="number"
                        placeholder="Enter phone number"
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                          <MobileDatePicker
                            {...register("date")}
                            label="Date"
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                          />
                          <TimePicker
                            {...register("time")}
                            label="Time"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider>
                    </Grid>
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Search
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item md={12} style={{ margin: "0 auto"}}>
          <Typography
            style={{ margin: "0 0 30px 0" }}
            className="title"
            gutterBottom
            variant="h5"
          >
            <span style={{ marginRight: "3rem" }}>
              {" "}
              Free cancellations on most bookings{" "}
            </span>{" "}
            <span style={{ marginRight: "3rem" }}>60,000+ locations </span>{" "}
            <span style={{ marginRight: "3rem" }}>
              {" "}
              Customer support in 40+ languages{" "}
            </span>
          </Typography>
        </Grid>
      </Grid>

      <div className="form-container"></div>
    </div>
  );
};

export default Hero;
