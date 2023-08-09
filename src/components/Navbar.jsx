import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import logoSvg from '../assets/logo.png';

const NavbarLogo = styled('img')({
  width: '15rem',
  height: 'auto',
});

const LinkButton = styled(IconButton)`
  &:hover {
    background: transparent;
    color: black; 
  }
`;

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
  },
  
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

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
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="common.black"
              sx={{ mr: 5 }}
            >
              Shop
            </LinkButton>

            {/* Link to about section */}
            <LinkButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="common.black"

            >
              About
            </LinkButton>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          
          <NavbarLogo src={logoSvg} alt="The Tea Lab" sx={{ mx : "auto" }} />

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
              <AccountCircle sx={{ fontSize: "2rem" }} />
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
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
