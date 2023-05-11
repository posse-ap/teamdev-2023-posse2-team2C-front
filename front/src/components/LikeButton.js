import React, { useState } from "react";
import { IconButton, Badge } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <IconButton
      onClick={handleLikeClick}
      color={liked ? "error" : "default"}
      style={{ padding: 0 }}
    >
      <Badge color="error">{liked ? <Favorite /> : <FavoriteBorder />}</Badge>
    </IconButton>
  );
}
