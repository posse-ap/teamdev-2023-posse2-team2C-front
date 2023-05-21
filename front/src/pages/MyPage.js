import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid,
  Button,
} from "@mui/material";
import { UserService } from "../services/userService";

const UserManagement = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await UserService.fetchUserInfo();
      setUserInfo(data);
    };

    fetchData();
  }, []);

  console.log(userInfo);

  return (
    <Box sx={{ p: 4 }}>
      {/* <Detail> */}
      {/* <PointHistory/> */}
      {/* </Detail> */}
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {/* <Acount /> */}
        <ListItem style={{ display: "flex", flexDirection: "column" }}>
          <Box className="rounded-md bg-red-500 mr-auto mb-2">
            <Typography
              variant="body2"
              component="p"
              className="text-white font-extrabold p-2"
            >
              アカウント登録
            </Typography>
          </Box>
          <Grid container alignItems="center" style={{ height: "100%" }}>
            <Grid item xs={2}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2" color="text.primary">
                ユーザー名: {userInfo?.account?.name}
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        <Divider component="li" />
      {/* <Point /> */}
        <ListItem style={{ display: "flex", flexDirection: "column" }}>
          <Box className="rounded-md bg-red-500 mr-auto mb-2">
            <Typography
              variant="body2"
              component="p"
              className="text-white font-extrabold p-2"
            >
              POINT
            </Typography>
          </Box>
          <Grid
            container
            alignItems="center"
            style={{ height: "100%", margin: 4 }}
          >
            <Grid item xs={6}>
              <Typography variant="body2" color="text.primary">
                今月の利用状況
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color="text.primary" fontSize="20px">
                {userInfo?.point?.this_month}pt
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button className="bg-gray-100 text-teal-400 font-bold hover:bg-gray-200">
                詳細
              </Button>
            </Grid>
            <Box color="text.secondary" fontSize="12px" marginLeft="auto">
              利用上限まで残り {5000 - userInfo?.point?.this_month}pt
            </Box>
          </Grid>
          <Grid
            container
            alignItems="center"
            style={{ height: "100%", margin: 4 }}
          >
            <Grid item xs={6}>
              <Typography variant="body2" color="text.primary">
                先月までの利用履歴
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color="text.primary" fontSize="20px">
                {userInfo?.point?.history}pt
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button className="bg-gray-100 text-teal-400 font-bold hover:bg-gray-200">
                詳細
              </Button>
            </Grid>
          </Grid>
        </ListItem>
        <Divider component="li" />
      {/* <Coin /> */}
        <ListItem style={{ display: "flex", flexDirection: "column" }}>
          <Box className="rounded-md bg-red-500 mr-auto mb-2">
            <Typography
              variant="body2"
              component="p"
              className="text-white font-extrabold p-2"
            >
              COIN
            </Typography>
          </Box>
          <Grid
            container
            alignItems="center"
            style={{ height: "100%", margin: 4 }}
          >
            <Grid item xs={6}>
              <Typography variant="body2" color="text.primary">
                所持コイン
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color="text.primary" fontSize="20px">
                {userInfo?.coin?.hold}pt
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button className="bg-teal-400 text-white font-bold hover:bg-teal-500">
                換金
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            style={{ height: "100%", margin: 4 }}
          >
            <Grid item xs={6}>
              <Typography variant="body2" color="text.primary">
                累計換金額
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color="text.primary" fontSize="20px">
                {userInfo?.coin?.deposit}pt
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button className="bg-gray-100 text-teal-400 font-bold hover:bg-gray-200">
                詳細
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            style={{ height: "100%", margin: 4 }}
          >
            <Grid item xs={6}>
              <Typography variant="body2" color="text.primary">
                来月取得見込みコイン
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color="text.primary" fontSize="20px">
                {userInfo?.coin?.estimate}pt
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button className="bg-gray-100 text-teal-400 font-bold hover:bg-gray-200">
                詳細
              </Button>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </Box>
  );
};

export default UserManagement;
