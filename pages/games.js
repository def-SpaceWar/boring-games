import Head from "next/head";
import { GlobalStyle, CONSTANTS, Navbar } from "./index";

const gameList = [
  ["Cuboid Fight", "cuboid_fight"],
  ["Run 3", "run3"],
  ["Paper.IO", "paper-io"],
  ["8 Ball Pool","8-ball-pool"],
  ["Slime Lab 2","slime-lab-2"],
  ["Ninja","ninja"],
  ["F1 Racer","f1-racer"],
  ["Learn to Fly 2","learn-to-fly-2"],
  ["Duck Life 3","duck-life-3evo"],
  ["Continuity","continuity"],
];

export const Credit = [
  ["This game is by Miniclip"],
  ["This game is made by GameFiare"],
  ["This game is made by Boring Games"],
  ["This game is made by Kongregate"],
  ["This games is made by Wanted 5 Games"]
]

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
        <center>
          <h1>Welcome To Boring GAMES!</h1>
          <h3>*Not all games are ours*</h3>
        </center>

        {gameList.map((arr) => (
          <center>
            <div class="flex-box">
              <a href={"/games/" + arr[1]}>
                <button class="btn">{arr[0]}</button>
              </a>
            </div>
          </center>
        ))}
      </main>

      <GlobalStyle />

      <style global jsx>{`
        .flex-box {
          width: 75%;
          display: flex;
          justify-content: space-around;
          flex-direction: row;
          flex-wrap: wrap;
          padding: 10px;
        }

        .btn {
          background-color: #21212f;
          border: 3px solid #af0fff;
          color: #af0fff;
          font-weight: bold;
          width: 150px;
          height: 30px;
          font-size: 16px;
          border-radius: 10px;
          transition: 0.7s;
        }

        .btn:hover {
          background-color: #af0fff;
          font-weight: bolder;
          color: black;
          width: 200px;
          height: 35px;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
