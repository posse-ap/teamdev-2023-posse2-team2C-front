import React from "react";
import { Box, Typography, Button, Modal as MuiModal } from "@mui/material";

const Modal = ({
  open,
  onClose,
  title,
  description,
  cancelButtonText,
  confirmButtonText,
}) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "auto",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography sx={{ my: 2 }}>{description}</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
          <Button className="bg-gray-100 text-teal-400 font-bold hover:bg-gray-200" onClick={onClose}>
            {cancelButtonText}
          </Button>
          <Button className="bg-teal-400 text-white font-bold hover:bg-teal-500" onClick={onClose}>
            {confirmButtonText}
          </Button>
        </Box>
      </Box>
    </MuiModal>
  );
};

export default Modal;
