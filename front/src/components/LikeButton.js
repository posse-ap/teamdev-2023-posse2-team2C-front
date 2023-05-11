import React, { useState } from "react";
import { IconButton, Badge } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <IconButton
      onClick={handleLikeClick}
      color={liked ? "secondary" : "default"}
      style={{ padding: 0 }}
    >
      <Badge color="error">
        {liked ? <Favorite /> : <FavoriteBorder />}
      </Badge>
    </IconButton>
  );
}
