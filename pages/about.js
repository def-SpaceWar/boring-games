import Head from "next/head";
import { GlobalStyle, CONSTANTS, Navbar } from "./index";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>About | {CONSTANTS.siteName}</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/boringGamesLogoShortcut.png"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
      </Head>

      <Navbar />

      <main>
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>About Us</h1>

        <p>we are dum.</p>
      </main>

      <GlobalStyle />

      <style global jsx>{``}</style>
    </div>
  );
}
