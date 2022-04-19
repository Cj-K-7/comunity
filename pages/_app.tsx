import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "../public/components/Navigation";
import { Provider } from "react-redux";
import store from "../public/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider store={store}>
      <Navigation />
      <Component {...pageProps} />
    </Provider>
    </>
  );
}

export default MyApp;
