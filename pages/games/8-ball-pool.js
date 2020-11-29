import Head from "next/head";
import {GlobalStyle, CONSTANTS, Navbar} from "../index";
import {Credit} from "../games";

export default function Home() {
    const scale = 0.90;

    return (
        <div className="container">
            <Head>
                <title>8 Ball Pool| {CONSTANTS.siteName}</title>
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

                <h1>8 Ball Pool!</h1>

                <div class="miniclip-game-embed" data-game-name="8-ball-pool-multiplayer" data-theme="5" data-width="1010" data-height="640" data-language="en">
                    <a href="https://www.miniclip.com/games/8-ball-pool-multiplayer/">Play 8 Ball Pool</a>
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
        <p>{Credit[0][0]}</p>
      </div>
        </div>
    );
}
