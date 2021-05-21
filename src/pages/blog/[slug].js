import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Navigation from "../../components/new/Navigation";
import Footer from "../../components/Footer";
import SEO from "../../components/new/Seo";

const BlogDetail = ({ post }) => {
  return (
    <>
      <SEO
        title={`${post.data.title}`}
        description={post.data.byline}
        image={post.data.hero_image}
      />
      <Navigation />
      <div className="container">
        <div className="content">
          <article>
            {post.data.hero_image && (
              <div
                className="content-header"
                style={{ backgroundImage: `url(${post.data.hero_image})` }}
                alt={post.data.title}
              />
            )}
            <h1 className="content-title">{post.data.title}</h1>
            <ReactMarkdown source={post.content} />
          </article>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .content {
          padding: 2em 0;
        }
        .content-header {
          height: 300px;
          background-size: cover;
          background-position: center;
          margin-bottom: 20px;
        }
        .content-title {
          margin-top: 0;
          margin-bottom: 1em;
        }
        .content :global(blockquote) {
          background-color: #eee;
          padding: 0.5em;
          margin: 0;
          padding-left: 1em;
          border-left: 5px solid grey;
        }
        .content :global(blockquote > p:first-child) {
          margin: 0;
        }
        .content :global(blockquote > p:last-child) {
          margin-bottom: 0;
        }
        .content :global(a) {
          color: #000;
          font-weight: 600;
        }
        .content :global(img) {
          max-width: 100%;
          margin: 0 auto;
          display: block;
        }
        .content :global(pre) {
          padding: 1em;
          background-color: #eee;
          border-radius: 4px;
          overflow: auto;
        }
      `}</style>
    </>
  );
};

export default BlogDetail;

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
