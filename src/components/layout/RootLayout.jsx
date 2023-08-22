import React from "react";
import { Container } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Outlet } from 'react-router-dom';
const Layout = ({ children }) => {
  return (
    <div style={{ height: "100%"}}>
      <Navbar />
      <Container
        maxWidth="lg"
        style={{ paddingTop: "64px", paddingBottom: "64px" }}
      >
        <Outlet />
      </Container>
      <Footer /> 
    </ div>
  );
};

export default RootLayout;
