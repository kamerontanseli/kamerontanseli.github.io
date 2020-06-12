import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Meta from "../components/new/Meta";
import Sidebar from "../components/new/Sidebar";

const Archive = ({ allBlogs }) => {
  return (
    <div className="layout">
      <Meta title={`kamrn | All Articles`} />
      <style jsx>{`
        .layout {
          padding: 10em;
        }

        main {
          max-width: 400px;
          margin: 0 auto;
        }

        @media screen and (max-width: 1024px) {
          .layout {
            padding: 1em;
          }
        }
      `}</style>
      <main>
        <Sidebar slice={false} posts={allBlogs} />
      </main>
    </div>
  );
};

export default Archive;

Archive.getInitialProps = async function() {
  //get posts & context from folder
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        document,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/)).sort(
    (a, b) => new Date(b.document.data.date) - new Date(a.document.data.date)
  );

  return {
    allBlogs: posts,
  };
};
