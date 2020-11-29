import Head from "next/head";
import { GlobalStyle, CONSTANTS, Navbar } from "../index";
import {Credit} from "../games";

export default function Home() {
  const scale = 1.00;

  return (
    <div className="container">
      <Head>
        <title>Learn to fly 2 | {CONSTANTS.siteName}</title>
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

        <h1>Learn How To Fly 2!</h1>
        <center>
            <embed width="640" height="480" base="https://external.kongregate-games.com/gamez/0011/5608/live/" src="https://external.kongregate-games.com/gamez/0011/5608/live/embeddable_115608.swf" type="application/x-shockwave-flash"></embed>      
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
        <p>{Credit[3][0]}</p>
      </div>
    </div>
  );
};