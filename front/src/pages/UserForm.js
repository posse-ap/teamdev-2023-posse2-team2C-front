import React, { useState } from "react";
import axios from "axios";
import CardForm from "../components/CardForm.js";
import Modal from "../components/Modal.js";
import UserHeader from "../components/UserHeader-simple.js";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Link,
} from "@mui/material";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const UserForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState();
  const [itemName, setItemName] = useState("");
  const [detail, setDetail] = useState("");
  const [message, setMessage] = useState("");

  const changeFile = (file) => {
    setFile(file);
  };
  const changeItemName = (e) => {
    setItemName(e.target.value);
  };
  const changeDetail = (e) => {
    setDetail(e.target.value);
  };
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePost = async () => {
    const postParams = {
      image: file,
      itemName: itemName,
      detail: detail,
      message: message,
    };
    const params = new FormData();
      Object.keys(postParams).forEach(function(key) {
        params.append(key, this[key]);
      }, postParams);
    await axios
      .post("http://localhost:80/api/createItem", params, {
        withCredentials: true,
        header: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        alert(response.data);
      });
  };

  return (
    <div className="App">
      <UserHeader></UserHeader>
      <Container>
        <Box className="flex items-center">
          <Link href="/UserTop">
            <span>
              <ArrowBackIosIcon />
            </span>
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
            <CardForm changeFile={changeFile} file={file} />
          </Box>
          <Box className="w-6/12">
            <Typography variant="h6" component="h2" className="my-2">
              アイテム名
            </Typography>
            <TextField
              label="item name"
              variant="filled"
              className="w-full"
              name="itemName"
              onChange={changeItemName}
            />
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
                name="detail"
                onChange={changeDetail}
              />
            </Box>
          </Box>
        </Box>
        <Box className="mt-10">
          <Typography variant="h6" component="h2">
            管理者に伝えたいこと（任意）
          </Typography>
          <TextField
            label=""
            variant="filled"
            className="w-full"
            name="message"
            onChange={changeMessage}
          />
        </Box>
        <Box className="flex justify-center">
          <Button
            variant="contained"
            className="rounded-md bg-teal-400 px-2 py-3 my-2 text-lg"
            onClick={openModal}
          >
            確認画面へ
          </Button>
          <Modal
            open={isModalOpen}
            onClose={closeModal}
            onConfirm={handlePost}
            title={"出品しますか？"}
            cancelButtonText="入力に戻る"
            confirmButtonText="はい"
          />
        </Box>
      </Container>
    </div>
  );
};

export default UserForm;
