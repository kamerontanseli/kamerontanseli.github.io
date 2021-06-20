import Head from "next/head";
import { useEffect } from "react";
import SEO from "./Seo";

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
        <meta name="twitter:creator" content="@KameronTanseli" />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://kamrn.com" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-72466279-4"
        ></script>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Head>
      <SEO title={title} description={description} image={image} />
    </>
  );
}

Meta.defaultProps = {
  title: "Kameron Tanseli | Growth Engineer",
  description:
    "Kameron Tanseli's Blog. Kameron is a Senior Growth Engineer at Qatalog ($18m+).",
  image: "/static/meta.png",
};
