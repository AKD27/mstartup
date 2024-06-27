import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import Navbar from '../components/Navbar';
import "./Navbar.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>startup</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
