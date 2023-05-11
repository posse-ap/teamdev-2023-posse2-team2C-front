
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
import Modal from "@/components/Modal";

const ListingReviewTable = ({ data, headers }) => {

  //詳細ページへ飛ぶリンク

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
                .filter((value) => typeof value !== "boolean")
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
                      className= "bg-teal-400 font-bold hover:bg-teal-500"
                      onClick={() => handleOpenRoleModal(id)}
                    >
                      {"審査"}
                    </Button>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListingReviewTable;
