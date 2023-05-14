import React, { useState, useEffect } from "react";
import Card from "../components/Card.js";
import UserTab from "../components/UserTab.js";
import UserHeader from "../components/UserHeader.js";
import FavoriteIcon from "../components/LikeButton.js";
import PropTypes from "prop-types";
import {
  Box,
  Button,
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
  const [item, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/api/item/1");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(item);
  console.log(item.history);


  return (
    <div className="App">
      <UserHeader></UserHeader>
      <UserTab></UserTab>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box className="w-1/2 pr-20">
          <Box className="border border-gray-400 ml-10 mb-5 p-5">
            <img src={item.image_url} alt="アイテムの画像" />
          </Box>
          <Box
            style={{
              padding: 0,
              margin: 10,
            }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" component="p" className="ml-10">
              {item.owner}
            </Typography>
            <Typography variant="h6" component="p">
              Slackで質問
            </Typography>
          </Box>
        </Box>
        <Box className="w-1/2">
          <Box
            style={{ padding: 0 }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" component="h2">
              {item.name}
            </Typography>
            <FavoriteIcon></FavoriteIcon>
          </Box>
          <Box
            style={{ padding: 0 }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" component="p" className="text-teal-400">
              {item.price}pt
            </Typography>
            <Typography variant="h6" component="p" className="underline">
              {item.likes} likes
            </Typography>
          </Box>
          <Button
            variant="contained"
            className="rounded-md bg-teal-400 px-2 py-3 mx-20 my-5 w-2/3 text-3xl"
            // onClick={openModal}
          >
            借りる！
          </Button>
          <Typography variant="h6" component="p">
            商品の説明
          </Typography>
          <Box className="ml-10 mb-5">
            <Typography variant="subtitle" component="p">
              {item.detail}
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、
            </Typography>
          </Box>
          <Typography variant="h6" component="p">
            出品日
          </Typography>
          <Box className="ml-10 mb-5">
            <Typography variant="subtitle" component="p">
              {item.created_at}
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box sx={{ borderTop: "1px solid gray", marginTop: 4 }}>

      </Box>
    </div>
  );
};

export default UserTop;
