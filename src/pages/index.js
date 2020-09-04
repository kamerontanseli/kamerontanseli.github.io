import Meta from "../components/new/Meta";
import Navigation from "../components/new/Navigation";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <div className="layout">
        <Meta
          title={`kamrn | Growth Engineer, Maker, Speaker`}
          description={``}
        />
        <Navigation />
        <h1>Kameron Tanseli</h1>
        <p>
          Senior Growth Engineer at{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://tray.io">
            Tray.io
          </a>
        </p>
        <p>
          <Link href="/blog" as="/blog">
            <a style={{ marginRight: 10 }} href="/blog">
              Blogger
            </a>
          </Link>
          <Link href="/work" as="/work">
            <a style={{ marginRight: 10 }} href="/work">
              Maker
            </a>
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/KameronTanseli"
          >
            Avid Tweeter
          </a>
        </p>
      </div>
      <style jsx>{`
        .layout {
          padding: 10em;
        }
        @media screen and (max-width: 1024px) {
          .layout {
            padding: 1em;
          }
        }
      `}</style>
    </>
  );
};

export default Index;
