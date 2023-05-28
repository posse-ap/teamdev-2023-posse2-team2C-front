import React, { useState, useEffect } from "react";
import Card from "@/components/Card.js";
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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const UserTop = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
const fetchData = async () => {
  try {
    const response = await fetch(
      `http://localhost/api/mypage/rentals`
    );

    if (response.ok) {
      const data = await response.json();
      setItems(data);
    } else {
      console.error("Error fetching data:", response.status);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
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
        <SelectBox></SelectBox>
        {items ? (
          <Grid container spacing={10}>
            {items?.map((item) => (
              <Card key={item.id} event={item} />
            ))}
          </Grid>
        ) : (
          <p>何もありません</p>
        )}
      </Container>
    </div>
  );
};

export default UserTop;