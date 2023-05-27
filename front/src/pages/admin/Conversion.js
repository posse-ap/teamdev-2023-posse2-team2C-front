import React, { useState, useEffect } from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import CoinsConversionTable from "@/components/admin/CoinsConversionTable";
import axios from "axios";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CoinsConversion = () => {
  const [applications, setApplications] = useState([]);

  const fetchData = async () => {
    await axios
      .get("http://localhost:80/api/show/conversion", {
        withCredentials: true,
      })
      .then((response) => {
        const data = response.data;
        setApplications(data);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
        alert("データが取得できませんでした");
        const data = [];
        setApplications(data);
      });
  };

  useEffect(() => {

    axios
      .get("http://localhost:80/api/role", { withCredentials: true })
      .then((response) => {
        if (response.data !== 2) {
          alert("アクセス権限がありません。TOPページに戻ります。");
          router.push("/UserTop");
          return;
        } else {
          fetchData();
        }
      })
      .catch(function (error) {
        alert("ログイン情報がありません。");
        router.push("/auth/login");
        return;
      });
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
