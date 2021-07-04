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

          @media screen and (max-width: 480px) {
            html {
              font-size: 14px;
            }
          }

          blockquote {
            margin: 0;
            margin-left: 1.25em;
            font-style: italic;
            color: #4c4a4a;
          }
          footer {
            text-align: center;
            font-size: 0.8em;
          }

          blockquote a {
            color: #4c4a4a;
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

          textarea {
            width: 100%;
            min-height: 200px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1em;
            padding: 1em;
            font-family: "Lora", serif;
          }
        `}
      </style>
      <div className="container">
        <Component {...pageProps} />
      </div>
      <footer>
        <p>&copy; kamrn.com {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default App;
