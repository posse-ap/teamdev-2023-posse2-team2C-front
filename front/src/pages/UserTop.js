import React, { useState, useEffect } from "react";
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
  InputLabel,
} from "@mui/material";
import axios from "./auth/axios.js";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const UserTop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("http://localhost/api/cards");
      await axios
        .get("http://localhost/api/cards", {
          withCredentials: true,
        })
        .then((response) => {
          setItems(response.data);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <UserHeader></UserHeader>
      {/* <UserTab></UserTab> */}
      <Container>
        <img
          src="https://cdn.discordapp.com/attachments/1102773675498934385/1102901899100962847/Screen_Shot_2023-05-02_at_19.17.58.png"
          className="hero-img"
        />
        <Box className="my-2 flex justify-between">
          {/* <Box className="flex items-center">
            <Checkbox {...label} />
            Coming Soonも表示
            <Checkbox {...label} />
            貸出中も表示
          </Box> */}
          {/* <SelectBox></SelectBox> */}
        </Box>
        <Grid container spacing={10}>
          {items?.map((item) => (
            <Card event={item} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default UserTop;
