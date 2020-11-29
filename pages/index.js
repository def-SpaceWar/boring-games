import Head from "next/head";
import Image from "next/image";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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
    background-color: #21212F;
  }

  
::-webkit-scrollbar {
  display: none;
}

.element::-webkit-scrollbar { width: 0 !important }


  main {
    padding: 16px;
  }

  .credit{
    text-align: center;
    font-weight: bolder;
    font-size: 20px;
    margin-right: 1%;
    color: #af0fff;
    transition: 0.7s;
  }

  .credit:hover{
    color: white;
    font-size: 25px;
  }
`;

export const CONSTANTS = {
  siteName: "Boring Games",
};

export function Navbar() {
  return (
    <div className="header">
      <a href="/">
        <div className="logo">
          <Image
            src="/boringGamesLogoNavbar.png"
            alt="Logo"
            width={75}
            height={75}
          />
        </div>
      </a>
      <h1 className="space"> </h1>
      
      
      <a href="/games" className="nav">
        <h3>Games</h3>
      </a>
      <a href="/about" className="nav">
        <h3>About</h3>
      </a>
      <a href="/contacts" className="nav">
        <h3>Contact</h3>
      </a>

      <style jsx>{`
        body{
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          overflow-y: hidden;
        }

        .header {
          margin: 0;
          padding: 0;
          background-color: #13121F;
          display: flex;
          height: 100px;
          width: 100%;
          position: fixed;
          transition: 0.3s;
          z-index: 1000000;
        }

        .space {
          margin-left: 40%;
        }

        .nav {
          float: left;
          font-family: "Poppins";
          flex-direction: center;
          margin-left: 10%;
          text-decoration: none;
          margin-top: 0.5%;
          font-size: 20px;
          color: #af0fff;
          transition: 0.7s;
        }

        .nav:hover {
          color: white;
          font-family: "Poppins";
          font-style: bolder;
        }

        .logo {
          margin-top: 15%;
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
        <div className="main">
          <br />
          <br />
          <br />
          <br />
          <br />
          <center>
            <h1 class="title">Welcome to {CONSTANTS.siteName}!</h1>
          </center>
        </div>
      </main>
      <GlobalStyle />
      <style global jsx>{`
            .main {
                width: 97.7%;
                height: 100%;
                position: absolute;
                background: linear-gradient(45deg, #30f1de, #b11ee1);
                background-size: 600% 100%;
                animation: gradient 5s linear infinite;
                animation-direction: alternate;
            }
            @keyframes gradient {
                0% {background-position: 0%}
                100% {background-position: 100%}
            }

            .title{
              margin-top: 17%;
              font-size: 50px;
            }
      `}</style>
    </div>
  );
}
