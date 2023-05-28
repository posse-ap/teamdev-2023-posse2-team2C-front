import React, { useState, useEffect } from "react";
import SimpleHeader from "@/components/UserHeader-simple.js";
import { useRouter } from "next/router";

import { Box, Button, Typography, Container } from "@mui/material";
import axios from "axios";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ItemPayment = () => {
  const [item, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost/api/items/${router.query.item_num}`,{
            credentials: "include", // これがないと、フェッチはクッキーを含まないらしい → middleware auth:sanctum でrejectされちゃう
          }
        );
        const data = await response.json();
        setItems(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const storeRentalData = async (id) => {
    await axios 
      .get(`http://localhost/api/items/payment/${router.query.item_num}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        router.push(`thanksPage/${router.query.item_num}`)
      });
      // const data = await response.json();
      // return data;
  };

  const { itemId } = router.query;

  return (
    <div className="App">
      <SimpleHeader></SimpleHeader>
      <Container>
        <Box className="border border-gray-400 mx-auto mt-20 p-5 w-3/4 flex">
          <Box className="w-1/3">
            <img
              src={item.image_url}
              alt="アイテムの画像"
              className="mx-auto"
            />
          </Box>
          <Box className="w-2/3 p-10">
            <Typography variant="h4" component="h2" className="mb-5">
              {item.name} {itemId}
            </Typography>
            <Box className="flex">
              <Typography variant="h5" component="p" className="text-teal-400">
                {item.price}pt
              </Typography>
              <Typography variant="h5" component="p" className="ml-10">
                {item.owner}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="mx-auto mt-20 px-32 w-3/4 text-left">
          <Box className="w-full flex pl-24 pr-10 justify-between">
            <Typography variant="h5" component="p">
              所有pt：
            </Typography>
            <Typography variant="h5" component="p">
            {item.user_point}pt
            </Typography>
          </Box>
          <Box className="w-full flex pl-24 pr-10 justify-between">
            <Typography variant="h5" component="p">
              商品pt：
            </Typography>
            <Typography variant="h5" component="p">
            {item.price}pt
            </Typography>
          </Box>
          <Box className="border-t border-gray-400 pr-10 w-full flex justify-between">
            <Typography variant="h5" component="p">
              確定後の所有pt：
            </Typography>
            <Typography variant="h5" component="p">
              {item.user_point - item.price}pt
            </Typography>
          </Box>
        </Box>
        <Box className="flex justify-center mt-10">
          <Button
            variant="contained"
            className="rounded-md bg-teal-400 hover:bg-teal-500 px-2 py-3 w-1/2 text-3xl"
            onClick={storeRentalData}
          >
            確定
          </Button>
        </Box>
      </Container>
    </div>
  );
};

ItemPayment.getInitialProps = async ({ query }) => {
  const { itemId } = query;
  return { itemId };
};

export default ItemPayment;
