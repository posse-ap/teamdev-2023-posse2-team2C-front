import React from "react";
import { Grid, AppBar, Toolbar, MenuItem, Typography } from "@mui/material";
import { UserContext } from "../pages/_app";
import { useRouter } from "next/router";

const MyPageHeader = () => {
  const user = React.useContext(UserContext);
  const router = useRouter();

  const onClickNavigation = (path) => {
    router.push(path);
  };

  return (
    <AppBar position="static" className="bg-blue-50" elevation={0}>
      <Toolbar>
        <Grid container alignItems="center" spacing={10}>
          <Grid item xs={4}>
            <Typography color={"black"}>
              {user ? user.name : "Loading..."}さんのマイページ
            </Typography>
          </Grid>
          <Grid item>
            <MenuItem
              sx={{ color: "black" }}
              onClick={() => onClickNavigation("/MyPage")}
              selected={router.pathname === "/MyPage"}
            >
              アカウント情報
            </MenuItem>
          </Grid>
          <Grid item>
            <MenuItem
              sx={{ color: "black" }}
              onClick={() => onClickNavigation("/MyPage/list")}
              selected={router.pathname === "/MyPage/list"}
            >
              出品
            </MenuItem>
          </Grid>
          <Grid item>
            <MenuItem
              sx={{ color: "black" }}
              onClick={() => onClickNavigation("/MyPage/rentalItems")}
              selected={router.pathname === "/MyPage/rentalItems"}
            >
              レンタル品
            </MenuItem>
          </Grid>
          <Grid item>
            <MenuItem
              sx={{ color: "black" }}
              onClick={() => onClickNavigation("/MyPage/helpPage")}
              selected={router.pathname === "/MyPage/helpPage"}
            >
              ヘルプ
            </MenuItem>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MyPageHeader;
