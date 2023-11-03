import React from "react";
import { Container } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
const RootLayout = ({ children }) => {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <Container maxWidth={false} style={{ padding: "10px 0px" }}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default RootLayout;
