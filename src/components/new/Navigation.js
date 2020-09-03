import Link from 'next/link'

export default function Navigation() {
  return (
    <div>
      <style jsx>{`
        ul {
          margin-bottom: 0;
        }
        ul {
          padding: 0;
          padding-bottom: 40px;
          margin: 0;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        li {
          margin-left: 20px;
        }
        a {
          text-decoration: none;
        }
      `}</style>
      <nav>
        <ul>
          <li>
            <Link href="/" as="/">
              <a href="/">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/work" as="/work">
              <a href="/work">Work</a>
            </Link>
          </li>
          <li>
            <Link href="/blog" as="/blog">
              <a href="/blog">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/archive" as="/archive">
              <a href="/archive">Archive</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
