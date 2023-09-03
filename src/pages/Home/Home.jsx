import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import HeroSection from "./components/HeroSection/HeroSection";
import CategoryItem from "./components/CategoryItem/CategoryItem";

const Home = () => {
  const categories = [
    {
      name: "Tea",
      // img: "https://images.pexels.com/photos/17780418/pexels-photo-17780418/free-photo-of-coffee-in-cup-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img: "https://cdn.pixabay.com/photo/2016/11/04/08/45/tea-leaf-1797125_960_720.jpg",
    },
    {
      name: "Coffee",
      // img: "https://images.pexels.com/photos/2659387/pexels-photo-2659387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img: "https://cdn.pixabay.com/photo/2018/05/12/00/32/coffee-3392168_960_720.jpg",
    },
    {
      name: "Equipment",
      // img: "https://images.pexels.com/photos/12176053/pexels-photo-12176053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img: "https://images.unsplash.com/photo-1622088891722-c6f91b80627f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <Container sx={{ mt: 6 }}>
        <Typography variant="h4" paragraph>
          Shop by category
        </Typography>
        <Grid container spacing={3}>
          {categories.slice(0).map(({ name, img }, idx) => (
            <CategoryItem key={idx} name={name} imgUrl={img} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
