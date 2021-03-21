import Link from "next/link";

export default function Navigation() {
  return (
    <div className="navigation-bg">
      <div className="container">
        <div className="navigation">
          <div className="navigation-brand">
            <Link href="/">
              <a className="navigation-logo" href="/">
                KAMRN
              </a>
            </Link>
          </div>
          <div className="navigation-menu">
            <div>
              <Link href="/">
                <a href="/" className="navigation-link">
                  Home
                </a>
              </Link>
            </div>
            <div>
              <Link href="/blog">
                <a href="/blog" className="navigation-link">
                  Blog
                </a>
              </Link>
            </div>
            <div>
              <Link href="/projects">
                <a href="/projects" className="navigation-link">
                  Projects
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .navigation-bg {
          background-color: #fff;
        }

        .navigation {
          padding: 1em 2em;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
        }

        .navigation-menu {
          display: flex;
          align-items: center;
        }

        .navigation-menu a {
          margin-left: 20px;
        }

        .navigation-logo {
          text-decoration: none;
          color: #000;
          font-size: 1em;
          letter-spacing: 5px;
        }

        .navigation-link {
          color: #000;
          text-decoration: none;
          font-size: 0.9em;
        }

        @media screen and (max-width: 480px) {
          .navigation {
            grid-template-columns: 1fr;
            grid-gap: 10px;
          }
          .navigation-menu {
            display: grid;
            grid-template-columns: repeat(4, auto);
          }
          .navigation-menu > div {
            text-align: left;
          }
          .navigation-menu a {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
