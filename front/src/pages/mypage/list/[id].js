import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import CardForm from "@/components/CardForm.js";
import Modal from "@/components/Modal.js";
import UserHeader from "@/components/UserHeader-simple.js";
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
import Card from "@/components/Card.js";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const editForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [itemName, setItemName] = useState("");
  const [detail, setDetail] = useState("");
  const [item, setItem] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log(router.query.id);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:80/api/card/${router.query.id}`
        );
        const data = await response.json();
        await setItem(data);
        await setItemName(data["name"]);
        await setDetail(data["detail"]);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [router.query.id]);

  const changeFile = (file) => {
    setFile(file);
  };
  const changeItemName = (e) => {
    setItemName(e.target.value);
  };
  const changeDetail = (e) => {
    setDetail(e.target.value);
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
    };
    const params = new FormData();
    Object.keys(postParams).forEach(function (key) {
      params.append(key, this[key]);
    }, postParams);
    console.log(postParams);
    await axios
      .post(
        `http://localhost:80/api/itemUpdateByUser/${router.query.id}`,
        params,
        {
          withCredentials: true,
          header: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <UserHeader></UserHeader>
      <Container>
        <Box className="flex items-center">
          <Link href="/mypage/list">
            <span>
              <ArrowBackIosIcon />
            </span>
          </Link>

          <Typography variant="h4" component="h1">
            編集
          </Typography>
        </Box>
        <Box className="flex justify-center mt-10">
          <Box className="w-6/12">
            現在のカード
            {item ? (
              <Box className="w-2/3">
                <Card event={item} />
              </Box>
            ) : null}
            <Typography variant="h6" component="h2" className="my-2">
              新しい画像（変更しない場合なしでも可）
            </Typography>
            <CardForm changeFile={changeFile} file={file} />
          </Box>
          <Box className="w-6/12">
            <Typography variant="h6" component="h2" className="my-2">
              アイテム名
            </Typography>
            <TextField
              // label="item name"
              variant="filled"
              className="w-full"
              name="itemName"
              value={itemName}
              onChange={changeItemName}
            />
            <Box>
              <Typography variant="h6" component="h2" className="my-2">
                商品の説明
              </Typography>
              <TextField
                // label="description"
                multiline
                rows={4}
                variant="filled"
                value={detail}
                className="w-full"
                name="detail"
                onChange={changeDetail}
              />
            </Box>
          </Box>
        </Box>
        <Box className="flex justify-center">
          <Button
            variant="contained"
            className="rounded-md bg-teal-400 px-2 py-3 my-2 text-lg"
            onClick={openModal}
          >
            更新する
          </Button>
          <Modal
            open={isModalOpen}
            onClose={closeModal}
            onConfirm={handlePost}
            title={"本当に更新しますか？"}
            cancelButtonText="入力に戻る"
            confirmButtonText="はい"
          />
        </Box>
      </Container>
    </div>
  );
};

export default editForm;
