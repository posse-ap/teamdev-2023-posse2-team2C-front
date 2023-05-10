import React from "react";
import CardForm from "../components/CardForm.js";
import UserHeader from "../components/UserHeader-simple.js";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Typography, Container, TextField, Button, Link } from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };


function UserForm() {
  return (
    <div className="App">
      <UserHeader></UserHeader>
      <Container>
        <Box className="flex items-center">
            <Link href="/UserTop">
              <span><ArrowBackIosIcon /></span>
            </Link>
            
            <Typography variant="h4" component="h1">
                アイテム出品
            </Typography>
        </Box>
        <Box className="flex justify-center mt-10">
          <Box className="w-6/12">
            <Typography variant="h6" component="h2" className="my-2">
              出品アイテムのプレビュー
            </Typography>
            <CardForm />
          </Box>
          <Box className="w-6/12">
            <Typography variant="h6" component="h2" className="my-2">
              アイテム名
            </Typography>
            <TextField label="item name" variant="filled" className="w-full" />
            <Box>
              <Typography variant="h6" component="h2" className="my-2">
                商品の説明
              </Typography>
              <TextField
                label="description"
                multiline
                rows={4}
                variant="filled"
                className="w-full"
              />
            </Box>
          </Box>
        </Box>
        <Box className="mt-10">
          <Typography variant="h6" component="h2">
            管理者に伝えたいこと（任意）
          </Typography>
          <TextField label="" variant="filled" className="w-full" />
        </Box>
        <Box className="flex justify-center">
        <Link href="/">
        <Button variant="contained" className="rounded-md bg-teal-400 px-2 py-3 my-2 text-lg">確認画面へ</Button>
        </Link>
        </Box>
      </Container>
    </div>
  );
}

export default UserForm;
