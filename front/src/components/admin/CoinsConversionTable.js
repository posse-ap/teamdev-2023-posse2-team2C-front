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
  tableBodyClasses,
} from "@mui/material";
import Modal from "@/components/Modal";

const CoinsConversionTable = ({ data, headers, handleClick }) => {
  const [modalOpen, setModalOpen] = useState(-1);
  const handleOpenModal = (id) => setModalOpen(id);
  const handleCloseModal = () => setModalOpen(-1);
  const modalHeaders = ["申請者", "換金方法", "coin", "申請日"];

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
          {data.map(({ id, is_converted, ...rest }, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.values(rest).map((value, cellIndex) => (
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
                    is_converted
                      ? "bg-teal-400 font-bold hover:bg-teal-500"
                      : "bg-gray-100 text-teal-400 font-bold hover:bg-gray-200"
                  }
                  onClick={() => handleOpenModal(id)}
                >
                  {is_converted ? "完了" : "未完了"}
                </Button>
                <Modal
                  open={modalOpen === id}
                  onClose={handleCloseModal}
                  onConfirm={() => handleClick(id)}
                  title={
                    is_converted
                      ? "換金申請を未完了にしますか？"
                      : "換金申請を完了にしますか？"
                  }
                  description={
                    <TableContainer>
                      <TableHead>
                        <TableRow>
                          {["申請者", "換金方法", "coin", "申請日"].map(
                            (header, index) => (
                              <TableCell key={index} align={index === 0 ? "inherit" : "right"}>
                                {header}
                              </TableCell>
                            )
                          )}
                        </TableRow>
                      </TableHead>
                      <tableBody>
                        <TableRow>
                          {Object.values(rest).map((cell, index) => (
                            <TableCell key={index}>{cell}</TableCell>
                          ))}
                        </TableRow>
                      </tableBody>
                    </TableContainer>
                  }
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

export default CoinsConversionTable;
