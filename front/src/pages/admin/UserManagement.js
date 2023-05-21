import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ManagementTable from "../../components/admin/UserManagementTable";
import { UserService } from "../../services/userService";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await UserService.fetchUsers();
      setUsers(data);
    };

    fetchData();
  }, []);

  const handleClickDeleteButton = async (id) => {
    await axios 
      .delete(`http://localhost:80/api/users/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      });
    const data = await UserService.fetchUsers(); // 変更後にユーザー一覧を更新
    setUsers(data);
  };

  const handleClickRoleButton = async (user_id, is_admin) => {
    await axios
      .put(`http://localhost/api/users/role/${user_id}`, {'user_id': user_id, 'is_admin': is_admin}, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      });
    const data = await UserService.fetchUsers();
    setUsers(data);
  };

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
      <ManagementTable
        data={users}
        headers={headers}
        handleClickDeleteButton={handleClickDeleteButton}
        handleClickRoleButton={handleClickRoleButton}
      />
    </Box>
  );
};

export default UserManagement;
