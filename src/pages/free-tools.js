import matter from "gray-matter";
import SEO from "../components/new/Seo";

const FreeTools = ({ posts }) => {
  return (
    <div>
      <SEO title="Kameron Tanseli | Home" />
      <style jsx>{`
        .columns {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 2em;
          padding-bottom: 2em;
          border-bottom: 1px solid #eee;
        }
        img {
          max-width: 60px;
          border-radius: 60px;
        }
        .content > *:first-child {
          margin-top: 0;
        }
        .content > *:last-child {
          margin-bottom: 0;
        }

        @media screen and (max-width: 769px) {
          
        }
      `}</style>
      <div className="columns">
        <img style={{ margin: 0 }} width={150} src="/static/profile.jpeg" alt="Kameron Tanseli" />
        <div className="content">
          <p>Hey, I'm Kameron Tanseli.</p>

          <p>
            I currently lead growth at{" "}
            <strong>
              <a target="_blank" href="https://qatalog.com/">
                Qatalog.com
              </a>
            </strong>
            .
          </p>

          <p>
            I help businesses learn about their customers and grow rapidly
            through the use of experimentation.
          </p>

          <p>
            Follow me on:{" "}
            <a target="_blank" href="https://twitter.com/KameronTanseli">
              Twitter
            </a>
            ,{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/kameron_tanseli/"
            >
              Instagram
            </a>
            , or{" "}
            <a
              target="_blank"
              href="https://www.producthunt.com/@kameron_tanseli"
            >
              ProductHunt
            </a>
          </p>
        </div>
      </div>
      <div className="tools">
        <a target="_blank" href="https://leananalyticscanvas.com"><h4>leananalyticscanvas.com</h4></a>
        <p>
            Plan out your next business idea with a free online business canvas planner. 
            All data is saved on your browser locally, and all boards can be exported to a PNG for sharing.
        </p>
        <a target="_blank" href="https://stoicmorning.com"><h4>stoicmorning.com</h4></a>
        <p>
            A thoughtful daily meditation in your inbox, designed to help you overcome stress, anxiety, and cultivate a productive mindset.
        </p>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default FreeTools;
