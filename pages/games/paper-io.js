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
  
    const scale = 0.90;

    return (
        <div className="container">
            <Head>
                <title>Paper.io | {CONSTANTS.siteName}</title>
                <link rel="shortcut icon" type="image/png" href="/boringGamesLogoShortcut.png"></link>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
            </Head>

            <Navbar/>

            <main style={
                {overflow: "hidden"}
            }>

                <script src="//static.miniclipcdn.com/js/game-embed.js"></script>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <h1>Paper.io!</h1>
                <div>
                <center>
                    <iframe src="https://wanted5games.com/games/html5/papers-io-mania-new-en-s-iga-cloud/index.html?pub=10" name="cloudgames-com" width="733" height="573" frameborder="0" scrolling="no"></iframe>
                </center>
                </div>
            </main>

            <GlobalStyle/>

            <style global jsx>
                {`
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
        }
      `}</style>
      <div class="credit">
        <p>{Credit[4][0]}</p>
      </div>
        </div>
    );
}
