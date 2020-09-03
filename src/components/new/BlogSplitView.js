import ReactMarkdown from "react-markdown";
import Meta from "./Meta";
import Sidebar from "./Sidebar";
import Contact from "./Contact";

const BlogSplitView = ({ allBlogs, post, slug }) => {
  return (
    <div className="layout">
      <Meta
        title={`kamrn | ${post.data.title}`}
        description={post.data.byline || undefined}
      />
      <style jsx global>{`
        img {
          max-width: 100%;
        }
      `}</style>
      <style jsx>{`
        .layout {
          padding: 10em;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 50%);
          grid-gap: 10px;
        }

        @media screen and (max-width: 1024px) {
          .layout {
            padding: 1em;
          }
          .grid {
            display: flex;
            flex-direction: column-reverse;
          }

          .grid > *:first-child {
            margin-bottom: 1em;
          }
        }

        article {
          word-break: break-word;
        }

        h4 {
          margin-bottom: 3em;
        }

        @media screen and (max-width: 1024px) {
          h4 {
            margin-bottom: 20px;
          }
        }
      `}</style>
      <div className="grid">
        <Sidebar posts={allBlogs} current={slug} />
        <article>
          <h4>{post.data.title}</h4>
          <ReactMarkdown source={post.content} />
          <iframe src="https://kameront.substack.com/embed" width="100%" height="320" style={{ border: 0 }} frameborder="0" scrolling="no"></iframe>
        </article>
      </div>
      <div className="grid">
        <Contact />
      </div>
    </div>
  );
};

export default BlogSplitView;
