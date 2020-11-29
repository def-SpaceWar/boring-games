import Head from "next/head";
import { GlobalStyle, CONSTANTS, Navbar } from "../index";
import {Credit} from "../games";

export default function Home() {
  const scale = 1.00;

  return (
    <div className="container">
      <Head>
        <title>Slime Lab 2| {CONSTANTS.siteName}</title>
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
        <script src="//static.miniclipcdn.com/js/game-embed.js"></script>

        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>Slime Lab 2!</h1>

        <div class="miniclip-game-embed" data-game-name="slime-laboratory-2" data-theme="5" data-width="640" data-height="480" data-language="en"><a href="https://www.miniclip.com/games/slime-laboratory-2/">Play Slime Laboratory 2</a></div>
        <p class="credit">This game is made by Miniclip</p>
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
        <p>{Credit[0][0]}</p>
      </div>
    </div>
  );
};