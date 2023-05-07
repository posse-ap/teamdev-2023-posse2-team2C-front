import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  Typography,
  Button,
  Modal,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ManagementTable = ({ data, headers }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const handleOpenDeleteModal = () => setDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setDeleteModalOpen(false);

  const handleOpenRoleModal = () => {
    // show change role modal
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="management table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} align={index === 0 ? "inherit" : "right"}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.values(row)
                .filter((value) => typeof value !== "boolean")
                .map((value, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    align={cellIndex === 0 ? "inherit" : "right"}
                  >
                    {value}
                  </TableCell>
                ))}
              {/* ユーザー管理 */}
              {row.hasOwnProperty("is_admin") ? (
                <>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      className={
                        row.is_admin
                          ? "rounded-md bg-teal-400 font-bold hover:bg-teal-500"
                          : "rounded-md bg-gray-100 text-teal-400 font-bold hover:bg-gray-200"
                      }
                      onClick={handleOpenRoleModal}
                    >
                      {row.is_admin ? "管理者" : "一般"}
                    </Button>
                    <Modal
                      open={deleteModalOpen}
                      onClose={handleCloseDeleteModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: 400,
                          bgcolor: "background.paper",
                          border: "2px solid #000",
                          boxShadow: 24,
                          p: 4,
                        }}
                      >
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          ユーザーを削除しますか？
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        ユーザー名：金子夏蓮
                        </Typography>
                      </Box>
                    </Modal>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="delete"
                      onClick={handleOpenDeleteModal}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </>
              ) : (
                ""
              )}
              {/* 換金管理 */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManagementTable;
