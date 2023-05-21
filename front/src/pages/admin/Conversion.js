import React, { useState, useEffect } from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import CoinsConversionTable from "@/components/admin/CoinsConversionTable";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CoinsConversion = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //   const data = await fetchUsers();
      //
      // path名 /users の get
      const data = [
        {
          id: 1,
          is_converted: false,
          name: "name1",
          conversion_type: "アマギフ",
          coin_amount: 100,
          applied_at: "2023-04-04",
        },
        {
          id: 2,
          is_converted: false,
          name: "name2",
          conversion_type: "アマギフ",
          coin_amount: 200,
          applied_at: "2023-03-03",
        },
        {
          id: 3,
          is_converted: true,
          name: "name3",
          conversion_type: "アマギフ",
          coin_amount: 300,
          applied_at: "2023-02-02",
        },
      ];
      setApplications(data);
    };

    fetchData();
  }, []);

  const headers = ["申請者", "換金方法", "coin", "申請日", "換金状況"];

  return (
    <Box sx={{ p: 4 }}>
      <Box className="flex items-center">
        <Typography variant="h4" component="h1" gutterBottom sx={{ px: 2 }}>
          換金申請一覧
        </Typography>
        <Checkbox {...label} />
        完了済みを非表示
      </Box>
      <CoinsConversionTable data={applications} headers={headers} />
    </Box>
  );
};

export default CoinsConversion;
