import React, { useState, useEffect } from "react";
import Card from "@/components/mypage/Card.js";
import UserTab from "@/components/UserTab.js";
import UserHeader from "@/components/UserHeader.js";
import MyPageHeader from "@/components/MyPageHeader.js";
import {
  Box,
  Typography,
  Paper,
  Switch,
  Container,
  Grid,
} from "@mui/material";
import axios from "axios";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const cardList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost/api/mypage/myItems`, {
          withCredentials: true,
        })
        .then((response) => {
          setItems(response.data);
        });
    };

    fetchData();
  }, []);

  console.log(items);
  if (items.length !== 0) {
    return (
      <div className="App">
        <UserHeader></UserHeader>
        <MyPageHeader />
        <Container>
          <Grid container spacing={10}>
            {items?.map((item) => (
              <Card event={item} />
            ))}
          </Grid>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="App">
        <UserHeader></UserHeader>
        <MyPageHeader />
        <Container>
          <Typography
            variant="h6"
            component="h1"
            gutterBottom
            sx={{ px: 2, my: 10 }}
          >
            現在出品中のアイテムはありません。
          </Typography>
        </Container>
      </div>
    );
  }
};

export default cardList;
