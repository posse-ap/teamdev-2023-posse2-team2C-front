import React, { useState, useEffect } from "react";
import Card from "@/components/mypage/Card.js";
import UserTab from "@/components/UserTab.js";
import UserHeader from "@/components/UserHeader.js";
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
  return (
    <div className="App">
      <Container>
        <Grid container spacing={10}>
          {items?.map((item) => (
            <Card event={item} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default cardList;
