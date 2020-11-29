import React from "react";
import Head from "next/head";
import { GlobalStyle, CONSTANTS, Navbar } from "../index";
import {Credit} from "../games";

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
  
  const scale = 0.80;

  return (
    <div className="container">
      <Head>
        <title>Run 3| {CONSTANTS.siteName}</title>
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

        <h1>Run 3!</h1>
        <center>
            <iframe src="https://www.gameflare.com/embed/run-3/" frameborder="0" scrolling="no" width="800" height="635" allowfullscreen></iframe>
        </center>
      </main>

      <GlobalStyle />

      <style global jsx>{`
        body {  
          overflow: hidden;
        }

        iframe {
          width: 100%;
          -ms-transform: scale(${scale});
          -moz-transform: scale(${scale});
          -o-transform: scale(${scale});
          -webkit-transform: scale(${scale});
          transform: scale(${scale});

          overflow: hidden;
        }
      `}</style>
      <div class="credit">
        <p>{Credit[1][0]}</p>
      </div>
    </div>
  );
}