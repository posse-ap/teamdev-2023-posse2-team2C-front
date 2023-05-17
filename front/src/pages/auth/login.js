// import * as React from "react";
import React, { useState, useEffect } from "react";
// import axios from 'axios';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SimpleUserHeader from "@/components/UserHeader-simple";

import { api as csrfApi } from "./csrfCookie";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    async function fetchCsrfToken() {
      const response = await fetch('http://localhost:80/api/csrf-token');
      const token = await response.text();
      setCsrfToken(token);
    }

    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    // formData.append('_token', csrfToken);
  
    try {
      const response = await fetch('http://localhost:80/api/user/login', {
        method: 'POST',
        body: formData,
        headers: {
          'X-CSRF-TOKEN' : csrfToken
        },
        // credentials: 'include',
      });
  
      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <SimpleUserHeader></SimpleUserHeader>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1088742577391546449/1102788981638299648/280f7251fa027771.png"
            className="logo"
          />
          <Typography component="h1" variant="h5">
            ログイン
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            // noValidate
            action="http://localhost:80/api/user/login"
            method="post"
            sx={{ mt: 1 }}
          >
            {/* <input type="hidden" name="_token" value={csrfToken} /> */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="メール"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="パスワード"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/auth/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
