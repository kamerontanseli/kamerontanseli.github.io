import matter from "gray-matter";
import BlogSplitView from "../../components/new/BlogSplitView";

const Blog = (props) => {
  return <BlogSplitView {...props} />;
};

export default Blog;

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
  })(require.context("../../posts", true, /\.md$/)).sort(
    (a, b) => new Date(b.document.data.date) - new Date(a.document.data.date)
  );
  
  const firstPost = posts[0];
  const content = await import(`../../posts/${firstPost.slug}.md`);
  const post = matter(content.default);

  return {
    allBlogs: posts,
    post,
    slug: firstPost.slug,
  };
};
