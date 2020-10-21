import matter from "gray-matter";
import Meta from "../components/new/Meta";
import Navigation from "../components/new/Navigation";
import Link from "next/link";
import Bio from "../components/Bio";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

const Index = ({ posts }) => {
  return (
    <>
      <Meta
        title={`Kameron Tanseli | Growth Engineer, JavaScript Dev, Entrepreneur`}
        description={`Hi 🙌🏻, my name's Kameron Tanseli I'm a Growth
                Engineer, JavaScript developer, and entrepreneur. I'm currently focused with helping Tray.io become the next biggest tech IPO.`.trim()}
      />
      <Navigation />
      <Bio />
      <Articles posts={posts} />
      <Footer />
      <style jsx>{``}</style>
    </>
  );
};

Index.getInitialProps = async function() {
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

export default Index;
