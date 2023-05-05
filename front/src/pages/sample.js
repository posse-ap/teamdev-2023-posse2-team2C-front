import React from "react";
import { Box, Typography, Paper, Switch, Container, Grid } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h1">一覧</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper elevation={1}>
            <Box>
              <Typography>This is a component</Typography>
              <Typography variant="button" component="p" color="primary">
                This is a h1 component
              </Typography>
              <Switch></Switch>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={1}>
            <Box>
              <Typography>This is a component</Typography>
              <Typography variant="button" component="p" color="primary">
                This is a h1 component
              </Typography>
              <Switch></Switch>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={1}>
            <Box>
              <Typography>This is a component</Typography>
              <Typography variant="button" component="p" color="primary">
                This is a h1 component
              </Typography>
              <Switch></Switch>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={1}>
            <Box>
              <Typography>This is a component</Typography>
              <Typography variant="button" component="p" color="primary">
                This is a h1 component
              </Typography>
              <Switch></Switch>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
