const Bio = () => (
  <div className="bio">
    <div className="container">
      <img
        className="bio-img"
        width={120}
        src="/static/profile.jpg"
        alt="Kameron Tanseli"
      />
      <div className="bio-content">
        <p>Hey, I'm Kameron.</p>
        <p>
          I work as a Senior Growth Engineer at{" "}
          <a target="_blank" href="http://qatalog.com/">
            Qatalog
          </a>
          , a London based work collaboration startup that's{" "}
          <a target="_blank" href="https://techcrunch.com/2020/10/13/qatalog/">
            growing rapidly
          </a>
          . I was previously at:{" "}
          <a target="_blank" href="http://publicdash.com">
            Tray.io ($600m+)
          </a>
          ,{" "}
          <a target="_blank" href="https://tryflux.com">
            Flux ($14M+)
          </a>
          , and {" "}
          <a target="_blank" href="http://motivii.com/">
            Motivii (Exit)
          </a>.
        </p>
        <p>
          In my down time I like to make <a href="/projects">micro-saas</a>{" "}
          startups. So far I've launched:{" "}
          <a target="_blank" href="https://readercatch.com">
            Readercatch
          </a>
          ,{" "}
          <a target="_blank" href="https://leananalyticscanvas.com/">
            Lean Analytics Canvas
          </a>
          , and{" "}
          <a target="_blank" href="http://publicdash.com">
            Public Dash
          </a>
          .
        </p>
        <p>
          I also <a href="/blog">write sometimes</a>. Some of my top articles to
          date include:{" "}
          <a
            target="_blank"
            href="https://kamrn.com/blog/first-it-was-craiglist-next-its-zapier"
          >
            {" "}
            First, it was Craigslist, next it's Zapier (#1 HN 30K+ views)
          </a>{" "}
          and{" "}
          <a href="/blog/utilise-render-props-to-separate-logic-from-presentation-in-react">
            Utilise Render Props in React (9k+ views)
          </a>
          .
        </p>
        <p>
          You can find me on{" "}
          <a target="_blank" href="https://instagram.com/kameron_tanseli/">
            Instagram
          </a>
          , and{" "}
          <a target="_blank" href="https://twitter.com/KameronTanseli">
            Twitter
          </a>
          .
        </p>
      </div>
    </div>
    <style jsx>{`
      .bio {
        padding: 2em;
      }
      .bio-img {
        display: block;
        margin: 0 auto;
        border-radius: 100px;
        margin-top: 2em;
        margin-bottom: 2em;
      }
      .bio-content {
        font-size: 1.2em;
      }
      .bio-content a {
        color: #000;
        font-weight: 600;
      }
    `}</style>
  </div>
);

export default Bio;
