import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../public/components/Navigation";
import { Provider } from "react-redux";
import store from "../public/redux/store";
import GlobalStyle from "../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <Navigation />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
