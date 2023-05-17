import React, { useState, useEffect } from "react";
import UserTab from "../../components/UserTab.js";
import UserHeader from "../../components/UserHeader.js";
import FavoriteIcon from "../../components/LikeButton.js";
import { useRouter } from "next/router";
import { Box, Button, Typography, Container, Link } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ItemDetail = () => {
  const [item, setItems] = useState([]);
  const router = useRouter();
  console.log(router.query.item_num);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost/api/items/${router.query.item_num}`
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const histories = item.history;
  const payment_url = `/ItemPayment/${router.query.item_num}`;

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
        <Link href="/UserTop">
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
            href={payment_url}
            className="rounded-md bg-teal-400 hover:bg-teal-500 px-2 py-3 mx-20 my-5 w-2/3 text-3xl text-white"
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
        {console.log(histories)}
        {histories?.map((history) => (
          <div key={history.name}>
            <p>{history.name}</p>
            <p>
              {history.start} - {history.end}
            </p>
          </div>
        ))}
      </Box>
    </div>
  );
};

ItemDetail.getInitialProps = async ({ query }) => {
  const { item_num } = query;
  return { item_num };
};

export default ItemDetail;
