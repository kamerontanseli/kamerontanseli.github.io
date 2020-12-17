const { default: Link } = require("next/link");

function pad(n) {
  return n <= 9 ? `0${n}` : n.toString();
}

function toDDMMYYY(date) {
  const d = new Date(date);
  return `${pad(d.getDate())}-${pad(d.getMonth())}-${pad(d.getFullYear())}`;
}

const Articles = ({ posts }) => (
  <div className="container">
    <div className="articles">
      <style jsx>{`
        .articles {
          padding: 2em;
        }
        .articles-title {
          margin-top: 0;
          margin-bottom: 0.5em;
        }
        .articles-post {
          display: grid;
          align-items: center;
          grid-template-columns: auto 1fr;
          grid-gap: 20px;
          padding: 0.25em 0;
          margin-bottom: 10px;
          border-bottom: 1px solid #eee;
        }
        .articles-post-date {
          color: #9e9e9e;
        }
        .articles-post-title a {
          color: #0073a7;
          text-decoration: none;
        }
        .articles-posts > .articles-post:last-child {
          border-bottom: none;
        }
        @media screen and (max-width: 480px) {
          .articles-post-date {
            display: none;
          }
        }
      `}</style>
      <div id="articles" className="articles-posts">
        {posts.map((post) => (
          <div key={post.slug} className="articles-post">
            <div className="articles-post-date">
              {toDDMMYYY(post.document.data.date)}
            </div>
            <div className="articles-post-title">
              <Link href={`/blog/${post.slug}`}>
                <a href={`/blog/${post.slug}`}>{post.document.data.title}</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Articles;
