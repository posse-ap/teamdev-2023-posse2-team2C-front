import { ChangeEvent, useState, useEffect } from "react";
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
import { useRouter } from "next/router";

import axios from "axios";

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

export default function register() {
  const theme = createTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [slack_id, setSlack_id] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const validateEmail = () => {
    if (email.endsWith("@anti-pattern.co.jp")) {
      setError(false); // @anti-pattern.co.jpのアドレスならエラーを解除
    } else {
      setError(true); // それ以外のアドレスならエラーを表示
    }
  };

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeSlack_id = (e) => {
    setSlack_id(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeCheckPassword = (e) => {
    setCheckPassword(e.target.value);
  };

  const handleClick = () => {
    const loginParams = { name, email, slack_id, password, checkPassword };

    if (password === checkPassword) {
      axios
        // CSRF保護の初期化
        .get("http://localhost:80/sanctum/csrf-cookie", {
          withCredentials: true,
        })
        .then((response) => {
          // 登録・ログイン
          axios
            .post("http://localhost:80/api/register", loginParams, {
              withCredentials: true,
            })
            .then((response) => {
              console.log(response.data);
              alert(response.data + "ログイン画面にて再度ログインしてください。");
              router.push("http://localhost:3000/auth/login");
            });
        });
    } else {
      alert("パスワードを確認してください");
    }
  };

  // SPA認証済みではないとアクセスできないAPI
  // const handleUserClick = () => {
  //   axios
  //     .get("http://localhost:80/api/user", { withCredentials: true })
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // };

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
            アカウント登録
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="氏名(スペースなし)"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={changeName}
            />
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
              helperText={error ? "Invalid email address/ anti-patternのドメインを使用してください" : ""}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="slack_id"
              label="slackのid"
              name="slack_id"
              autoFocus
              onChange={changeSlack_id}
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="checkPassword"
              label="パスワードの確認"
              type="password"
              id="checkPassword"
              autoComplete="current-password"
              onChange={changeCheckPassword}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              sing up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/auth/login" variant="body2">
                  {"Already have an account? Sign in"}
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
