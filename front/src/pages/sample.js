import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Typography>This is a component</Typography>
      <Typography variant= 'h1'>This is a h1 component</Typography>
      <Typography variant= 'button' component='p' color='primary'>This is a h1 component</Typography>
    </Box>
  );
};

export default Home;
