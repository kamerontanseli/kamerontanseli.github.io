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
              <a target="_blank" href="https://londonremotework.com/">
                londonremotework.com
              </a>
            </h3>
            <p>
              In the midst of a nationwide lockdown and increasing uneployment.
              I decided to use tray.io and Next.js to create an ad-free job site
              specifically for remote jobs in the UK.
            </p>
          </div>
          <div className="projects-project">
            <h3>
              <a target="_blank" href="https://tweet2gram.com/">
                tweet2gram.com
              </a>
            </h3>
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
