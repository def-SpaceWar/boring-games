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
        <br />

        <h1>Contact Us</h1>

        <p>Aryan Ahire | Discord: @def_SpaceWar: {contactEmails}</p>
        <p>Discord: @Taptaplit: {contactEmails}</p>
        <p>Discord: @Glowstik: {contactEmails}</p>
      </main>

      <GlobalStyle />

      <style global jsx>{``}</style>
    </div>
  );
}
