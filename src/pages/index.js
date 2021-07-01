import matter from "gray-matter";
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

        @media screen and (max-width: 769px) {
          .columns {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="columns">
        <img width={150} src="/static/profile.jpeg" alt="Kameron Tanseli" />
        <div className="content">
          <p>Hey, I'm Kameron Tanseli.</p>

          <p>
            I'm the Senior Growth Engineer at{" "}
            <strong>
              <a target="_blank" href="https://qatalog.com/">
                Qatalog.com
              </a>
            </strong>
            .
          </p>

          <p>
            I help businesses learn about their customers and grow rapidly
            through the use of growth experiments and data analysis.
          </p>

          <p>
            Sign up to my{" "}
            <a
              target="_blank"
              href="https://www.getrevue.co/profile/kamerontanseli"
            >
              Newsletter
            </a>{" "}
            to get notified when I write a new article.
          </p>

          <p>
            Follow me on:{" "}
            <a target="_blank" href="https://twitter.com/KameronTanseli">
              Twitter
            </a>
            ,{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/kameron_tanseli/"
            >
              Instagram
            </a>
            , or{" "}
            <a
              target="_blank"
              href="https://www.producthunt.com/@kameron_tanseli"
            >
              ProductHunt
            </a>
          </p>
        </div>
      </div>
      <div className="articles">
        <table>
          <tbody>
            {posts.map((post) => (
              <tr key={post.slug}>
                <td>{new Date(post.document.data.date).toDateString()}</td>
                <td>
                  <a href={`/blog/${post.slug}`}>{post.document.data.title}</a>
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
