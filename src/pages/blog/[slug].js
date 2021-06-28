import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import SEO from "../../components/new/Seo";

const Article = ({ post }) => {
  return (
    <>
      <SEO title={`${post.data.title}`} description={post.data.byline} />
      <p><a href="/">&larr; Back to all articles</a></p>
      <h1>{post.data.title}</h1>
      <ReactMarkdown source={post.content} />
    </>
  );
};

export default Article;

export async function getStaticProps({ params }) {
  const file = await import(`../../posts/${params.slug}.md`);
  const { data, content } = matter(file.default);

  return {
    props: {
      post: { data, content },
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  const glob = require("glob");
  const blogs = glob.sync("src/posts/**/*.md");

  const blogSlugs = blogs.map((file) =>
    file
      .split("/")[2]
      .replace(/ /g, "-")
      .slice(0, -3)
      .trim()
  );

  return {
    paths: blogSlugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
