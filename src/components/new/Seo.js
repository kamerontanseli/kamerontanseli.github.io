import Head from "next/head";

export default function SEO({ title, description, image }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:title" content={title} />
      {description && (
        <>
          <meta name="description" content={description}></meta>
          <meta name="twitter:description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      <meta property="og:title" content={title} />
      {image && (
        <>
          <meta
            name="twitter:image"
            content={
              image.startsWith("/") ? `https://kamrn.com${image}` : image
            }
          />
          <meta
            property="og:image"
            content={
              image.startsWith("/") ? `https://kamrn.com${image}` : image
            }
          />
        </>
      )}
    </Head>
  );
}
