import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import emotionCache from "../lib/emotionCache";
import theme from "../styles/theme/theme";
import "../styles/globals.css";
import MiniDrawer from "../components/drawer";
import { useRouter } from "next/router";

const ClientEmotionCache = emotionCache();

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function CustomApp({
  Component,
  emotionCache = ClientEmotionCache,
  pageProps,
}: CustomAppProps) {
  const { asPath } = useRouter()
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MiniDrawer title={pageProps.name}>
          <Component {...pageProps} />
        </MiniDrawer>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default CustomApp;
