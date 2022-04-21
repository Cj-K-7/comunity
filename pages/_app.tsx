import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../public/components/Navigation";
import { Provider } from "react-redux";
import store from "../public/redux/store";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(false);
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Navigation setDark={setDark} />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
