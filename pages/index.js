import Head from "next/head";
import Image from "next/image";

var CONSTANTS = {
  siteName: "Boring Games",
  darkMode: true,
};

export default function Home() {
  var title = "Boring-Games";

  function toggleDarkMode() {
    console.log(CONSTANTS.darkMode);
    CONSTANTS.darkMode = !CONSTANTS.darkMode;
  }

  return (
    <div class="container">
      <Head>
        <title>Home | {CONSTANTS.siteName}</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/Boring-Games-Logo.png"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <div
          class="header"
          style={{
            "background-color": CONSTANTS.darkMode ? `black` : "white",
          }}
        >
          <button onClick={toggleDarkMode}>Change Dark Mode</button>
          <Image
            src="/Boring-Games-Logo.png"
            alt="Logo"
            width={75}
            height={75}
            class="Logo"
          />
          <h1 class="space"> </h1>
          <a href="game-page.html" class="nav">
            <h3>Games</h3>
          </a>
          <a href="about.html" class="nav">
            <h3>About</h3>
          </a>
          <a href="contact.html" class="nav">
            <h3>Contact</h3>
          </a>
        </div>
      </main>

      <style jsx>{`
        .nav {
          float: left;
          font-family: "Poppins";
          flex-direction: center;
        }
        .header {
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: "Poppins";
          scroll-behavior: smooth;
          background-size: cover;
          background-attachment: fixed;
          overflow-x: hidden;
          overflow-y: scroll;
        }

        .logo {
          width: 75px;
          margin-top: 1%;
          margin-left: 1%;
          margin-bottom: 1%;
        }

        .header {
          display: flex;
          height: 100px;
          width: 100%;
          position: fixed;
          transition: 0.3s;
          z-index: 1000000;
        }

        .nav {
          margin-left: 10%;
          text-decoration: none;
          margin-top: 0.5%;
          font-size: 20px;
          color: red;
        }

        .nav:hover {
          color: black;
        }

        .space {
          margin-left: 35%;
        }
      `}</style>
    </div>
  );
}
