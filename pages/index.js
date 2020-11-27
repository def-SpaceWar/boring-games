import Head from "next/head";
import Image from "next/image";

export var CONSTANTS = {
  siteName: "Boring Games",
};

export function Navbar() {
  return (
    <div className="header">
      <a href="/">
        <Image
          src="/boringGamesLogoNavbar.png"
          alt="Logo"
          width={100}
          height={100}
          className="Logo"
        />
      </a>
      <h1 className="space"> </h1>
      <a href="/games" className="nav">
        <h3>Games</h3>
      </a>
      <a href="/about" className="nav">
        <h3>About</h3>
      </a>
      <a href="/contact" className="nav">
        <h3>Contact</h3>
      </a>

      <style jsx>{`
        .header {
          margin: 0;
          padding: 0;
          background-color: #000;
          display: flex;
          height: 100px;
          width: 100%;
          position: fixed;
          transition: 0.3s;
          z-index: 1000000;
        }

        .space {
          margin-left: 35%;
        }

        .nav {
          float: left;
          font-family: "Poppins";
          flex-direction: center;
          margin-left: 10%;
          text-decoration: none;
          margin-top: 0.5%;
          font-size: 20px;
          color: red;
        }

        .nav:hover {
          color: white;
          background-color: gray;
        }

        .logo {
          width: 75px;
          margin-top: 1%;
          margin-left: 1%;
          margin-bottom: 1%;
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | {CONSTANTS.siteName}</title>
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

        <h1>Welcome to {CONSTANTS.siteName}!</h1>
      </main>

      <style global jsx>{`
        body {
          color: white;
          margin: 0;
          padding: 0;
          font-family: "Poppins";
          scroll-behavior: smooth;
          background-size: cover;
          background-attachment: fixed;
          overflow-x: hidden;
          overflow-y: scroll;
          background-color: gray;
        }

        main {
          padding: 16px;
        }
      `}</style>
    </div>
  );
}
