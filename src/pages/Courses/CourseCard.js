import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function CourseCard({ course }) {
  const { _id, courseId, courseTitle, trainer, description, bannerImg } =
    course;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia component="img" alt="Teeth Dentistry" image={bannerImg} height="250px"/>
        <CardContent textAlign="center">
          <Typography gutterBottom variant="h6" component="div">
            Course: {courseTitle}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Trainer: {trainer}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Typography sx={{ textAlign: "center",pb:2 }}>
          <Link to={`/course/${courseId}`}>
            <Button variant="contained">Continue</Button>
          </Link>
        </Typography>
      </Card>
    </Grid>
  );
}
