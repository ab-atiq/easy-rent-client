import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./PayNow.css";

const PayNow = () => {
  return (
    <div>
      <h1 className="text_center">Payment Coming soon</h1>

      <Link to="/home">
        <Button
          required
          type="submit"
          className="button_design  btn_center"
          variant="contained"
        >
          Go Back
        </Button>
      </Link>
    </div>
  );
};

export default PayNow;
