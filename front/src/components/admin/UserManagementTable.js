import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "../Modal";

const UserManagementTable = ({ data, headers, handleClickDeleteButton, handleClickRoleButton }) => {
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
          {data.map(({ id, is_admin, ...rest }, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.values(rest)
                .map((value, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    align={cellIndex === 0 ? "inherit" : "right"}
                  >
                    {value}
                  </TableCell>
                ))}
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      className={
                        is_admin
                          ? "bg-teal-400 font-bold hover:bg-teal-500"
                          : "bg-gray-100 text-teal-400 font-bold hover:bg-gray-200"
                      }
                      onClick={() => handleOpenRoleModal(id)}
                    >
                      {is_admin ? "管理者" : "一般"}
                    </Button>
                    <Modal
                      open={roleModalOpen === id}
                      onClose={handleCloseRoleModal}
                      onConfirm={() => handleClickRoleButton(id, is_admin)}
                      title={
                        is_admin
                          ? "管理者権限を取消しますか?"
                          : "管理者権限を付与しますか?"
                      }
                      description={`ユーザー名：${rest.name}`}
                      cancelButtonText="戻る"
                      confirmButtonText="はい"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleOpenDeleteModal(id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Modal
                      open={deleteModalOpen === id}
                      onClose={handleCloseDeleteModal}
                      onConfirm={() => handleClickDeleteButton(id)}
                      title="ユーザーを削除しますか？"
                      description={`ユーザー名：${rest.name}`}
                      cancelButtonText="戻る"
                      confirmButtonText="はい"
                    />
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserManagementTable;

