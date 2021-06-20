import Meta from "../components/new/Meta";
import TwitterFollow from "../components/TwitterFollow";

function App({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <style jsx global>
        {`
          * {
            box-sizing: border-box;
          }

          html {
            font-size: 100%;
          } /*16px*/

          body {
            background-color: #fff;
            font-weight: 400;
            font-family: Helvetica;
            line-height: 1.75;
            color: #000;
            margin: 0;
            padding: 0;
          }

          .container {
            max-width: 800px;
            margin: 0 auto;
          }

          @media screen and (max-width: 800px) {
            .container {
              margin: 0 1em;
            }
          }
        `}
      </style>
      <TwitterFollow />
      <Component {...pageProps} />
    </>
  );
}

export default App;
