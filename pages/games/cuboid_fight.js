import Head from "next/head";
import { GlobalStyle, CONSTANTS, Navbar } from "../index";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tank Battle | {CONSTANTS.siteName}</title>
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

      <main
        style={{
          overflow: "hidden",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>Cuboid Fight!</h1>

        <iframe src="https://cuboid-fight.netlify.app/"></iframe>
      </main>

      <GlobalStyle />

      <style global jsx>{`
        body {
          overflow: hidden;
        }

        iframe {
          width: 1920px;
          height: 880px;
          border: 0;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
