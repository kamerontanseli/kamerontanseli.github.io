import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Meta from "../../components/new/Meta";
import Navigation from "../../components/new/Navigation";
import Footer from "../../components/Footer";

const BlogDetail = ({ post }) => {
  return (
    <>
      <Meta
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
          padding: 2em;
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
        .content :global(blockquote > p) {
          margin: 0;
        }
        .content :global(a) {
          color: #0073a7;
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

BlogDetail.getInitialProps = async function(ctx) {
  const content = await import(`../../posts/${ctx.query.slug}.md`);
  const post = matter(content.default);

  return {
    post,
    slug: ctx.query.slug,
  };
};
