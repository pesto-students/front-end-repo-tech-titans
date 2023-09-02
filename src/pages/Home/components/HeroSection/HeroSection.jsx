import {
  Typography,
  Button,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCloudinaryCloudName } from "@/utils/config";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [heroImageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const cloudName = getCloudinaryCloudName();
    const url = `https://res.cloudinary.com/${cloudName}/image/upload/w_550,c_scale/tea-lab_hero-img.jpg`;
    setImageUrl(url);
  }, []);

  const HeroText = () => {
    const textStyle = {
      padding: "16px",
      ...(isMobile && { textAlign: "center" }),
    };
    return (
      <Paper elevation={0} style={textStyle}>
        <Typography
          variant={isMobile ? "h2" : "h1"}
          style={{ marginBottom: "10px" }}
        >
          Awaken Your Senses
        </Typography>
        <Typography variant="h5" paragraph>
          Explore a world of fine teas, coffees, and brewing essentials and
          elevate your daily ritual with every sip.
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to={"products"}
          style={{ backgroundColor: "black" }}
        >
          Shop Now
        </Button>
      </Paper>
    );
  };

  const LargeScreenComponent = () => (
    <Grid container spacing={4} direction="row-reverse" alignItems="center">
      <Grid item xs={12} md={5} container justifyContent="right">
        <img
          src={heroImageUrl}
          alt="Hero"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} md={6} style={{ margin: "0 auto" }}>
        <HeroText />
      </Grid>
    </Grid>
  );

  const MobileScreenComponent = () => (
    <>
      <img
        src={heroImageUrl}
        alt="Hero"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <HeroText />
    </>
  );
  return isMobile ? <MobileScreenComponent /> : <LargeScreenComponent />;
};

export default HeroSection;
