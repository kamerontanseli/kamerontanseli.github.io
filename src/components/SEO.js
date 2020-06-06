import Head from "next/head";

export default function SEO({ slug, post, content }) {
  return (
    <Head>
      <meta property="og:title" content={post.title} />
      <meta
        property="og:site_name"
        content="https://kamerontanseli.github.io/"
      />
      <meta
        property="og:url"
        content={`https://kamerontanseli.github.io/blog/${slug}`}
      />
      <meta
        property="og:description"
        content={content.slice(0, 200).trimEnd()}
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content={
          (post.hero_image || "").startsWith("/")
            ? `https://kamerontanseli.github.io/${post.hero_image.replace(
                "../",
                ""
              )}`
            : post.hero_image
        }
      ></meta>
    </Head>
  );
}
