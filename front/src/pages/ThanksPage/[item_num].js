import React, { useState, useEffect } from "react";
import UserHeader from "../../components/UserHeader";
import UserTab from "../../components/UserTab";
import { useRouter } from "next/router";
import { Box, Button, Typography, Container } from "@mui/material";

const ThanksPage = () => {
  const [item, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost/api/item_thanks/${router.query.item_num}`
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const { itemId } = router.query;

  return (
    <div className="App">
      <UserHeader></UserHeader>
      <UserTab></UserTab>
      <Container>
        <Box className="mx-auto mt-20 w-3/4 text-center">
          <Typography variant="h4" component="h2" className="mb-5">
            レンタルが完了しました。
          </Typography>
          <Typography variant="h6" component="h2" className="mb-5">
            出品者に通知を送信したので、これ以降は出品者の{item.owner}(@{item.slack_id})とやりとりしてください。
          </Typography>
        </Box>
        <Box className="border border-gray-400 mx-auto mt-5 p-5 w-3/4 flex">
          <Box className="w-1/3">
            <img
              src={item.image_url}
              alt="アイテムの画像"
              className="mx-auto"
            />
          </Box>
          <Box className="w-2/3 p-10">
            <Typography variant="h4" component="h2" className="mb-5">
              {item.name}
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
        <Box className="flex justify-center mt-10">
          <Button
            variant="contained"
            className="rounded-md bg-teal-400 hover:bg-teal-500 px-2 py-3 w-1/2 text-3xl"
            // onClick={openModal}
          >
            TOPへ戻る
          </Button>
        </Box>
      </Container>
    </div>
  );
};

ThanksPage.getInitialProps = async ({ query }) => {
  const { itemId } = query;
  return { itemId };
};

export default ThanksPage;
