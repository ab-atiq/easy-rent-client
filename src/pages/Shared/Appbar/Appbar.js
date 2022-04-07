import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Appbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "transparent", color: "black", boxShadow: 0 }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
            EasyRent
          </Typography>
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/login"
          >
            <Button color="inherit">Login</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;