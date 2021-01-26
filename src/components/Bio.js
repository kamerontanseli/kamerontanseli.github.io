const Bio = () => (
  <div className="bio">
    <div className="container">
      <img
        className="bio-img"
        width={100}
        src="/static/profile.jpg"
        alt="Kameron Tanseli"
      />
      <div className="bio-content">
        <p>Hey, I'm Kameron.</p>
        <p>
          I work as a Senior Growth Engineer at{" "}
          <a target="_blank" href="https://tray.io">
            Tray.io
          </a>
          , a London based automation startup that's{" "}
          <a
            target="_blank"
            href="https://techcrunch.com/2019/11/26/tray-io-brings-in-50m-more-at-a-600m-valuation-for-its-workflow-automation-tools/"
          >
            growing rapidly
          </a>
          . Since joining, I've helped Tray increase their conversion rate by
          150% and created over 640,000 dynamic landing pages to drive SEO.
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
          Previously, as a JS developer, I helped create payment integrations at{" "}
          <a target="_blank" href="https://tryflux.com">
            Flux ($9M+)
          </a>
          , and lead product development at{" "}
          <a target="_blank" href="http://motivii.com/">
            Motivii (Acquired)
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
          <a target="_blank" href="instagram.com/kameron_tanseli/">
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
