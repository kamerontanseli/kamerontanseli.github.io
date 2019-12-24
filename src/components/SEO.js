import Head from "next/head";

export default function SEO({ post, content }) {
  return (
    <Head>
      <meta property="og:title" content={post.title} />
      <meta property="og:site_name" content="Kameron Tanseli" />
      <meta
        property="og:url"
        content={`https://kamerontanseli.github.io/blog/${post.slug}`}
      />
      <meta
        property="og:description"
        content={content.slice(0, 200).trimEnd()}
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content={`https://kamerontanseli.github.io/${post.hero_image.replace('../', '')}`}
      ></meta>
    </Head>
  );
}
