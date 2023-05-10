import React, { useState, useEffect } from 'react';
import Card from "../components/Card.js";
import UserTab from "../components/UserTab.js";
import UserHeader from "../components/UserHeader.js";
import SelectBox from "../components/SelectBox.js";
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
  InputLabel
} from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };


// const eventData = [
//   // status_idで絞り込みだね
  // {
  //   id: 1,
  //   image:
  //     "https://www.nakool.com/wordpress/wp-content/uploads/2014/06/IMG_9993.jpg",
  //   name: "てらしの弾き語り講座",
  //   participants: 3,
  //   owner_id: 5,
  //   owner_name: "金子夏蓮"
  //   created_at: "2022-12-1",
  // },
//   {
//     id: 2,
//     image:
//       "https://www.nakool.com/wordpress/wp-content/uploads/2014/06/IMG_9993.jpg",
//     name: "夏蓮の弾き語り講座",
//     participants: 3,
//     owner_id: 2,
//     created_at: "2022-12-1",
//   },
//   {
//     id: 3,
//     image:
//       "https://www.nakool.com/wordpress/wp-content/uploads/2014/06/IMG_9993.jpg",
//     name: "みゆきの弾き語り講座",
//     participants: 3,
//     owner_id: 1,
//     created_at: "2022-12-1",
//   },
// ];

const UserTop=() => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/api/items/1');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(items);
  return (
    <div className="App">
      <UserHeader></UserHeader>
      <UserTab></UserTab>
      <Container>
        <img
          src="https://cdn.discordapp.com/attachments/1102773675498934385/1102901899100962847/Screen_Shot_2023-05-02_at_19.17.58.png"
          className="hero-img"
        />
        <Box className="my-2 flex justify-between">
          <Box className="flex items-center">
            <Checkbox {...label} />
            Coming Soonも表示
            <Checkbox {...label} />
            貸出中も表示
          </Box>
        <SelectBox></SelectBox>
        </Box>
        <Grid container spacing={10}>
          {items.map((item) => (
            <Card event={item} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default UserTop;