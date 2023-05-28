import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from 'next/router';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";
import "../styles/App.css";
import axios from "./auth/axios";

export const UserContext = React.createContext();

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [user, setUser] = React.useState(null);

  const router = useRouter();

  React.useEffect(() => {
    if (!router.pathname.startsWith("/auth")) {
      axios
        .get("http://localhost:80/api/user", { withCredentials: true })
        .then((response) => {
          console.log(response.data);
          setUser(response.data);
        })
        .catch(function (error) {
          window.location.href = "http://localhost:3000/auth/login";
        });
    }
  }, [router.pathname]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* Provide the user state to all components */}
        <UserContext.Provider value={user}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};