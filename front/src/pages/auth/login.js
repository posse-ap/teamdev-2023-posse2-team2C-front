// ログインページ

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
import axios from "axios";
import { ChangeEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";

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

export default function Login() {
  const theme = createTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState(false);

  const validateEmail = () => {
    if (email.endsWith("@anti-pattern.co.jp")) {
      setError(false); // @anti-pattern.co.jpのアドレスならエラーを解除
    } else {
      setError(true); // それ以外のアドレスならエラーを表示
    }
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    const loginParams = { email, password };
    axios
      // CSRF保護の初期化
      .get("http://localhost:80/sanctum/csrf-cookie", {
        withCredentials: true,
      })
      .then((response) => {
        // ログイン処理
        axios
          .post("http://localhost:80/api/login", loginParams, {
            withCredentials: true,
          })
          .then((response) => {
            if (response.data["logged in"]) {
              router.push("http://localhost:3000/UserTop");
            } else {
              alert(response.data["message"]);
            }
          });
      });
  };

  // SPA認証済みではないとアクセスできないAPI
  const handleUserClick = () => {
    axios
      .get("http://localhost:80/api/user", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
      });
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
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="メール"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={changeEmail}
              onBlur={validateEmail}
              error={error}
              helperText={error ? "Invalid email address" : ""}
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
              onChange={changePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
              className="bg-teal-400 hover:bg-teal-500"
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleUserClick}
              className="bg-teal-400 hover:bg-teal-500"
            >
              check user
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
