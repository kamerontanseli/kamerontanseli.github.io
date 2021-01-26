import matter from "gray-matter";
import Meta from "../components/new/Meta";
import Navigation from "../components/new/Navigation";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

const Blog = ({ posts }) => {
  return (
    <>
      <Meta
        title={`Kameron Tanseli | Growth Engineer`}
        description={`
        Kameron Tanseli's Growth Engineering Blog. Kameron is a Senior Growth Engineer at Tray.io ($600m+), 
        investor (getchip.uk, getcoconut.com), and IndieHacker (293 upvotes and counting).
        `.trim()}
      />
      <Navigation />
      <Articles posts={posts} />
      <Footer />
      <style jsx>{``}</style>
    </>
  );
};

Blog.getInitialProps = async function() {
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

  return { posts };
};

export default Blog;
