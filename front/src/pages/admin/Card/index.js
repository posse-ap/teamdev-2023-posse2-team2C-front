import React, { useState, useEffect } from "react";
import Card from "@/components/admin/Card.js";
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
        .get("http://localhost/api/allCards", {
          withCredentials: true,
        })
        .then((response) => {
          setItems(response.data);
        });
    };
    axios
      .get("http://localhost:80/api/role", { withCredentials: true })
      .then((response) => {
        if (response.data !== 2) {
          alert("アクセス権限がありません。TOPページに戻ります。");
          router.push("/UserTop");
          return;
        } else {
          fetchData();
        }
      })
      .catch(function (error) {
        alert("ログイン情報がありません。");
        router.push("/auth/login");
        return;
      });
  }, []);

  console.log(items);
  if (items.length !== 0  ) { 
  return (
    <div className="App">
      <Container>
        <Typography variant="h4" component="h1" gutterBottom sx={{ px: 2 }}>
          全カード
        </Typography>
        <Grid container spacing={10}>
          {items?.map((item, index) => (
            <Card key={index} event={item} />
          ))}
        </Grid>
      </Container>
    </div>
  );
} else {
  return (
    <div className="App">
      <Container>
        <Typography variant="h4" component="h1" gutterBottom sx={{ px: 2 }}>
          全カード
        </Typography>
        <Typography variant="h6" component="h1" gutterBottom sx={{ px: 2 }}>
          現在出品されているアイテム・イベントはありません。
        </Typography>

      </Container>
    </div>
  )
}
};

export default cardList;
