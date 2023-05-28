import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link  from 'next/link'
import { useRouter } from "next/router";
import { UserContext } from "../pages/_app";


export default function UserHeader() {
  const user = React.useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();

  const onClickNavigation = (path) => {
    router.push(path);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
      <MenuItem onClick={() => onClickNavigation("/mypage")}>アカウント情報</MenuItem>
      <MenuItem onClick={() => onClickNavigation("/mypage/helpPage")}>出品</MenuItem>
      <MenuItem onClick={() => onClickNavigation("/mypage/helpPage")}>レンタル品</MenuItem>
      <MenuItem onClick={() => onClickNavigation("/mypage/helpPage")}>ヘルプ</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, zIndex: 9999 }}>
      <AppBar position="static" className="bg-white" elevation={0}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "space-between",
            }}
          >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Link href="/UserTop">
                <img
                  src="https://cdn.discordapp.com/attachments/1088742577391546449/1102848847698460672/Screen_Shot_2023-05-02_at_15.47.23.png"
                  className="logo"
                />
            </Link>
          </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="subtitle"
              component="p"
              className="text-black mr-2"
            >
              {user? user.point + "pt/" + user.coin + "coin" : "Loading..."}
            </Typography>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              className="mr-2"
            >
              <AccountCircle />
            </IconButton>
            <Box className="rounded-md bg-teal-400">
              <Typography
                variant="subtitle"
                component="p"
                className="text-white font-bold px-4 py-1"
              >
                出品
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
