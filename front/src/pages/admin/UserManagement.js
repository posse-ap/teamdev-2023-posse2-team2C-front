import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ManagementTable from '@/components/admin/UserManagementTable';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //   const data = await fetchUsers();
      //
      // path名 /users の get
      const data = [
        {
          id: 1,
          name: "name",
          listed_items: 10,
          coin_amount: 100,
          point_amount: 150,
          is_admin: true,
        },
        {
          id: 2,
          name: "name1",
          listed_items: 10,
          coin_amount: 100,
          point_amount: 150,
          is_admin: false,
        },
        {
          id: 3,
          name: "name2",
          listed_items: 10,
          coin_amount: 100,
          point_amount: 150,
          is_admin: false,
        },
      ];
      setUsers(data);
    };

    fetchData();
  }, []);

  const headers = [
    "ユーザー名",
    "出品アイテム数",
    "Coin数 (未換金)",
    "残pt額",
    "管理者権限",
    "",
  ];


  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ px: 2 }}>
        ユーザー一覧
      </Typography>
      <ManagementTable data={users} headers={headers} />
    </Box>
  );
};

export default UserManagement;
