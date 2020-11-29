import Head from "next/head";
import { GlobalStyle, CONSTANTS, Navbar } from "./index";

var contactEmails = " boring-games@gmail.com";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Contact | {CONSTANTS.siteName}</title>
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
        <div class="card">
          <center>
            <h1>Contact Us</h1>

            <p>Discord: @def_SpaceWar: {contactEmails}</p>
            <p>Discord: @Taptaplit: {contactEmails}</p>
            <p>Discord: @Glowstik: {contactEmails}</p>
          </center>
          <form class="con-form" >
            <div class="flex-box">
              <input class="input" type="text" placeholder="Name" required></input>
              <br />
              <input class="input" type="text" placeholder="Email" required></input>
              <br />
              <textarea class="input" type="text" placeholder="Message" required></textarea>
              <br/>
                <button class="sub-btn">Submit</button>
            </div>
          </form>
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

        .flex-box {
          display: flex;
          justify-content: space-around;
          flex-direction: row;
          flex-wrap: wrap;
          margin: 100px;
        }

        .input{
          background: transparent;
          border: 1px solid #af0fff;
          border-bottom: 1px solid white;
          width: 500px;
          height: 25px;
          color: white;
          transition: 0.3s;
          font-size: 20px;
        }

        .input::placeholder{
          color: white;
          font-size: 18px;
          text-align: center;
          font-family: 'Poppins';
          opacity: 1;
        }

        .input:hover, .input::placeholder:hover{
          height: 40px;
        }

        .sub-btn{
          margin-top: 5%;
          margin-right: 18%;
          width: 200px;
          height: 30px;
          border-radius: 20px;
          font-size: 20px;
          background: transparent;
          border: 2px solid white;
          color: white;
          transition: 0.7s;
        }

        .sub-btn:hover{
          background: white;
          color: #af0fff;
          font-size: 25px;
          width: 250px;
          height: 35px;
          margin-right: 15%;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
