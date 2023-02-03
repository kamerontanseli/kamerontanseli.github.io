import Meta from "../components/new/Meta";
import Link from 'next/link';

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
            padding-top: 2em;
          }

          .article-content table {
            width: 100%;
            text-align: left;
            font-family: monospace;
            border-collapse: collapse;
          }

          .article-content th {
            background-color: #eee;
          }

          pre {
            overflow: auto;
          }

          .article-content td,
          .article-content th {
            border: 1px solid #ddd;
            padding: 5px;
          }

          img {
            display: block;
            max-width: 400px;
            margin: 3em auto;
            width: 100%;
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

          .nav {
            padding: 16px 0;
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            align-items: center;
          }

          .nav-brand {
            flex-grow: 1;
          }

          .nav-brand a {
            text-decoration: none;
            font-weight: 600;
            font-size: 1.3em;
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          @media screen and (max-width: 800px) {
            .nav {
              padding: 16px 2em;
            }
            .container {
              padding: 2em;
            }
            .article-content table,
            .article-content pre {
              font-size: 0.6em;
            }
            h1 {
              margin-top: 0;
              font-size: 2em;
            }

            h2 {
              font-size: 1.4em;
            }

            h3 {
              font-size: 1.2em;
            }
          }
        `}
      </style>
      <div className="nav">
        <div className="nav-brand">
          <Link href="/">
            <a href="/">Kamrn</a>
          </Link>
        </div>
      </div>
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
