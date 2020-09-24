import Meta from "../components/new/Meta";
import Navigation from "../components/new/Navigation";

const Work = () => {
  return (
    <>
      <div className="layout">
        <Meta
          title={`kamrn | Growth Engineer, Maker, Speaker`}
          description={``}
        />
        <Navigation />
        <h1>Career</h1>
        <p>
          Senior Growth Engineer -{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://tray.io">
            Tray.io
          </a>
        </p>
        <p>
          Senior Front End Engineer -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tryflux.com/"
          >
            Flux
          </a>
        </p>
        <p>
          Lead Front End Engineer -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.motivii.com/"
          >
            Motivii
          </a>
        </p>
        <p>
          Junior Full Stack Engineer -{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.boxfx.co.uk/"
          >
            BOXFX
          </a>
        </p>

        <h1>Products</h1>

        <h3>MetaScan</h3>
        <p>
          Ensuring Social tags are setup correctly whilst developing locally is
          a nightmare. <br />
          After finding that the existing meta chrome extensions aren't
          professionally developed I've set out to make one myself.
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://getmetascan.com/"
          >
            View
          </a>
        </p>

        <h3>londonremotework.com</h3>
        <p>
          Built during the height of Covid-19 in the UK. I built a site which
          scrapes Indeed and filters only by remote roles in London. <br />{" "}
          Completely ad free to help with the unemployment crisis we have at the
          moment.
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://londonremotework.com/"
          >
            View
          </a>
        </p>

        <h3>tweet2gram.com</h3>
        <p>
          Stuck in my house during Lockdown I decided to build a Twitter to
          Instagram screenshot tool.
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tweet2gram.com/"
          >
            View
          </a>
        </p>

        <h3>gsheet2mail.com - dead</h3>
        <p>
          Playing around with no-code tools I created a tool which consumes a
          google sheet, <br /> turns it into an RSS feed and plugs it into
          Mailchimp to create automated newsletters.
        </p>

        <h3>cycle-notes.com - dead</h3>
        <p>
          Took a 3 month break after leaving Flux and decided to pursue creating
          a tool to help people study. <br /> Cycle notes is a micro studying
          tool which breaks down long notes by sending you a small paragraph
          from your notes every day. #7 on ProductHunt
        </p>

        <h3>onepageday.com - dead</h3>
        <p>
          Created an email newsletter which sent one page from a new book
          everyday to a list of subscribers. #8 on ProductHunt
        </p>

        <h3>trysalud.com - dead</h3>
        <p>
          Salud was a startup idea I had during my interview process at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.zinc.vc/"
          >
            Zinc
          </a>
          . <br />
          It allowed those suffering from food allergies to quickly filter fast
          food restaurant menus.
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

export default Work;
