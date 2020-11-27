import Head from "next/head";
import { CONSTANTS, Navbar } from "./index";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Games | {CONSTANTS.siteName}</title>
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

        <h1>Welcome to the GAMES!</h1>
      </main>

      <style global jsx>{`
        body {
          color: white;
          margin: 0;
          padding: 0;
          font-family: "Poppins";
          scroll-behavior: smooth;
          background-size: cover;
          background-attachment: fixed;
          overflow-x: hidden;
          overflow-y: scroll;
          background-color: gray;
        }

        main {
          padding: 16px;
        }
      `}</style>
    </div>
  );
}
