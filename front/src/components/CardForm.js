import UploadButton from "@/components/UploadButton.js";
import {
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { MuiFileInput } from "mui-file-input";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const CardForm = () => {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  //ファイルhandleChange関数
  const handleChangeFile = (newFile) => {
    setFile(newFile);
  };

  //メモリ内のBLOBにアクセスするためのURL生成
  useEffect(() => {
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }, [file]);
  return (
    <Paper elevation={3} className="rounded-lg w-8/12">
      <Box padding={1}>
        <MuiFileInput
          value={file}
          onChange={handleChangeFile}
          variant="outlined"
        />
        {file && !(file.type === "image/png" || file.type === "image/jpeg") && (
          <Typography
            variant="caption"
            component="div"
            color="error.main"
            gutterBottom
          >
            このファイルタイプはサポートしていません。
          </Typography>
        )}
        {file && (file.type === "image/png" || file.type === "image/jpeg") && (
          <React.Fragment>
            <Typography variant="caption" component="div" mt={1} gutterBottom>
              送信画像プレビュー
            </Typography>
            <img
              id="preview"
              src={preview}
              alt="preview"
              className="previewimg w-32"
            />
          </React.Fragment>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          padding={1}
        >
          <Typography
            variant="subtitle"
            component="h2"
            className="font-bold"
          ></Typography>
          <Box className="rounded-md bg-teal-400">
            <Typography
              variant="body2"
              component="p"
              className="text-white font-bold p-1"
            >
              イベント
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          paddingX={2}
        >
          <Typography variant="subtitle" component="p">
            参加者：
          </Typography>
          <Typography variant="subtitle" component="p">
            出品者：
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default CardForm;
