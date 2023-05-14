import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";


export default function SimpleHeader() {
  return (
    <Box sx={{
          flexGrow: 1,
          borderBottom: 1,
          borderColor: "divider",
          boxShadow: "0px 4px 4px -5px",
          marginBottom: 4,
          }}>
      <AppBar position="static" className="bg-white" elevation={0}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "space-between",
            }}

          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <img
                src="https://cdn.discordapp.com/attachments/1088742577391546449/1102848847698460672/Screen_Shot_2023-05-02_at_15.47.23.png"
                className="logo"
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}