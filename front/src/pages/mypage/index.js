import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  Grid,
  Button,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { UserService } from "../../services/userService";
import UserHeader from "../../components/UserHeader.js";
import MyPageHeader from "../../components/MyPageHeader.js";
import { useSpring, animated } from "@react-spring/web";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Index = () => {
  const [userInfo, setUserInfo] = useState();
  const [detail, setDetail] = useState([]);
  const [detailTitle, setDetailTitle] = useState();
  const [detailDateName, setDetailDateName] = useState();
  const [detailOpen, setDetailOpen] = useState(false);
  const [convertValue, setConvertValue] = useState();
  const [unit, setUnit] = useState();
  const [isConvertCoinDisabled, setIsConvertCoinDisabled] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await UserService.fetchUserInfo();
      setUserInfo(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (convertValue !== null && userInfo?.coin?.hold - convertValue >= 0) {
      setIsConvertCoinDisabled(false);
    } else {
      setIsConvertCoinDisabled(true);
    }
  }, [convertValue, userInfo?.coin?.hold]);

  useEffect(() => {
    setUnit(
      detailOpen === "HistoryPoint" || detailOpen === "ThisMonthPoint"
        ? "pt"
        : "coin"
    );
  }, [detailOpen]);

  const handleOpenThisMonthPointDrawer = () => {
    const fetchData = async () => {
      const data = await UserService.fetchThisMonthPointDetail();
      setDetail(data);
    };
    fetchData();
    setDetailOpen("ThisMonthPoint");
    setDetailTitle("今月のpt利用状況");
    setDetailDateName("引落日");
  };

  const handleOpenHistoryPointDrawer = () => {
    const fetchData = async () => {
      const data = await UserService.fetchHistoryPointDetail();
      setDetail(data);
    };
    fetchData();
    setDetailOpen("HistoryPoint");
    setDetailTitle("先月までのpt利用履歴");
    setDetailDateName("引落日");
  };

  const handleOpenHistoryConvertCoinDrawer = () => {
    const fetchData = async () => {
      const data = await UserService.fetchHistoryConvertCoinDetail();
      setDetail(data);
    };
    fetchData();
    setDetailOpen("HistoryConvertCoin");
    setDetailTitle("換金状況");
    setDetailDateName("申請日");
  };

  const handleOpenDepositCoinDrawer = () => {
    const fetchData = async () => {
      const data = await UserService.fetchDepositCoinDetail();
      setDetail(data);
    };
    fetchData();
    setDetailOpen("DepositCoin");
    setDetailTitle("coin取得履歴");
    setDetailDateName("付与日");
  };

  const handleOpenEstimateCoinDrawer = () => {
    const fetchData = async () => {
      const data = await UserService.fetchEstimateCoinDetail();
      setDetail(data);
    };
    fetchData();
    setDetailOpen("EstimateCoin");
    setDetailTitle("取得見込みcoin");
    setDetailDateName("開始日");
  };

  const handleOpenConvertCoinDrawer = () => {
    setDetailOpen("ConvertCoin");
    setDetailTitle("換金申請");
  };

  const handleConvertCoin = async (convertCoinAmount) => {
    await UserService.convertCoin(convertCoinAmount);
    const data = await UserService.fetchUserInfo();
    setUserInfo(data);
  };

  const handleChangeConvertValue = (event) => {
    setConvertValue(event.target.value);
  };

  const slideStyles = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(0%)" },
    reverse: !detailOpen,
  });

  const Account = ({ title, userInfo }) => (
    <ListItem sx={{ display: "flex", flexDirection: "column" }}>
      <Box className="rounded-md bg-orange-500 mr-auto mb-2">
        <Typography
          variant="body2"
          component="p"
          className="text-white font-extrabold p-2"
        >
          {title}
        </Typography>
      </Box>
      <Grid container alignItems="center" sx={{ height: "100%" }}>
        <Grid item xs={2}>
          <ListItemAvatar>
            <AccountCircleIcon fontSize="large" color="disabled" />
          </ListItemAvatar>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" color="text.primary">
            ユーザー名: {userInfo?.account?.name}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  );

  const PointCoinDetail = ({ detail }) => {
    if (detail.length !== 0 && detailOpen !== "ConvertCoin") {
      return (
        <Box sx={{ maxWidth: 500 }}>
          <Typography>{detailTitle}</Typography>

          {detail?.map((item, index) => (
            <div key={index}>
              <ListItem
                
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Grid
                  container
                  alignItems="center"
                  style={{ height: "100%", margin: 4 }}
                >
                  <Grid item xs={8}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item>
                        <Box
                          className={
                            item?.type?.id === 1
                              ? "rounded-md bg-teal-400 mr-auto mb-2"
                              : "rounded-md bg-orange-500 mr-auto mb-2"
                          }
                        >
                          <Typography
                            variant="body2"
                            component="p"
                            className="text-white font-extrabold p-2"
                          >
                            {item?.type?.name}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item>
                        <Typography>
                          {detailDateName}：{item?.date}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography variant="body2" color="text.primary">
                      {detailOpen === "HistoryConvertCoin"
                        ? "注文ID"
                        : "注文名"}
                      ：{item?.name ?? item?.id}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography color="text.primary" fontSize="20px">
                      {item?.amount + unit}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
            </div>
          ))}
        </Box>
      );
    } else if (detailOpen === "ConvertCoin") {
      return (
        <Box>
          <Typography>{detailTitle}</Typography>
          <Grid container sx={{ paddingTop: 10 }}>
            <Grid item xs={5}>
              所有コイン：
            </Grid>
            <Grid item xs={7}>
              {userInfo?.coin?.hold}coin
            </Grid>
          </Grid>
          <Grid container sx={{ paddingTop: 5 }}>
            <Grid item xs={5}>
              換金額：
            </Grid>
            <Grid item xs={7}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  選んでください
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={convertValue}
                  label="ConvertValue"
                  onChange={handleChangeConvertValue}
                >
                  <MenuItem value={1000}>1000</MenuItem>
                  <MenuItem value={5000}>5000</MenuItem>
                  <MenuItem value={10000}>10000</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Divider sx={{ paddingTop: 3 }} />
          <Grid container sx={{ paddingTop: 3 }}>
            <Grid item xs={5}>
              {" "}
              換金後の所有コイン：
            </Grid>
            <Grid item xs={7}>
              {convertValue ? userInfo?.coin?.hold - convertValue : "???? "}coin
            </Grid>
          </Grid>
          <Button
            className={`font-bold mt-5 ${
              isConvertCoinDisabled
                ? "bg-gray-100"
                : "bg-teal-400 text-white hover:bg-teal-500"
            }`}
            disabled={isConvertCoinDisabled}
            onClick={
              isConvertCoinDisabled
                ? undefined
                : () => handleConvertCoin(convertValue)
            }
          >
            確定
          </Button>
        </Box>
      );
    } else {
      return (
        <Box>
          <Typography>{detailTitle}</Typography>
          <Box>データがありません。</Box>
        </Box>
      );
    }
  };

  return (
    <>
      <UserHeader />
      <MyPageHeader />
      <Grid container>
        <Grid item sx={{ p: 4 }} xs={6}>
          <List sx={{ width: "100%", maxWidth: 500 }}>
            <Account title="アカウント" userInfo={userInfo} />
            <Divider component="li" />
            {/* <Point /> */}
            <ListItem style={{ display: "flex", flexDirection: "column" }}>
              <Box className="rounded-md bg-orange-500 mr-auto mb-2">
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
                    所持ポイント
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography color="text.primary" fontSize="20px">
                    {userInfo?.point?.this_month}pt
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    className="bg-gray-100 text-teal-400 font-bold hover:bg-gray-200"
                    onClick={handleOpenThisMonthPointDrawer}
                  >
                    詳細
                  </Button>
                </Grid>
                <Box color="text.secondary" fontSize="12px" marginLeft="auto">
                  今月のご利用済みのポイント {5000 - userInfo?.point?.this_month}pt
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
                  <Button
                    className="bg-gray-100 text-teal-400 font-bold hover:bg-gray-200"
                    onClick={handleOpenHistoryPointDrawer}
                  >
                    詳細
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
            <Divider component="li" />
            {/* <Coin /> */}
            <ListItem style={{ display: "flex", flexDirection: "column" }}>
              <Grid container spacing={2}>
                <Grid item>
                  <Box className="rounded-md bg-orange-500 mr-auto mb-2">
                    <Typography
                      variant="body2"
                      component="p"
                      className="text-white font-extrabold p-2"
                    >
                      COIN
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Button
                    className="bg-gray-100 text-teal-400 font-bold hover:bg-gray-200"
                    onClick={handleOpenDepositCoinDrawer}
                  >
                    取得履歴
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
                    所持コイン
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography color="text.primary" fontSize="20px">
                    {userInfo?.coin?.hold}coin
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    className="bg-teal-400 text-white font-bold hover:bg-teal-500"
                    onClick={handleOpenConvertCoinDrawer}
                  >
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
                    {userInfo?.coin?.deposit}円
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    className="bg-gray-100 text-teal-400 font-bold hover:bg-gray-200"
                    onClick={handleOpenHistoryConvertCoinDrawer}
                  >
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
                    {userInfo?.coin?.estimate}coin
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    className="bg-gray-100 text-teal-400 font-bold hover:bg-gray-200"
                    onClick={handleOpenEstimateCoinDrawer}
                  >
                    詳細
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Grid>
        {/* <Detail> */}
        <animated.div
          style={{
            ...slideStyles,
            width: "50%",
            height: "100%",
            position: "absolute",
            right: 0,
            borderLeft: "2px solid gray",
            padding: "45px",
          }}
        >
          <PointCoinDetail detail={detail} />
        </animated.div>
      </Grid>
    </>
  );
};

export default Index;
