import Head from "next/head";
import { useEffect } from "react";

export default function Meta({ title, description, image }) {
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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon_ico/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon_ico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon_ico/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicon_ico/site.webmanifest" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@KameronTanseli" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@KameronTanseli" />
        <meta
          name="twitter:image"
          content={`https://kamrn.com${image || "/static/meta.png"}`}
        ></meta>

        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://kamrn.com" />
        <meta
          property="og:image"
          content={`https://kamrn.com${image || "/static/meta.png"}`}
        />
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
        `}
      </style>
    </>
  );
}

Meta.defaultProps = {
  title: "kamrn",
  description: "The thoughts of Kameron Tanseli",
};
