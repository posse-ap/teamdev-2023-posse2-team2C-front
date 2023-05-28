import React, { useState, useEffect } from "react";
import Card from "@/components/Card.js";
import UserTab from "@/components/UserTab.js";
import UserHeader from "@/components/UserHeader.js";
import MyPageHeader from "@/components/MyPageHeader.js";
import SelectBox from "@/components/SelectBox.js";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Paper,
  Switch,
  Container,
  Grid,
  dividerClasses,
  Checkbox,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const UserTop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost/api/mypage/rentals");
          const data = await response.json();
          if (data !== null) {
            setItems(data);
          } else {
            setItems([]); // 空の配列をセットする
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);

  console.log(items);
  if (items.length !== 0) {
    return (
      <div className="App">
        <UserHeader></UserHeader>
        {/* <UserTab></UserTab> */}
        <MyPageHeader />
        <Container>
          <Grid container spacing={10}>
            {items?.map((item) => (
              <Card key={item.id} event={item} />
            ))}
          </Grid>
        </Container>
      </div>
    );
  } else {
    return (
      <div className="App">
        <UserHeader></UserHeader>
        {/* <UserTab></UserTab> */}
        <MyPageHeader />
        <Container>
          <Typography variant="h6" component="h1" gutterBottom sx={{ px: 2, my:10}}>
            現在レンタル中のアイテムはありません。
          </Typography>
        </Container>
      </div>
    );
  }
};

export default UserTop;
