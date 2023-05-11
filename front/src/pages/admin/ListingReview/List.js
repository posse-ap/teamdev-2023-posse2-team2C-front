import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ListingReviewTable from '@/components/admin/ListingReviewTable';

const UserManagement = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //   const data = await fetchUsers();
      //
      // path名 /users の get
      const data = [
        {
          id: 1,
          user_name: "name1",
          item_name: "コイン君人形",
          RequestDateTime: "2023/04/08 13:00",
        },
        {
          id: 2,
          user_name: "name2",
          item_name: "コインくんフィギュア",
          RequestDateTime: "2023/04/08 13:00",
        },
        {
          id: 3,
          user_name: "name3",
          item_name: "コインくん",
          RequestDateTime: "2023/04/08 13:00",
        },
      ];
      setRequests(data);
    };

    fetchData();
  }, []);

  const headers = [
    "ユーザー名",
    "商品名",
    "申請日時",
    "",
  ];


  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ px: 2 }}>
        出品審査待ち一覧
      </Typography>
      <ListingReviewTable data={requests} headers={headers} />
    </Box>
  );
};

export default UserManagement;
