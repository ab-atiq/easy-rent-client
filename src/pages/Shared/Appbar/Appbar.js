import { Container } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/easyrent.png";
// import { useDispatch, useSelector } from 'react-redux';
import "./AppBar.css";

const AppBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Container>
      <nav className="all-items">
        <div className="logo-img">
          <img styel={{ width: "100px" }} src={logo} alt="" />
        </div>
        <div className={click ? "nav-menu active" : "nav-menu"}>
          <Link className="single-link" to="/home">
            Home
          </Link>
          <Link className="single-link" to="/services">
            Services
          </Link>
          <Link className="single-link" to="/CourseHome">
            Courses
          </Link>
          <Link className="single-link" to="/about">
            About Us
          </Link>
          <Link className="single-link" to="/contactUs">
            Contact Us
          </Link>
          <Link className="single-link" to="/login">
            Login
          </Link>
        </div>
        <div onClick={handleClick} className="menu-icon">
          <i
            className={
              click
                ? "bx bxs-message-square-x icon-style"
                : "bx bx-menu icon-style"
            }
          ></i>
        </div>
      </nav>
    </Container>
  );
};

export default AppBar;
