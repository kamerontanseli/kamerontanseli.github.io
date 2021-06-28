import Meta from "../components/new/Meta";

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
            font-size: 16px;
          }

          body {
            margin: 0;
            padding: 0;
            font-family: "Lora", serif;
            font-weight: 400;
            line-height: 1.75;
            color: #000000;
          }

          p {
            margin-bottom: 1rem;
          }

          h1,
          h2,
          h3,
          h4,
          h5 {
            margin: 3rem 0 1.38rem;
            font-family: "Lora", serif;
            font-weight: 400;
            line-height: 1.3;
          }

          h1 {
            margin-top: 0;
            font-size: 3.052rem;
          }

          h2 {
            font-size: 2.441rem;
          }

          h3 {
            font-size: 1.953rem;
          }

          h4 {
            font-size: 1.563rem;
          }

          h5 {
            font-size: 1.25rem;
          }

          small {
            font-size: 0.8rem;
          }

          strong {
            font-weight: 600;
          }

          a {
            color: #000;
          }

          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 4em 2em;
          }
        `}
      </style>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default App;
