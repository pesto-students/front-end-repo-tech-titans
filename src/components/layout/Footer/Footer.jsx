import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import logoSvg from '@/assets/roundLogo.svg';

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

  const NavbarLogo = styled('img')({
    width: '5rem',
    position: "absolute",
    right: 0
  });

  return (
    <Footer position="static">
      <Toolbar>
        <Typography variant="body2">
          © The Tea Lab, 2023
        </Typography>
        <NavbarLogo src={logoSvg} alt="The Tea Lab" sx={{ mx : "auto" }} />
      </Toolbar>
    </Footer>
  );
};

export default Footer;
