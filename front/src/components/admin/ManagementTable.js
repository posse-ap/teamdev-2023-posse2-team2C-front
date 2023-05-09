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
  const [deleteModalOpen, setDeleteModalOpen] = useState(-1);
  const handleOpenDeleteModal = (id) => setDeleteModalOpen(id);
  const handleCloseDeleteModal = () => setDeleteModalOpen(-1);

  const [roleModalOpen, setRoleModalOpen] = useState(-1);
  const handleOpenRoleModal = (id) => setRoleModalOpen(id);
  const handleCloseRoleModal = () => setRoleModalOpen(-1);

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
                          ? "bg-teal-400 font-bold hover:bg-teal-500"
                          : "bg-gray-100 text-teal-400 font-bold hover:bg-gray-200"
                      }
                      onClick={() => handleOpenRoleModal(row.id)}
                    >
                      {row.is_admin ? "管理者" : "一般"}
                    </Button>
                    <Modal
                      open={roleModalOpen === row.id}
                      onClose={()=>handleCloseRoleModal(-1)}
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
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          borderRadius: 5,
                        }}
                      >
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {row.is_admin ? '管理者権限を取消しますか?' : '管理者権限を付与しますか?'}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ my: 2 }}>
                        ユーザー名：{row.name}
                        </Typography>
                        <Box sx={{display: 'flex', justifyContent: "space-around", width: "100%"}}>
                          <Button className="bg-gray-100 text-teal-400 font-bold hover:bg-gray-200" onClick={handleCloseRoleModal}>戻る</Button>
                          <Button className="bg-teal-400 text-white font-bold hover:bg-teal-500" onClick={handleCloseRoleModal}>はい</Button>
                        </Box>
                      </Box>
                    </Modal>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleOpenDeleteModal(row.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Modal
                      open={deleteModalOpen === row.id}
                      onClose={() => handleCloseDeleteModal(-1)}
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
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          borderRadius: 5,
                        }}
                      >
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          ユーザーを削除しますか？
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ my: 2 }}>
                        ユーザー名：{row.name}
                        </Typography>
                        <Box sx={{display: 'flex', justifyContent: "space-around", width: "100%"}}>
                          <Button className="bg-gray-100 text-teal-400 font-bold hover:bg-gray-200" onClick={handleCloseDeleteModal}>戻る</Button>
                          <Button className="bg-teal-400 text-white font-bold hover:bg-teal-500" onClick={handleCloseDeleteModal}>はい</Button>
                        </Box>
                      </Box>
                    </Modal>
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
