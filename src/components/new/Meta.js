import Head from "next/head";
import { useEffect } from "react";

export default function Meta({ title, description }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-72466279-4");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description}></meta>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@KameronTanseli" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@KameronTanseli" />
        <meta
          name="twitter:image"
          content="https://kamrn.com/static/meta.png"
        ></meta>

        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://kamrn.com" />
        <meta property="og:image" content="https://kamrn.com/static/meta.png" />
        <meta property="og:description" content={description} />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-72466279-4"
        ></script>
      </Head>
      <style jsx global>
        {`
          * {
            box-sizing: border-box;
          }

          @import url("https://fonts.googleapis.com/css?family=Work+Sans:400|Poppins:400");

          html {
            font-size: 100%;
          } /*16px*/

          body {
            background-color: white;
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            line-height: 1.75;
            color: #333;
            margin: 0;
            padding: 0;
          }

          a {
            color: #333;
            text-decoration: none;
            border-bottom: 1px solid #333;
            font-size: 0.95em;
          }

          a:hover {
            opacity: 0.8;
            transition: opacity 0.2s ease-in;
          }

          p {
            margin-bottom: 1.15rem;
          }

          pre {
            max-width: 100%;
            overflow: auto;
            background-color: #000;
            border-radius: 4px;
            color: #fff;
            padding: 1em;
          }

          blockquote {
            border-left: 3px solid #eee;
            margin-left: 0;
            padding-left: 2em;
            font-style: italic;
            font-size: 0.8em;
            line-height: 1.8;
          }

          h1,
          h2,
          h3,
          h4,
          h5 {
            margin: 2.75rem 0 1.05rem;
            font-family: "Work Sans", sans-serif;
            font-weight: 500;
            line-height: 1.5;
          }

          h4 {
            font-size: 1.563em;
          }

          h1,
          h2,
          h3,
          h5 {
            font-size: 1.25em;
          }

          small,
          .text_small {
            font-size: 0.8em;
          }
        `}
      </style>
    </>
  );
}

Meta.defaultProps = {
  title: "kamrn",
  description: "The thoughts of Kameron Tanseli",
};
