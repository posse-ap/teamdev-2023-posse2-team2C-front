import React from "react";
import { Grid, AppBar, Toolbar, MenuItem, Typography, Box } from "@mui/material";
import { UserContext } from "../pages/_app";

const MyPageHeader = () => {
    const user = React.useContext(UserContext);

    return (
      <AppBar position="static" className="bg-blue-50" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
            <Typography color={'black'}>
            {user ? user.name : 'Loading...'}さんのマイページ
            </Typography>
            </Grid>
            <Grid item>
              <MenuItem sx={{ color: 'black' }}>
              <Typography textAlign="center">アカウント情報</Typography>
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem sx={{ color: 'black' }}>出品・主催</MenuItem>
            </Grid>
            <Grid item>
              <MenuItem sx={{ color: 'black' }}>レンタル・参加イベント</MenuItem>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  };

  export default MyPageHeader;
