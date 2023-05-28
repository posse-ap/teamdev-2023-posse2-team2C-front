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
        <Grid container alignItems="center">
          <Grid item xs={4}>
            <Typography color={"black"}>
              {user ? user.name : "Loading..."}さんのマイページ
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <MenuItem
              sx={{ color: "black", justifyContent: "center" }}
              onClick={() => onClickNavigation("/mypage")}
              selected={router.pathname === "/mypage"}
            >
              アカウント情報
            </MenuItem>
          </Grid>
          <Grid item xs={2}>
            <MenuItem
              sx={{ color: "black", justifyContent: "center" }}
              onClick={() => onClickNavigation("/mypage/list")}
              selected={router.pathname === "/mypage/list"}
            >
              出品一覧
            </MenuItem>
          </Grid>
          <Grid item xs={2}>
            <MenuItem
              sx={{ color: "black" , justifyContent: "center" }}
              onClick={() => onClickNavigation("/mypage/rentalItems")}
              selected={router.pathname === "/mypage/rentalItems"}
            >
              レンタル品
            </MenuItem>
          </Grid>
          <Grid item xs={2}>
            <MenuItem
              sx={{ color: "black" , justifyContent: "center"}}
              onClick={() => onClickNavigation("/mypage/helpPage")}
              selected={router.pathname === "/mypage/helpPage"}
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
