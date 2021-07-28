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
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@KameronTanseli" />
        <meta name="twitter:creator" content="@KameronTanseli" />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://kamrn.com" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-72466279-4"
        ></script>
      </Head>
    </>
  );
}

Meta.defaultProps = {
  title: "Kameron Tanseli | Growth Engineer",
  description: "Kameron Tanseli's Blog.",
  image: "/static/meta.png",
};
