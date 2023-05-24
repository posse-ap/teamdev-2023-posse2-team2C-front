import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ManagementTable from "@/components/admin/UserManagementTable";
import { UserService } from "@/services/userService";
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

  const handleClickDeleteButton = async (user_id) => {
    await UserService.deleteUser(user_id);
    const data = await UserService.fetchUsers(); // 変更後にユーザー一覧を更新
    setUsers(data);
  };

  const handleClickRoleButton = async (user_id, is_admin) => {
    await UserService.updateUserRole(user_id, is_admin);
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
