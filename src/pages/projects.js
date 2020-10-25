import Footer from "../components/Footer";
import Meta from "../components/new/Meta";
import Navigation from "../components/new/Navigation";

const Projects = () => (
  <>
    <Meta
      title={`Kameron Tanseli | Projects`}
      description={`Hi 🙌🏻, my name's Kameron Tanseli I'm a Growth
                Engineer, JavaScript developer, and entrepreneur. I'm currently focused with helping Tray.io become the next biggest tech IPO.`.trim()}
    />
    <Navigation />
    <div className="container">
      <div className="content">
        <h1 className="content-title">Projects: </h1>
        <div className="projects">
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
              Templates. You can checkout{" "}
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
          <div className="projects-project">
            <h3>londonremotework.com</h3>
            <p>
              In the midst of a nationwide lockdown and increasing uneployment.
              I decided to use tray.io and Next.js to create an ad-free job site
              specifically for remote jobs in the UK.
            </p>
          </div>
          <div className="projects-project">
            <h3>tweet2gram.com</h3>
            <p>
              Just another twitter screenshot tool. P.S: I loved getting cease
              and decist emails from Instagram.
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
        color: #0073a7;
        text-decoration: none;
      }
      .projects-project p {
        font-size: 0.8em;
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
