import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import logoSvg from '@/assets/longLogo.png';
import { Link as RouterLink} from "react-router-dom";

const NavbarLogo = styled('img')({
  width: '15rem',
  height: 'auto',
});

const LinkButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.black,
  "&:hover": {
    background: "transparent",
    color: "black"
  }
}));
{/*styled(Button)`
  &:hover {
    background: transparent;
    color: black; 
  }
`; */}




const NavbarButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.light,
  "&:hover": {
    color: theme.palette.common.black
  }
}));

const ShoppingCartBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.common.light,
    color: "black",
    border: "1px solid black",
  }
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const isLoggedIn = () => {
    return false;
  }

  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ flexGrow: 1, borderBottom: "1px solid black" }}>
      <AppBar position="static" elevation={0} style={{ background: 'white' }}>
        <Toolbar>
          {/* Header Left Section */}
          <Box sx={{ display: { xs: "none", md: "flex" }  }}>
            {/* Link to products section */}
            <LinkButton
              size="small"
              edge="end"
              aria-label="shop button"
              aria-haspopup="true"
              sx={{ mr: 5 }}
              component={RouterLink} to={"products"}
              >
              Shop
            </LinkButton>
            

            {/* Link to about section */}
            <LinkButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              component={RouterLink} to={"about"}
              // color="common.black"
              >
              About
            </LinkButton>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          
          <RouterLink to={"/"}>
            <NavbarLogo src={logoSvg} alt="The Tea Lab" sx={{ mx : "auto", }} />
          </RouterLink>

          <Box sx={{ flexGrow: 1 }} />

          {/* Header Right Section */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* Search Products button */}
            <NavbarButton
              size="large"
              edge="end"
              aria-label="search bar"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="primary.light"
              sx={{ mr: 0.5 }}
            >
              <SearchIcon sx={{ fontSize: "2rem",  }} />
            </NavbarButton>

            {/* Profile Icon */}
            <NavbarButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="primary.light"
              sx={{ mr: 0.5 }}
            >
              {/* <RouterLink to={isLoggedIn() ? "/" : "/login"} > */}
                {/* <NavbarLogo src={logoSvg} alt="The Tea Lab" sx={{ mx : "auto", }} /> */}
                <AccountCircle sx={{ fontSize: "2rem" }} />
              {/* </RouterLink> */}
            </NavbarButton>

            {/* Checkout Cart */}
            <NavbarButton
              size="large"
              aria-label="checkout cart of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <ShoppingCartBadge badgeContent={1} >
                <ShoppingBagOutlinedIcon sx={{ fontSize: "2rem" }} />
              </ShoppingCartBadge>
            </NavbarButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
