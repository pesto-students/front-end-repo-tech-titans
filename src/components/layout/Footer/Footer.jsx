import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import logoSvg from "@/assets/roundLogo.svg";

const Footer = () => {
  const Footer = styled("footer")(({ theme }) => ({
    bottom: 0,
    padding: "0 16px",
    color: "#fff",
    backgroundColor: theme.palette.common.black,
  }));

  const Logo = styled("img")({
    width: "5rem",
    margin: 0,
  });

  return (
    <Footer>
      <Box py={1} px={3} style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body2">© The Tea Lab, 2023</Typography>
        <Logo src={logoSvg} alt="The Tea Lab" sx={{ ml: "auto" }} />
      </Box>
    </Footer>
  );
};

export default Footer;
