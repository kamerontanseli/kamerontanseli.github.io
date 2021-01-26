import Footer from "../components/Footer";
import Meta from "../components/new/Meta";
import Navigation from "../components/new/Navigation";

const Projects = () => (
  <>
    <Meta
      title={`Kameron Tanseli | Projects`}
      description={`
      Kameron Tanseli's Growth Engineering Blog. Kameron is a Senior Growth Engineer at Tray.io ($600m+), 
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
              <a target="_blank" href="https://leananalyticscanvas.com">
                Lean Analytics Canvas
              </a>
            </h3>
            <p>
              Lean Analytics by Avinash Kaushik aims to help you create a
              sustainable way to pick metrics that matter by tying them to
              fundamental business problems, creating hypotheses you can test
              and driving change in the business from the learnings you
              identify.
            </p>
          </div>
          <div className="projects-project">
            <h3>
              <a target="_blank" href="https://ikigai-tool.netlify.app/">
                Ikigai Online Tool
              </a>
            </h3>
            <p>
              Ikigai is the Japanese concept that means "a reason for being."
              The word refers to having a meaningful direction or purpose in
              life. I created an online tool to help me reflect and answer this
              very question.
            </p>
          </div>
          <div className="projects-project">
            <h3>
              <a target="_blank" href="https://readercatch.com">
                Readercatch.com
              </a>
            </h3>
            <p>
              Convert visitors into customers with high-converting email banner
              pop-ups.
            </p>
            <p>
              Part of the 12 startups challenge.{" "}
              <a href="/blog/readercatch">See progress here</a>.
            </p>
          </div>
          <div className="projects-project">
            <h3>
              <a target="_blank" href="https://publicdash.com">
                PublicDash.com
              </a>
            </h3>
            <p>
              Public Embeddable Dashboards to increase public accountability to
              reaching key metrics.
            </p>
            <p>
              I built the MVP in 1 evening using Node, Mongo, and Edge
              Templates. You can check it out on{" "}
              <a href="/metrics">my open metrics page</a>.
            </p>
          </div>
          <div className="projects-project">
            <h3>
              <a target="_blank" href="/projects/dreamline">
                4HWW Dreamline Tool
              </a>
            </h3>
            <p>
              The 4 Hour Work Week is one of my all time favourite books. Having
              gone from working 9-5s to 4 hour days myself it's been a huge
              inspiration to me for years.
            </p>
            <p>
              I commonly use the dreamline worksheet in the book to map out my
              goals in life every quarter. I realised I could just make it into
              an offline-first web app 🙃.
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
        padding: 2em;
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
