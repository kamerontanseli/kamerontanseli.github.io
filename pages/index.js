import matter from "gray-matter";
import Image from "next/image";
import SEO from "../components/new/Seo";

const Index = ({ posts }) => {
  return (
    <div>
      <SEO title="Kameron Tanseli | Home" />
      <style jsx>{`
        .columns {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 2em;
          padding-bottom: 1em;
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

        .article-item__category {
          display: flex;
          justify-content: flex-end;
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

        .tools {
          border-bottom: 1px solid #eee;
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
        <Image style={{ margin: 0, borderRadius: 60, width: 60, height: 60 }} width={60} height={60} src="/profile.png" alt="Kameron Tanseli" />
        <div className="content">
          <p>Hey, I'm Kameron Tanseli.</p>

          <p>
            I'm a senior experimentation product manager at{' '}
            <strong>
              <a target="_blank" href="https://numan.com/">
                Numan
              </a>
            </strong>
            .
          </p>

          <p>
            I help businesses learn about their customers and grow rapidly
            through the use of experimentation.
          </p>

          <p>
            Follow me on:{" "}
            <a target="_blank" href="https://twitter.com/KameronTanseli">
              Twitter
            </a>
            {" "}|{" "}
            <a
              target="_blank"
              href="https://www.producthunt.com/@kameron_tanseli"
            >
              ProductHunt
            </a>
          </p>
        </div>
      </div>
      <div className="tools">
        <a target="_blank" href="https://leananalyticscanvas.com"><p>leananalyticscanvas.com</p></a>
        <p>
          Plan out your next business idea with a free online business canvas planner.
          All data is saved on your browser locally, and all boards can be exported to a PNG for sharing.
        </p>
        <a target="_blank" href="https://bayes.fyi"><p>bayes.fyi</p></a>
        <p>
          A bayesian AB testing calculator that uses expected loss alongside probability to determine winning variations.
        </p>
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

export async function getStaticProps() {
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
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export default Index;
