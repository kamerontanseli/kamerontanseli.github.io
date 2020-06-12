import Link from "next/link";

export default function Sidebar({ slice, posts, current }) {
  return (
    <div>
      <style jsx>{`
        ul {
          padding-left: 0;
          list-style: none;
        }

        ul li {
          margin-bottom: 0.8em;
        }

        a {
          color: #000;
          text-decoration: none;
        }

        .active a {
          opacity: 0.4;
        }

        h4 {
          margin-bottom: 3em;
        }

        @media screen and (max-width: 1024px) {
          h4 {
            margin-bottom: 20px;
          }
        }

        .button {
          text-decoration: none;
          padding: 10px 20px;
          border: 1px solid #333;
          margin-top: 20px;
          display: inline-block;
          border-radius: 40px;
        }
      `}</style>
      <h4>My Thoughts</h4>
      <nav>
        <ul>
          {(slice ? posts.slice(0, 15) : posts).map(({ document, slug }) => (
            <li key={slug} className={slug === current ? "active" : ""}>
              <Link href={`/blog/${slug}`} as={`/blog/${slug}`}>
                <a href={`/blog/${slug}`}>{document.data.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {slice ? (
        <Link href={`/archive`} as={`/archive`}>
          <a className="button" href={`/archive`}>
            All Articles
          </a>
        </Link>
      ) : null}
    </div>
  );
}

Sidebar.defaultProps = {
  slice: true,
};
