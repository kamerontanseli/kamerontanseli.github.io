import Navigation from "../components/new/Navigation";
import Footer from "../components/Footer";
import SEO from "../components/new/Seo";
import Link from "next/link";

const Growth = () => {
  return (
    <>
      <SEO title={`Kameron Tanseli | Growth Engineer`} />
      <Navigation />
      <div className="container content">
        <h1>Growth Engineering</h1>
        <p>
          Growth Engineering is the art of creating and running experiments in
          order to improve any/all stages of a marketing/sales funnel. A Growth
          Engineer, therefore, is a software engineer who can analyze data, make
          assumptions, and then test those assumptions with experiments.
        </p>
        <p>
          I've pulled together a list of books/articles down below, which I
          believe to be learning requirements for any engineer looking to step
          into a growth role.
        </p>
        <h2>Technical Books</h2>
        <ol>
          <li>
            <a href="http://www.htmlandcssbook.com/" target="_blank">
              HTML & CSS by Jon Duckett
            </a>
          </li>
          <li>
            <a href="http://jsforcats.com/" target="_blank">
              JS for cats by Maxwell Ogden
            </a>
          </li>
          <li>
            <a
              href="https://www.codecademy.com/learn/learn-sql"
              target="_blank"
            >
              Learn SQL by Codecademy
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/A/B_testing" target="_blank">
              A/B Testing on Wikipedia
            </a>
          </li>
        </ol>
        <h2>Business & Analytics Books</h2>
        <ol>
          <li>
            <a href="http://theleanstartup.com/" target="_blank">
              The Lean Startup by Eric Ries
            </a>
          </li>
          <li>
            <a href="https://leananalyticsbook.com/" target="_blank">
              Lean Analytics by Alistair Croll (highly recommended)
            </a>
          </li>
          <li>
            <a
              href="https://www.penguinrandomhouse.com/books/545936/hacking-growth-by-sean-ellis-founder-of-growthhackerscom-and-morgan-brown/"
              target="_blank"
            >
              Hacking Growth: How Today's Fastest-Growing Companies Drive
              Breakout Success by Sean Ellis
            </a>
          </li>
          <li>
            <a
              href="https://books.google.co.uk/books/about/Growth_Hacking.html?id=yKpiswEACAAJ&redir_esc=y"
              target="_blank"
            >
              Growth Hacking: Silicon Valley's Best Kept Secret by Raymond Fong
            </a>
          </li>
          <li>
            <a
              href="https://www.dummies.com/programming/big-data/data-science/aarrr-e-commerce-sales-funnel/"
              target="_blank"
            >
              The AARRR of the E-Commerce Sales Funnel by Lillian Pierson
            </a>
          </li>
        </ol>
        <h2>Articles</h2>
        <ul>
          <li>
            <a
              href="https://davidlykhim.com/hubspot-growth-experiment-process/"
              target="_blank"
            >
              HubSpot’s Growth Process and How We Prioritize Experiments
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Five_whys" target="_blank">
              The Five whys
            </a>
          </li>
          <li>
            <a
              href="https://hbr.org/2021/04/to-make-lean-startups-work-you-need-a-balanced-team"
              target="_blank"
            >
              To Make Lean Startups Work, You Need a Balanced Team
            </a>
          </li>
          <li>
            <a
              href="https://hbr.org/2021/04/to-make-lean-startups-work-you-need-a-balanced-team"
              target="_blank"
            >
              To Make Lean Startups Work, You Need a Balanced Team
            </a>
          </li>
          <li>
            <a href="https://leanstartup.co/what-is-an-mvp/" target="_blank">
              What is an MVP?
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Confidence_interval"
              target="_blank"
            >
              Confidence interval
            </a>
          </li>
        </ul>
      </div>
      <Footer />
      <style jsx>{`
        .content {
        }
      `}</style>
    </>
  );
};

export default Growth;
