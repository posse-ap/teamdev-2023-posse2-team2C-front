
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import Link from 'next/link';

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
          {data.map(({ id, ...rest }, rowIndex) => (
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
                  <Link href={`/admin/ListingReview/${id}`} passHref>
                  <Button variant="contained" className="bg-teal-400 font-bold hover:bg-teal-500">
                  {"審査"}
                  </Button>
                  </Link>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListingReviewTable;
