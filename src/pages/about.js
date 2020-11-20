import Meta from "../components/new/Meta";
import Navigation from "../components/new/Navigation";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Footer from "../components/Footer";

const About = ({ post }) => {
  return (
    <>
      <Meta
        title={`Kameron Tanseli | About Me`}
        description={`My first job was at age fifteen at an agency in St Albans. 
        I was helping in the creation of an in-house CMS as a junior 
        full-stack Django developer.
        `.trim()}
      />
      <Navigation />
      <div className="container">
        <div className="about">
          <h1 className="about-title">About Kameron</h1>
          <div className="about-columns">
            <div className="about-images">
              <img
                className="about-pp"
                width={100}
                src="/static/profile.jpg"
                alt="Kameron Tanseli"
              />
            </div>
            <div className="about-content">
              <ReactMarkdown source={post.content} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .about {
          padding: 2em;
        }
        .about-title {
          margin-top: 0;
          margin-bottom: 1em;
        }
        .about-pp {
          border-radius: 200px;
        }
        .about-columns {
          display: grid;
          grid-template-columns: auto 1fr;
          grid-gap: 40px;
        }
        .about-content p {
          margin-top: 0;
        }
        .about-content a {
          color: #0073a7;
        }
        @media screen and (max-width: 480px) {
          .about-columns {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

About.getInitialProps = async function(ctx) {
  const content = await import(`../content/about.md`);
  const post = matter(content.default);

  return { post };
};

export default About;
