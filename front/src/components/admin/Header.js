import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserContext } from "../../pages/_app";
import { Button, Grid } from "@mui/material";
import axios from "axios";

export default function Header() {
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
      <MenuItem onClick={() => onClickNavigation("/mypage")}>
        アカウント情報
      </MenuItem>
      <MenuItem onClick={() => onClickNavigation("/mypage/helpPage")}>
        出品
      </MenuItem>
      <MenuItem onClick={() => onClickNavigation("/mypage/helpPage")}>
        レンタル品
      </MenuItem>
      <MenuItem onClick={() => onClickNavigation("/mypage/helpPage")}>
        ヘルプ
      </MenuItem>
    </Menu>
  );


  const logoutClick = () => {
    axios
      .get("http://localhost:80/api/logout", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        alert(response.data.message + ' が完了しました')
      });
  };

  return (
    <Box sx={{ flexGrow: 1, zIndex: 9999 }}>
      <AppBar position="static" className="bg-white" elevation={0}>
        <Toolbar sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="/UserTop">
                <img
                  src="https://cdn.discordapp.com/attachments/1088742577391546449/1102848847698460672/Screen_Shot_2023-05-02_at_15.47.23.png"
                  className="logo"
                />
              </Link>
              <Typography color={"black"}>管理者ページ</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link href="/UserTop">
                <Typography color={"blue"} sx={{ marginRight: "30px" }}>ユーザー画面へ</Typography>
              </Link>
              <Button onClick={logoutClick}>
                <Typography color={"blue"}>ログアウト</Typography>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <AppBar position="static" className="bg-blue-50" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <Typography color={"black"}></Typography>
            </Grid>
            <Grid item xs={2}>
              <MenuItem
                sx={{ color: "black", justifyContent: "center" }}
                onClick={() => onClickNavigation("/admin/ListingReview")}
                selected={router.pathname === "/admin/ListingReview"}
              >
                出品審査
              </MenuItem>
            </Grid>
            <Grid item xs={2}>
              <MenuItem
                sx={{ color: "black", justifyContent: "center" }}
                onClick={() => onClickNavigation("/admin/Card")} // todo 出品管理ページのURL貼る
                selected={router.pathname === "/admin/Card"}
              >
                出品管理
              </MenuItem>
            </Grid>
            <Grid item xs={2}>
              <MenuItem
                sx={{ color: "black", justifyContent: "center" }}
                onClick={() => onClickNavigation("/admin/UserManagement")}
                selected={router.pathname === "/admin/UserManagement"}
              >
                ユーザー管理
              </MenuItem>
            </Grid>
            <Grid item xs={2}>
              <MenuItem
                sx={{ color: "black", justifyContent: "center" }}
                onClick={() => onClickNavigation("/admin/Conversion")}
                selected={router.pathname === "/admin/Conversion"}
              >
                換金管理
              </MenuItem>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
