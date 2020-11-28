import Head from "next/head";
import { GlobalStyle, CONSTANTS, Navbar } from "./index";

var yt = "https://www.youtube.com/channel/UCp-ej91goXSRy8781Xr96Yw/featured";
var discord = "https://discord.gg/5FxXCkBN";
var Patrion = "https://www.patreon.com/boring_games";

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
        
        <div class="card">
          <center>
            <h1>About Us</h1>
          </center>
          <p>We are a bunch of kids/teenagers who can code and are very bored. We all know HTML, CSS, and JS so we wanted to make a gaming website because why not. Anyways this website took many hours to code so it would be nice if you could use it and also we will be updating the webiste often.</p>
          <center>
            <strong>
              <p>Summary  - We are dumb.</p>
            </strong>
          </center>
        </div>

        <div class="sup-card">
          <center>
            <h2>Support Us!</h2>
          </center>
          <center>
            <strong>
              <p class="sup-us">YT - <a href={yt} class="yt-link">Glowstik</a> </p>
              <p class="sup-us">Discord - <a href={discord}>Join Our Server!</a></p>
              <p class="sup-us">Patreon - <a href={Patrion}>Get Ranks & Levels from Us!</a></p>
              <p>Thanks for Supporting us!</p>
            </strong>
          </center>
        </div>
      </main>

      <GlobalStyle />

      <style global jsx>{`
      .card{
        width: 50%;
        padding: 16px;
        border-radius: 20px;
        background: #af0fff;
        margin-left: 25%;
      }

      .sup-card{
        width: 50%;
        padding: 16px;
        border-radius: 20px;
        margin-left: 25%;
        margin-top: 1%;
        background: #7c10b3;  
      }

      .sup-us a{
        text-decoration: none;
        color: white
      }

      .flex-box {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 100px;
      }

      `}</style>
    </div>
  );
}
