import Footer from "../components/Footer";
import Meta from "../components/new/Meta";
import Navigation from "../components/new/Navigation";

const Projects = () => (
  <>
    <Meta
      title={`Kameron Tanseli | Projects`}
      description={`
      Kameron Tanseli's Blog. Kameron is a Senior Growth Engineer at Qatalog ($18m+), 
      investor (getchip.uk, getcoconut.com), and IndieHacker (293 upvotes and counting).
      `.trim()}
    />
    <Navigation />
    <div className="container">
      <div className="content">
        <h1 className="content-title">Projects: </h1>
        <div className="projects">
          <div className="projects-project">
            <h3>
              <a target="_blank" href="https://onmycooklist.com/">
                onmycooklist.com
              </a>
            </h3>
            <p>
              Instantly import a recipe from any website, track it's progress,
              and rate it's difficulty and taste. All from one easy to manage
              board.
            </p>
          </div>
          <div className="projects-project">
            <h3>
              <a target="_blank" href="https://leananalyticscanvas.com">
                leananalyticscanvas.com
              </a>
            </h3>
            <p>
              Lean Analytics by Alistair Croll aims to help you create a
              sustainable way to pick metrics that matter by tying them to
              fundamental business problems, creating hypotheses you can test
              and driving change in the business from the learnings you
              identify.
            </p>
          </div>
          <div className="projects-project">
            <h3>
              <a
                target="_blank"
                href="https://chrome.google.com/webstore/detail/meta-scan/eccncioknliednbpdblekghbbchbklip"
              >
                getmetascan.com
              </a>
            </h3>
            <p>
              Having not found a good meta tag analysis extension. I decided to
              build my own.
            </p>
            <p>
              Run a validation on the top 13 key meta tags needed for SEO/Social
              and instantly preview what the URL your on will look like on
              Twitter, Google, and Facebook.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />

    <style jsx>{`
      .content {
        padding: 2em 0;
      }
      .content-title {
        margin-top: 0;
        margin-bottom: 1em;
      }
      .projects {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
      }
      .projects-project h3 {
        margin-top: 0;
      }
      .projects-project h3 a {
        color: #000;
        text-decoration: none;
      }
      .projects-project p {
        font-size: 0.8em;
      }
      .projects-project p a {
        color: #000;
        font-weight: 600;
      }
      @media screen and (max-width: 480px) {
        .projects {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </>
);

export default Projects;
