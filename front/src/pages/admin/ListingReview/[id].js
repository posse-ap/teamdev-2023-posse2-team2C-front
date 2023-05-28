import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FavoriteIcon from "@/components/LikeButton.js";
import { Box, Button, Typography, Container, Link } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TextField from "@mui/material/TextField";
import Header from "../../../components/admin/Header";

function ListingReviewItem() {
  const [item, setItems] = useState([]);
  const [price, setPrice] = useState();
  const router = useRouter();

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const clickConfirm = (price) => {
    axios
      .post(
        `http://localhost:80/api/confirm/${router.query.id}`,
        { price: price },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        alert(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  const clickReject = () => {
    axios
      .get(`http://localhost:80/api/reject/${router.query.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        alert(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost/api/items/${router.query.id}`
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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

  return (
    <div className="App">
      <Header></Header>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link href="/admin/ListingReview">
          <span>
            <ArrowBackIosIcon />
          </span>
        </Link>
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
          </Box>
          <Box
            style={{ padding: 0 }}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
          </Box>
          <Typography variant="h6" component="p">
            商品の説明
          </Typography>
          <Box className="ml-10 mb-5">
            <Typography variant="subtitle" component="p">
              {item.detail}
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
          <TextField
            margin="normal"
            required
            fullWidth
            id="price"
            label="price"
            name="price"
            autoFocus
            type="number"
            onChange={changePrice}
            className="w-2/3 rounded-md mx-20"
          />
          <Button
            className="rounded-md bg-teal-400 hover:bg-teal-500 px-2 py-3 mx-20 my-5 w-2/3 text-3xl text-white"
            onClick={() => clickConfirm(price)}
          >
            承認
          </Button>
          <Button className="rounded-md bg-gray-100 hover:bg-gray-200 px-2 py-3 mx-20 my-5 w-2/3 text-3xl text-teal-400" onClick={clickReject}>
            却下
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default ListingReviewItem;
