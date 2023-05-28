import React, { useState, useEffect } from "react";
import Card from "@/components/Card.js";
import UserTab from "@/components/UserTab.js";
import UserHeader from "@/components/UserHeader.js";
import SelectBox from "@/components/SelectBox.js";
import PropTypes from "prop-types";
import { Container, Typography } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const UserTop = () => {
  return (
    <div className="App">
      <UserHeader></UserHeader>
      <UserTab></UserTab>
      <Container>
        <Typography variant="h4" component="h1" className="mb-5 text-center">
          ＜PeerPerkについて＞
        </Typography>
        <img
          src="https://cdn.discordapp.com/attachments/1112211266010877965/1112212799771381800/Screen_Shot_2023-05-28_at_11.42.21.png"
          className="mypage-help-img"
        />
        <img
          src="https://cdn.discordapp.com/attachments/1112211266010877965/1112212800333414540/Screen_Shot_2023-05-28_at_11.43.53.png"
          className="mypage-help-img"
        />
        <img
          src="https://cdn.discordapp.com/attachments/1112211266010877965/1112211354678472776/Screen_Shot_2023-05-28_at_11.47.28.png"
          className="mypage-help-img"
        />
        <img
          src="https://cdn.discordapp.com/attachments/1112211266010877965/1112211355588645005/Screen_Shot_2023-05-28_at_11.47.42.png"
          className="mypage-help-img"
        />
      </Container>
    </div>
  );
};

export default UserTop;
