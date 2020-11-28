import React from "react";
import Head from "next/head";
import { GlobalStyle, CONSTANTS, Navbar } from "../index";

export default function Home() {
  // Stap the scrolling
  React.useEffect(() => {
    // Runs on client-side so `window` object is finally available

    window.addEventListener(
      "keydown",
      (e) => {
        if (
          ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "Space"].indexOf(
            e.key
          ) > -1
        ) {
          e.preventDefault();
        }
      },
      false
    );
  });

  const scale = 0.75;

  return (
    <div className="container">
      <Head>
        <title>Cuboid Fight | {CONSTANTS.siteName}</title>
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
          -ms-transform: scale(${scale});
          -moz-transform: scale(${scale});
          -o-transform: scale(${scale});
          -webkit-transform: scale(${scale});
          transform: scale(${scale});

          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
