import React from "react";
import Appbar from "../../Shared/Appbar/Appbar";
import Footer from "../../Shared/Footer/Footer";
import CourseVideo from "./CourseVideo";

const SingleCourse = () => {
  return (
    <div style={{ backgroundColor: "##F3F5F9" }}>
      <Appbar />
      <CourseVideo />
      <Footer />
    </div>
  );
};

export default SingleCourse;
