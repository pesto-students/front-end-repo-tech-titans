import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


const Footer = () => {

  const Footer = styled(AppBar)(({ theme }) => ({
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    padding: "16px",
    color: "#fff",
    backgroundColor: theme.palette.common.black
  }));

  return (
    <Footer position="static">
      <Toolbar>
        <Typography variant="body2">
          © {new Date().getFullYear()} E-Commerce Store. All rights reserved.
        </Typography>
      </Toolbar>
    </Footer>
  );
};

export default Footer;
