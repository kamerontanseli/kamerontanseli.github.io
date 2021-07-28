import matter from "gray-matter";
import SEO from "../../components/new/Seo";

const Category = ({ category, posts }) => {
  return (
    <div>
      <SEO title={`Kameron Tanseli | ${category}`} />
      <style jsx>{`
        .columns {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 2em;
          padding-bottom: 2em;
          border-bottom: 1px solid #eee;
        }
        img {
          max-width: 60px;
          border-radius: 60px;
        }
        .content > *:first-child {
          margin-top: 0;
        }
        .content > *:last-child {
          margin-bottom: 0;
        }

        .articles {
          overflow: auto;
        }

        .articles table {
          width: 100%;
          text-align: left;
        }

        .articles table tr > td {
          padding: 1em 0;
        }

        .articles table tr > td:first-child {
          width: 150px;
          color: #676767;
        }

        .article-item__category > a {
          text-transform: capitalize;
          font-size: 0.65em;
          padding: 5px 10px;
          background-color: #eee;
          border-radius: 4px;
          text-decoration: none;
        }

        .article-item__category > a:hover {
          background-color: #ddd;
        }

        @media screen and (max-width: 769px) {
          .columns {
            grid-template-columns: 1fr;
          }
          .article-item__date {
            display: none;
          }
        }
      `}</style>
      <div className="columns">
        <img width={150} src="/static/profile.jpeg" alt="Kameron Tanseli" />
        <div className="content">
          <h1 style={{ textTransform: "capitalize" }}>{category}</h1>
        </div>
      </div>
      <div className="articles">
        <table>
          <tbody>
            {posts.map((post) => (
              <tr className="article-item" key={post.slug}>
                <td className="article-item__date">
                  {new Date(post.document.data.date).toDateString()}
                </td>
                <td>
                  <a href={`/blog/${post.slug}/`}>{post.document.data.title}</a>
                </td>
                <td className="article-item__category">
                  <a href={`/category/${post.document.data.category}/`}>
                    {post.document.data.category}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const category = params.slug;
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
  })(require.context("../../posts", true, /\.md$/))
    .sort(
      (a, b) => new Date(b.document.data.date) - new Date(a.document.data.date)
    )
    .filter((p) => {
      return p.document.data.category === category;
    });

  return {
    props: {
      category,
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export async function getStaticPaths() {
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
  })(require.context("../../posts", true, /\.md$/))
    .sort(
      (a, b) => new Date(b.document.data.date) - new Date(a.document.data.date)
    )
    .map((p) => p.document.data.category);

  return {
    paths: posts.map((category) => ({
      params: { slug: category },
    })),
    fallback: false,
  };
}

export default Category;
